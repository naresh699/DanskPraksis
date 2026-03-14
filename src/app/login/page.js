'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
        setLoading(true);

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                router.push('/');
                router.refresh();
            } else {
                setError(data.error || 'Invalid credentials');
            }
        } catch (err) {
            setError('Connection error. Try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, #faf8f5 0%, #ebe3d3 100%)',
            fontFamily: "'Inter', -apple-system, sans-serif",
            padding: 20,
        }}>
            <div style={{
                width: '100%',
                maxWidth: 420,
                background: '#fff',
                borderRadius: 16,
                boxShadow: '0 10px 40px rgba(0,0,0,0.08)',
                border: '1px solid #d4c5a9',
                overflow: 'hidden',
            }}>
                {/* Header */}
                <div style={{
                    padding: '36px 32px 24px',
                    textAlign: 'center',
                    background: 'linear-gradient(180deg, #f5f0e8 0%, #fff 100%)',
                    borderBottom: '1px solid #ebe3d3',
                }}>
                    <div style={{ fontSize: 48, marginBottom: 12 }}>🇩🇰</div>
                    <h1 style={{
                        fontFamily: "'Merriweather', Georgia, serif",
                        fontSize: 26,
                        fontWeight: 700,
                        color: '#8b6914',
                        marginBottom: 6,
                    }}>DanskPraksis</h1>
                    <p style={{ fontSize: 14, color: '#9e9282' }}>
                        Danish Exam Practice Book
                    </p>
                </div>

                {/* Form */}
                <form onSubmit={handleLogin} style={{ padding: '28px 32px 36px' }}>
                    <div style={{ marginBottom: 20 }}>
                        <label style={{
                            display: 'block', fontSize: 13, fontWeight: 600,
                            color: '#5a4e3c', marginBottom: 6, letterSpacing: 0.3,
                        }}>
                            📧 Email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            placeholder="your@email.com"
                            required
                            style={{
                                width: '100%', padding: '12px 16px',
                                border: '2px solid #e5e0d4', borderRadius: 8,
                                fontSize: 15, fontFamily: 'inherit',
                                background: '#faf8f5', color: '#2c2416',
                                outline: 'none', transition: 'border-color 0.2s',
                            }}
                            onFocus={e => e.target.style.borderColor = '#0e7490'}
                            onBlur={e => e.target.style.borderColor = '#e5e0d4'}
                        />
                    </div>

                    <div style={{ marginBottom: 24 }}>
                        <label style={{
                            display: 'block', fontSize: 13, fontWeight: 600,
                            color: '#5a4e3c', marginBottom: 6, letterSpacing: 0.3,
                        }}>
                            🔒 Password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                            style={{
                                width: '100%', padding: '12px 16px',
                                border: '2px solid #e5e0d4', borderRadius: 8,
                                fontSize: 15, fontFamily: 'inherit',
                                background: '#faf8f5', color: '#2c2416',
                                outline: 'none', transition: 'border-color 0.2s',
                            }}
                            onFocus={e => e.target.style.borderColor = '#0e7490'}
                            onBlur={e => e.target.style.borderColor = '#e5e0d4'}
                        />
                    </div>

                    {error && (
                        <div style={{
                            padding: '10px 14px', marginBottom: 16,
                            background: 'rgba(185, 28, 28, 0.06)',
                            border: '1px solid rgba(185, 28, 28, 0.15)',
                            borderRadius: 8, color: '#b91c1c',
                            fontSize: 13, fontWeight: 500,
                        }}>
                            ⚠️ {error}
                        </div>
                    )}

                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: '100%', padding: '14px',
                            background: loading ? '#9e9282' : 'linear-gradient(135deg, #0e7490 0%, #0891b2 100%)',
                            color: '#fff', border: 'none', borderRadius: 8,
                            fontSize: 15, fontWeight: 600,
                            cursor: loading ? 'not-allowed' : 'pointer',
                            fontFamily: 'inherit',
                            boxShadow: loading ? 'none' : '0 4px 14px rgba(14, 116, 144, 0.25)',
                            transition: 'all 0.2s',
                        }}
                    >
                        {loading ? '⏳ Logging in...' : '📖 Open the Book'}
                    </button>
                </form>

                <div style={{
                    padding: '16px 32px',
                    borderTop: '1px solid #ebe3d3',
                    background: '#faf8f5',
                    textAlign: 'center',
                    fontSize: 12,
                    color: '#9e9282',
                }}>
                    🔐 Access is by invitation only. Contact your teacher for credentials.
                </div>
            </div>
        </div>
    );
}
