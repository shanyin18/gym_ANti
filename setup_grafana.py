import requests
import json

# Grafana 配置
GRAFANA_URL = "http://localhost:3001"
AUTH = ("admin", "admin")
HEADERS = {"Content-Type": "application/json"}

# 仪表盘定义
dashboard_data = {
    "dashboard": {
        "id": None,
        "uid": "gym_anti_fastapi",
        "title": "Gym ANti - API 监控",
        "tags": ["FastAPI", "Prometheus"],
        "timezone": "browser",
        "schemaVersion": 16,
        "version": 0,
        "refresh": "5s",
        "panels": [
            # Panel 1: QPS (Total Requests per Second)
            {
                "id": 1,
                "title": "系统总 QPS (Req/s)",
                "type": "timeseries",
                "gridPos": {"h": 8, "w": 12, "x": 0, "y": 0},
                "targets": [
                    {
                        "expr": "sum(rate(http_requests_total[1m]))",
                        "legendFormat": "Total QPS",
                        "refId": "A"
                    }
                ],
                "fieldConfig": {
                    "defaults": {
                        "color": {"mode": "palette-classic"},
                        "custom": {"axisCenteredZero": False, "axisColorMode": "text", "axisLabel": "", "axisPlacement": "auto", "barAlignment": 0, "drawStyle": "line", "fillOpacity": 10, "gradientMode": "none", "hideFrom": {"legend": False, "tooltip": False, "viz": False}, "lineInterpolation": "linear", "lineWidth": 1, "pointSize": 5, "scaleDistribution": {"type": "linear"}, "showPoints": "auto", "spanNulls": False, "stacking": {"group": "A", "mode": "none"}, "thresholdsStyle": {"mode": "off"}},
                        "mappings": [],
                        "thresholds": {"mode": "absolute", "steps": [{"color": "green", "value": None}, {"color": "red", "value": 80}]},
                        "unit": "reqps"
                    },
                    "overrides": []
                }
            },
            # Panel 2: P99 Latency
            {
                "id": 2,
                "title": "P99 响应延迟 (秒)",
                "type": "timeseries",
                "gridPos": {"h": 8, "w": 12, "x": 12, "y": 0},
                "targets": [
                    {
                        "expr": "histogram_quantile(0.99, sum(rate(http_request_duration_seconds_bucket[1m]) by (le)))",
                        "legendFormat": "P99 Latency",
                        "refId": "A"
                    }
                ],
                "fieldConfig": {
                    "defaults": {
                        "unit": "s"
                    }
                }
            },
            # Panel 3: QPS by Handler
            {
                "id": 3,
                "title": "各接口 QPS",
                "type": "timeseries",
                "gridPos": {"h": 8, "w": 24, "x": 0, "y": 8},
                "targets": [
                    {
                        "expr": "sum(rate(http_requests_total[1m])) by (handler)",
                        "legendFormat": "{{handler}}",
                        "refId": "A"
                    }
                ]
            }
        ]
    },
    "overwrite": True
}

def create_dashboard():
    url = f"{GRAFANA_URL}/api/dashboards/db"
    try:
        response = requests.post(url, auth=AUTH, json=dashboard_data, headers=HEADERS)
        if response.status_code == 200:
            print("✅ 仪表盘 [Gym ANti - API 监控] 创建成功！")
            print(f"👉 访问地址: {GRAFANA_URL}/d/gym_anti_fastapi")
        else:
            print(f"❌ 创建失败: {response.status_code}")
            print(response.text)
    except Exception as e:
        print(f"❌ 连接 Grafana 失败: {e}")

if __name__ == "__main__":
    create_dashboard()
