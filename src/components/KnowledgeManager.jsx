import React, { useState, useEffect, useRef } from 'react';
import API_BASE_URL from '../config';

const KnowledgeManager = ({ authToken, onClose }) => {
    const [documents, setDocuments] = useState([]);
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(false);
    const [submitting, setSubmitting] = useState(false);
    const [activeTab, setActiveTab] = useState('text'); // 'text' | 'pdf'

    // PDF 上传相关状态
    const [pdfFile, setPdfFile] = useState(null);
    const [pdfUploading, setPdfUploading] = useState(false);
    const [pdfResult, setPdfResult] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const fileInputRef = useRef(null);

    const [selectedDocs, setSelectedDocs] = useState(new Set());

    useEffect(() => {
        fetchDocuments();
    }, []);

    const fetchDocuments = async () => {
        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/knowledge`, {
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            const data = await res.json();
            setDocuments(data.documents || []);
            setSelectedDocs(new Set()); // 重置选择
        } catch (err) {
            console.error('Fetch documents error:', err);
        }
        setLoading(false);
    };

    const handleAdd = async (e) => {
        e.preventDefault();
        if (!content.trim()) return;

        setSubmitting(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/knowledge`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ content: content.trim() })
            });
            const data = await res.json();
            if (data.success) {
                setContent('');
                fetchDocuments();
            } else {
                alert(`添加失败: ${data.detail || JSON.stringify(data)}`);
            }
        } catch (err) {
            console.error('Add document error:', err);
            alert(`请求失败: ${err.message}`);
        }
        setSubmitting(false);
    };

    const handleDelete = async (docId) => {
        console.log('handleDelete called with docId:', docId);
        if (!window.confirm('确定要删除这条资料吗？')) {
            console.log('User cancelled delete');
            return;
        }
        console.log('User confirmed delete, sending request...');
        try {
            const url = `${API_BASE_URL}/api/knowledge/${docId}`;
            console.log('DELETE request to:', url);
            const res = await fetch(url, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            console.log('Response status:', res.status);
            const data = await res.json();
            console.log('Response data:', data);
            if (data.success) {
                console.log('Delete successful, refreshing list...');
                fetchDocuments();
            } else {
                alert('删除失败: ' + (data.detail || JSON.stringify(data)));
            }
        } catch (err) {
            console.error('Delete document error:', err);
            alert('删除请求失败: ' + err.message);
        }
    };

    // Toggle 选中状态
    const toggleSelect = (docId) => {
        const newSelected = new Set(selectedDocs);
        if (newSelected.has(docId)) {
            newSelected.delete(docId);
        } else {
            newSelected.add(docId);
        }
        setSelectedDocs(newSelected);
    };

    // 全选/反选
    const toggleSelectAll = () => {
        if (selectedDocs.size === documents.length) {
            setSelectedDocs(new Set());
        } else {
            setSelectedDocs(new Set(documents.map(d => d.doc_id)));
        }
    };

    // 批量删除
    const handleBatchDelete = async () => {
        if (selectedDocs.size === 0) return;

        // 临时移除 confirm
        // if (!window.confirm(`确定要删除选中的 ${selectedDocs.size} 条资料吗？`)) return;

        setLoading(true);
        try {
            const res = await fetch(`${API_BASE_URL}/api/knowledge/batch-delete`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${authToken}`
                },
                body: JSON.stringify({ doc_ids: Array.from(selectedDocs) })
            });
            const data = await res.json();

            if (data.success) {
                // 乐观 UI 更新
                const idsToRemove = new Set(selectedDocs);
                setDocuments(documents.filter(d => !idsToRemove.has(d.doc_id)));
                setSelectedDocs(new Set());
                alert(`已删除 ${data.deleted_count || idsToRemove.size} 条资料`);
            } else {
                alert('删除失败: ' + (data.detail || JSON.stringify(data)));
            }
        } catch (err) {
            console.error('Batch delete error:', err);
            alert('请求失败: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDeleteAll = async () => {
        if (loading) return; // 防止重复点击

        // 临时移除 confirm 以排除弹窗被拦截的问题
        // if (!window.confirm('确定要清空所有资料吗？')) return;

        console.log('User confirmed delete all, sending request...');
        setLoading(true); // 让界面显示加载中

        try {
            const url = `${API_BASE_URL}/api/knowledge`;
            console.log('DELETE request to:', url);
            const res = await fetch(url, {
                method: 'DELETE',
                headers: { 'Authorization': `Bearer ${authToken}` }
            });
            console.log('Response status:', res.status);
            const data = await res.json();
            console.log('Response data:', data);

            if (data.success) {
                console.log('Delete all successful, refreshing list...');
                // 强制清空本地列表，不等 fetch 结果，视觉上更快
                setDocuments([]);
                await fetchDocuments();
                alert('已清空所有资料');
            } else {
                alert('清空失败: ' + (data.detail || JSON.stringify(data)));
            }
        } catch (err) {
            console.error('Delete all error:', err);
            alert('清空请求失败: ' + err.message);
        } finally {
            setLoading(false);
        }
    };

    // ===== PDF 上传相关 =====
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(e.type === 'dragenter' || e.type === 'dragover');
    };

    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        const file = e.dataTransfer.files?.[0];
        if (file?.name.toLowerCase().endsWith('.pdf')) {
            setPdfFile(file);
            setPdfResult(null);
        }
    };

    const handlePdfUpload = async () => {
        if (!pdfFile) return;
        setPdfUploading(true);
        setPdfResult(null);

        const formData = new FormData();
        formData.append('file', pdfFile);

        try {
            const res = await fetch(`${API_BASE_URL}/api/parse-pdf/add-to-knowledge`, {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${authToken}` },
                body: formData
            });
            const data = await res.json();
            if (res.ok) {
                setPdfResult({ success: true, ...data });
                fetchDocuments();
            } else {
                setPdfResult({ success: false, error: data.detail || '解析失败' });
            }
        } catch (err) {
            setPdfResult({ success: false, error: err.message });
        }
        setPdfUploading(false);
    };

    const tabStyle = (isActive) => ({
        flex: 1, padding: '10px', border: 'none', borderRadius: '10px',
        background: isActive ? 'var(--accent-color)' : 'transparent',
        color: isActive ? 'white' : 'var(--text-secondary)',
        fontWeight: '600', fontSize: '14px', cursor: 'pointer',
        transition: 'all 0.2s ease'
    });

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            zIndex: 9999, background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(8px)',
            display: 'flex', justifyContent: 'center', alignItems: 'center'
        }}>
            <div className="glass-card animate-entry" style={{
                width: '90%', maxWidth: '600px', maxHeight: '85vh',
                padding: '24px', borderRadius: '20px', overflow: 'hidden',
                display: 'flex', flexDirection: 'column'
            }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h2 style={{ margin: 0, fontSize: '20px', fontWeight: '700', color: 'var(--text-primary)' }}>
                        📚 知识库
                    </h2>
                    <button onClick={onClose} style={{
                        background: 'none', border: 'none', fontSize: '24px',
                        cursor: 'pointer', color: 'var(--text-secondary)'
                    }}>×</button>
                </div>

                {/* Tabs */}
                <div style={{ display: 'flex', gap: '8px', marginBottom: '16px', background: 'rgba(0,0,0,0.05)', padding: '4px', borderRadius: '12px' }}>
                    <button onClick={() => setActiveTab('text')} style={tabStyle(activeTab === 'text')}>📝 添加文本</button>
                    <button onClick={() => setActiveTab('pdf')} style={tabStyle(activeTab === 'pdf')}>📄 上传 PDF</button>
                </div>

                {/* Text Input */}
                {activeTab === 'text' && (
                    <form onSubmit={handleAdd} style={{ marginBottom: '16px' }}>
                        <textarea
                            placeholder="输入训练/饮食相关资料，添加后 AI 可以引用..."
                            value={content}
                            onChange={(e) => setContent(e.target.value)}
                            rows={4}
                            style={{
                                width: '100%', padding: '12px 16px', marginBottom: '10px',
                                border: '1px solid rgba(0,0,0,0.1)', borderRadius: '12px',
                                fontSize: '14px', background: 'rgba(255,255,255,0.8)',
                                resize: 'vertical', fontFamily: 'inherit', boxSizing: 'border-box'
                            }}
                        />
                        <button type="submit" disabled={submitting || !content.trim()} style={{
                            width: '100%', padding: '12px',
                            background: submitting ? '#ccc' : 'var(--accent-color)',
                            color: 'white', border: 'none', borderRadius: '12px',
                            fontSize: '14px', fontWeight: '600', cursor: submitting ? 'not-allowed' : 'pointer'
                        }}>
                            {submitting ? '添加中...' : '➕ 添加到知识库'}
                        </button>
                    </form>
                )}

                {/* PDF Upload */}
                {activeTab === 'pdf' && (
                    <div style={{ marginBottom: '16px' }}>
                        <div
                            onDragEnter={handleDrag}
                            onDragOver={handleDrag}
                            onDragLeave={handleDrag}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            style={{
                                border: `2px dashed ${dragActive ? 'var(--accent-color)' : 'rgba(0,0,0,0.15)'}`,
                                borderRadius: '12px', padding: '30px 20px', textAlign: 'center',
                                cursor: 'pointer', background: dragActive ? 'rgba(0,188,212,0.05)' : 'rgba(255,255,255,0.5)',
                                marginBottom: '10px', transition: 'all 0.2s ease'
                            }}
                        >
                            <input ref={fileInputRef} type="file" accept=".pdf" onChange={(e) => {
                                setPdfFile(e.target.files?.[0] || null);
                                setPdfResult(null);
                            }} style={{ display: 'none' }} />
                            {pdfFile ? (
                                <div style={{ color: 'var(--text-primary)' }}>
                                    <span style={{ fontSize: '28px' }}>📁</span>
                                    <p style={{ margin: '8px 0 0', fontWeight: '600' }}>{pdfFile.name}</p>
                                    <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                                        {(pdfFile.size / 1024 / 1024).toFixed(2)} MB
                                    </p>
                                </div>
                            ) : (
                                <div style={{ color: 'var(--text-secondary)' }}>
                                    <span style={{ fontSize: '32px', opacity: 0.7 }}>📤</span>
                                    <p style={{ margin: '10px 0 0', fontSize: '14px' }}>
                                        拖拽 PDF 到这里，或 <span style={{ color: 'var(--accent-color)', fontWeight: '600' }}>点击选择</span>
                                    </p>
                                    <p style={{ margin: '4px 0 0', fontSize: '12px', opacity: 0.7 }}>支持表格、图片等复杂 PDF</p>
                                </div>
                            )}
                        </div>

                        {pdfResult && (
                            <div style={{
                                padding: '12px 16px', borderRadius: '10px', marginBottom: '10px',
                                background: pdfResult.success ? 'rgba(76,175,80,0.1)' : 'rgba(244,67,54,0.1)',
                                color: pdfResult.success ? '#388e3c' : '#d32f2f', fontSize: '14px'
                            }}>
                                {pdfResult.success
                                    ? `✅ 成功添加 ${pdfResult.added_documents} 条到知识库`
                                    : `❌ ${pdfResult.error}`}
                            </div>
                        )}

                        <button onClick={handlePdfUpload} disabled={!pdfFile || pdfUploading} style={{
                            width: '100%', padding: '12px',
                            background: (!pdfFile || pdfUploading) ? '#ccc' : 'linear-gradient(135deg, #ff6b6b, #ffa726)',
                            color: 'white', border: 'none', borderRadius: '12px',
                            fontSize: '14px', fontWeight: '600', cursor: (!pdfFile || pdfUploading) ? 'not-allowed' : 'pointer'
                        }}>
                            {pdfUploading ? '解析中...' : '🚀 解析并添加到知识库'}
                        </button>
                    </div>
                )}

                {/* Document List */}
                <div style={{ flex: 1, overflowY: 'auto' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                        <h3 style={{ margin: 0, fontSize: '14px', color: 'var(--text-secondary)' }}>
                            已添加 ({documents.length})
                        </h3>
                        {documents.length > 0 && (
                            <button onClick={toggleSelectAll} style={{
                                background: 'none', border: 'none',
                                fontSize: '12px', color: 'var(--accent-color)', cursor: 'pointer',
                                fontWeight: '600'
                            }}>
                                {selectedDocs.size === documents.length ? '取消全选' : '全选'}
                            </button>
                        )}
                    </div>
                    {loading ? (
                        <p style={{ textAlign: 'center', color: 'var(--text-secondary)' }}>加载中...</p>
                    ) : documents.length === 0 ? (
                        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', padding: '20px 0' }}>
                            暂无资料，添加一些知识吧！
                        </p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingBottom: '60px' }}>
                            {documents.map((doc) => (
                                <div key={doc.doc_id}
                                    onClick={() => toggleSelect(doc.doc_id)}
                                    style={{
                                        background: selectedDocs.has(doc.doc_id) ? 'rgba(var(--accent-rgb), 0.1)' : 'rgba(255,255,255,0.6)',
                                        border: selectedDocs.has(doc.doc_id) ? '1px solid var(--accent-color)' : '1px solid transparent',
                                        borderRadius: '12px',
                                        padding: '12px 16px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease'
                                    }}>
                                    <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                                        {/* Checkbox */}
                                        <div style={{
                                            marginRight: '12px', marginTop: '4px',
                                            width: '18px', height: '18px',
                                            borderRadius: '50%',
                                            border: selectedDocs.has(doc.doc_id) ? '5px solid var(--accent-color)' : '2px solid #ccc',
                                            backgroundColor: 'white',
                                            flexShrink: 0,
                                            display: 'flex', justifyContent: 'center', alignItems: 'center'
                                        }}>
                                            {selectedDocs.has(doc.doc_id) && (
                                                <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--accent-color)' }}></div>
                                            )}
                                        </div>

                                        <div style={{ flex: 1, marginRight: '10px' }}>
                                            {doc.title && doc.title.startsWith('📄') ? (
                                                // PDF 文件：显示标题和内容摘要
                                                <>
                                                    <p style={{ margin: 0, fontSize: '14px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                                        {doc.title}
                                                    </p>
                                                    <p style={{ margin: '4px 0 0', fontSize: '12px', color: 'var(--text-secondary)' }}>
                                                        {doc.content}
                                                    </p>
                                                </>
                                            ) : (
                                                // 普通文本：显示内容
                                                <p style={{
                                                    margin: 0, fontSize: '13px', color: 'var(--text-primary)',
                                                    lineHeight: '1.5', wordBreak: 'break-word',
                                                    display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden'
                                                }}>
                                                    {doc.content}
                                                </p>
                                            )}
                                            <span style={{ fontSize: '11px', color: '#999', marginTop: '6px', display: 'block' }}>
                                                {doc.created_at?.slice(0, 10)}
                                            </span>
                                        </div>
                                        <button onClick={(e) => {
                                            e.stopPropagation();
                                            handleDelete(doc.doc_id);
                                        }} style={{
                                            background: 'rgba(255,100,100,0.1)', border: 'none',
                                            borderRadius: '8px', padding: '6px 10px',
                                            fontSize: '12px', color: '#e53935', cursor: 'pointer'
                                        }}>删除</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* 底部浮动操作栏 */}
                {selectedDocs.size > 0 && (
                    <div style={{
                        position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
                        width: '90%', background: 'white', borderRadius: '16px',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
                        padding: '12px 20px',
                        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                        zIndex: 10
                    }}>
                        <span style={{ fontSize: '14px', fontWeight: '600' }}>已选 {selectedDocs.size} 项</span>
                        <button onClick={handleBatchDelete} style={{
                            background: '#ffebee', color: '#d32f2f',
                            border: 'none', borderRadius: '8px',
                            padding: '8px 16px', fontSize: '14px', fontWeight: '600',
                            cursor: 'pointer'
                        }}>
                            删除选中
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KnowledgeManager;
