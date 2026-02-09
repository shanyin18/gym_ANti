import React, { useState, useRef } from 'react';
import API_BASE_URL from '../config';

/**
 * PDF 上传解析组件
 * 支持拖拽上传，显示解析进度和结果
 */
const PDFUploader = ({ authToken, onClose, onSuccess }) => {
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [uploading, setUploading] = useState(false);
    const [progress, setProgress] = useState(0);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [addToKnowledge, setAddToKnowledge] = useState(true);
    const fileInputRef = useRef(null);

    // 拖拽处理
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        const droppedFile = e.dataTransfer.files?.[0];
        if (droppedFile?.name.toLowerCase().endsWith('.pdf')) {
            setFile(droppedFile);
            setError(null);
            setResult(null);
        } else {
            setError('只支持 PDF 文件');
        }
    };

    const handleFileSelect = (e) => {
        const selectedFile = e.target.files?.[0];
        if (selectedFile) {
            setFile(selectedFile);
            setError(null);
            setResult(null);
        }
    };

    // 上传并解析
    const handleUpload = async () => {
        if (!file) return;

        setUploading(true);
        setProgress(10);
        setError(null);

        const formData = new FormData();
        formData.append('file', file);

        try {
            // 选择端点: 仅解析 or 解析+添加到知识库
            const endpoint = addToKnowledge
                ? '/api/parse-pdf/add-to-knowledge'
                : '/api/parse-pdf';

            setProgress(30);

            const res = await fetch(`${API_BASE_URL}${endpoint}`, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${authToken}`
                },
                body: formData
            });

            setProgress(80);

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.detail || '解析失败');
            }

            setProgress(100);
            setResult(data);

            if (onSuccess) {
                onSuccess(data);
            }

        } catch (err) {
            console.error('Upload error:', err);
            setError(err.message);
        } finally {
            setUploading(false);
        }
    };

    // 清除选择
    const handleClear = () => {
        setFile(null);
        setResult(null);
        setError(null);
        setProgress(0);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            zIndex: 9999, background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(8px)',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <div className="glass-card animate-entry" style={{
                width: '90%', maxWidth: '550px', padding: '28px',
                borderRadius: '24px', display: 'flex', flexDirection: 'column', gap: '20px'
            }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)' }}>
                        📄 PDF 智能解析
                    </h2>
                    <button onClick={onClose} style={{
                        background: 'none', border: 'none', fontSize: '24px',
                        cursor: 'pointer', color: 'var(--text-secondary)', lineHeight: 1
                    }}>×</button>
                </div>

                {/* 拖拽上传区 */}
                <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    style={{
                        border: `2px dashed ${dragActive ? 'var(--accent-color)' : 'rgba(0,0,0,0.15)'}`,
                        borderRadius: '16px',
                        padding: '40px 20px',
                        textAlign: 'center',
                        cursor: 'pointer',
                        background: dragActive ? 'rgba(0, 188, 212, 0.05)' : 'rgba(255,255,255,0.5)',
                        transition: 'all 0.2s ease'
                    }}
                >
                    <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf"
                        onChange={handleFileSelect}
                        style={{ display: 'none' }}
                    />
                    {file ? (
                        <div style={{ color: 'var(--text-primary)' }}>
                            <span style={{ fontSize: '32px' }}>📁</span>
                            <p style={{ margin: '10px 0 0', fontWeight: '600' }}>{file.name}</p>
                            <p style={{ margin: '4px 0 0', fontSize: '13px', color: 'var(--text-secondary)' }}>
                                {(file.size / 1024 / 1024).toFixed(2)} MB
                            </p>
                        </div>
                    ) : (
                        <div style={{ color: 'var(--text-secondary)' }}>
                            <span style={{ fontSize: '40px', opacity: 0.7 }}>📤</span>
                            <p style={{ margin: '12px 0 0', fontSize: '15px' }}>
                                拖拽 PDF 到这里，或 <span style={{ color: 'var(--accent-color)', fontWeight: '600' }}>点击选择</span>
                            </p>
                            <p style={{ margin: '6px 0 0', fontSize: '12px', opacity: 0.7 }}>
                                支持表格、图片等复杂 PDF
                            </p>
                        </div>
                    )}
                </div>

                {/* 选项 */}
                <label style={{
                    display: 'flex', alignItems: 'center', gap: '10px',
                    fontSize: '14px', color: 'var(--text-primary)', cursor: 'pointer'
                }}>
                    <input
                        type="checkbox"
                        checked={addToKnowledge}
                        onChange={(e) => setAddToKnowledge(e.target.checked)}
                        style={{ width: '18px', height: '18px', accentColor: 'var(--accent-color)' }}
                    />
                    解析后自动添加到知识库
                </label>

                {/* 进度条 */}
                {uploading && (
                    <div style={{
                        background: 'rgba(0,0,0,0.05)', borderRadius: '10px',
                        overflow: 'hidden', height: '8px'
                    }}>
                        <div style={{
                            width: `${progress}%`,
                            height: '100%',
                            background: 'linear-gradient(90deg, var(--accent-color), #4fc3f7)',
                            transition: 'width 0.3s ease'
                        }} />
                    </div>
                )}

                {/* 错误提示 */}
                {error && (
                    <div style={{
                        background: 'rgba(255, 82, 82, 0.1)',
                        color: '#d32f2f',
                        padding: '12px 16px',
                        borderRadius: '12px',
                        fontSize: '14px'
                    }}>
                        ❌ {error}
                    </div>
                )}

                {/* 解析结果 */}
                {result && (
                    <div style={{
                        background: 'rgba(76, 175, 80, 0.1)',
                        padding: '16px',
                        borderRadius: '12px',
                        fontSize: '14px',
                        color: 'var(--text-primary)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                            <span style={{ fontSize: '20px' }}>✅</span>
                            <strong>解析成功</strong>
                        </div>
                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px', fontSize: '13px' }}>
                            <div>📝 文本段落: <strong>{result.texts?.length || result.added_documents || 0}</strong></div>
                            <div>📊 表格数量: <strong>{result.tables?.length || 0}</strong></div>
                            <div>🖼️ 图片数量: <strong>{result.images?.length || 0}</strong></div>
                            <div>📄 总元素: <strong>{result.element_count || result.added_documents || 0}</strong></div>
                        </div>
                        {result.added_documents && (
                            <p style={{ marginTop: '10px', color: '#388e3c', fontWeight: '500' }}>
                                ✨ 已添加 {result.added_documents} 条到知识库
                            </p>
                        )}
                    </div>
                )}

                {/* 操作按钮 */}
                <div style={{ display: 'flex', gap: '12px' }}>
                    {file && !result && (
                        <button
                            onClick={handleClear}
                            style={{
                                flex: 1, padding: '14px',
                                background: 'rgba(0,0,0,0.05)',
                                border: 'none', borderRadius: '14px',
                                fontSize: '15px', fontWeight: '600',
                                color: 'var(--text-secondary)', cursor: 'pointer'
                            }}
                        >
                            清除
                        </button>
                    )}
                    <button
                        onClick={result ? handleClear : handleUpload}
                        disabled={!file || uploading}
                        style={{
                            flex: 2, padding: '14px',
                            background: (!file || uploading) ? '#ccc' : 'linear-gradient(135deg, var(--accent-color), #26c6da)',
                            border: 'none', borderRadius: '14px',
                            fontSize: '15px', fontWeight: '700',
                            color: 'white', cursor: (!file || uploading) ? 'not-allowed' : 'pointer',
                            boxShadow: (!file || uploading) ? 'none' : '0 4px 15px rgba(0, 188, 212, 0.3)',
                            transition: 'all 0.2s ease'
                        }}
                    >
                        {uploading ? '解析中...' : result ? '继续上传' : '🚀 开始解析'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default PDFUploader;
