import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                    color: 'white',
                    fontFamily: 'Arial, sans-serif',
                    padding: '20px',
                    boxSizing: 'border-box'
                }}>
                    <div style={{
                        textAlign: 'center',
                        maxWidth: '600px',
                        background: 'rgba(255, 255, 255, 0.1)',
                        padding: '40px',
                        borderRadius: '20px',
                        backdropFilter: 'blur(10px)'
                    }}>
                        <h1 style={{ fontSize: '48px', margin: '0 0 20px 0' }}>😵</h1>
                        <h2 style={{ margin: '0 0 20px 0' }}>出错了</h2>
                        <p style={{ fontSize: '16px', marginBottom: '30px' }}>应用遇到了一些问题，请刷新页面重试</p>
                        <button
                            onClick={() => window.location.reload()}
                            style={{
                                padding: '12px 30px',
                                fontSize: '16px',
                                background: 'white',
                                color: '#667eea',
                                border: 'none',
                                borderRadius: '25px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                        >
                            刷新页面
                        </button>
                        {process.env.NODE_ENV === 'development' && (
                            <pre style={{
                                marginTop: '30px',
                                textAlign: 'left',
                                fontSize: '12px',
                                background: 'rgba(0, 0, 0, 0.3)',
                                padding: '15px',
                                borderRadius: '10px',
                                overflow: 'auto',
                                maxHeight: '200px'
                            }}>
                                {this.state.error.toString()}
                            </pre>
                        )}
                    </div>
                </div>
            );
        }
        return this.props.children;
    }
}

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <ErrorBoundary>
            <App />
        </ErrorBoundary>
    </StrictMode>,
)
