# 自动化性能分析脚本
# 需要以管理员权限运行 (py-spy 要求)

Write-Host "Starting Analysis..."

# 0. 先清理占用 8000 端口的进程 (如果有)
Write-Host "Checking for existing processes on port 8000..."
$existingConnections = Get-NetTCPConnection -LocalPort 8000 -ErrorAction SilentlyContinue
if ($existingConnections) {
    $pidsToKill = $existingConnections | Select-Object -ExpandProperty OwningProcess -Unique
    foreach ($procId in $pidsToKill) {
        Write-Host "Killing process $procId occupying port 8000..."
        Stop-Process -Id $procId -Force -ErrorAction SilentlyContinue
    }
    Start-Sleep -Seconds 2
}

# 1. 启动服务器
Write-Host "Starting FastAPI Server..."
$env:PYTHONPATH = "$PWD"
$serverProcess = Start-Process -FilePath "conda" -ArgumentList "run", "-n", "fastapi_env", "python", "server-python/main.py" -PassThru -NoNewWindow
$serverPid = $serverProcess.Id

if (-not $serverProcess) {
    Write-Error "Failed to start server."
    exit 1
}

Write-Host "Server started with PID: $serverPid"
Write-Host "Waiting for server to be ready on port 8000..."

# 循环检查端口是否监听 (最多等待 30 秒)
$maxRetries = 30
$portReady = $false
for ($i = 0; $i -lt $maxRetries; $i++) {
    $conn = Test-NetConnection -ComputerName 127.0.0.1 -Port 8000 -InformationLevel Quiet
    if ($conn) {
        $portReady = $true
        break
    }
    Start-Sleep -Seconds 1
}

if (-not $portReady) {
    Write-Error "Server failed to start or bind port 8000 within 30 seconds."
    Stop-Process -Id $serverPid -Force
    exit 1
}

Write-Host "Server is ready! Waiting 20s for warmup (skipping startup cost)..."
Start-Sleep -Seconds 20

# 尝试找到真正的 Python 进程 PID (因为 conda run 会创建一个包装进程)
$targetPid = $serverPid
try {
    # 查找命令行包含 server-python/main.py 且进程名为 python.exe 的进程
    $pythonProc = Get-CimInstance Win32_Process -Filter "Name = 'python.exe' AND CommandLine LIKE '%server-python/main.py%'" | Sort-Object CreationDate -Descending | Select-Object -First 1
    if ($pythonProc) {
        $targetPid = $pythonProc.ProcessId
        Write-Host "Found actual Python PID: $targetPid"
    }
    else {
        Write-Warning "Could not find Python process via WMI. Falling back to Conda wrapper PID (may fail)."
    }
}
catch {
    Write-Warning "WMI query failed. Falling back to Conda wrapper PID."
}

# 2. 启动 py-spy 录制 (后台)
# 录制 60 秒 (包含压测阶段)
$svgPath = "server-python/performance/profile.svg"
$pySpyPath = "C:\Users\86198\.conda\envs\fastapi_env\Scripts\py-spy.exe"
Write-Host "Starting py-spy recording on PID $targetPid..."
# 直接运行 py-spy，不通过 conda run，并添加 --subprocesses 抓取子进程
Start-Process -FilePath $pySpyPath -ArgumentList "record", "-o", $svgPath, "--pid", $targetPid, "--duration", "60", "--subprocesses" -NoNewWindow

# 3. 启动 Locust 压测
Write-Host "Starting Locust load test..."
conda run -n fastapi_env locust -f server-python/performance/locustfile.py --headless -u 10 -r 2 --run-time 1m --host http://127.0.0.1:8000 --csv server-python/performance/locust_report

# 4. 清理
Write-Host "Stopping Server..."
Stop-Process -Id $serverPid -Force

Write-Host "Analysis Complete."
Write-Host "Flamegraph saved to: $svgPath"
