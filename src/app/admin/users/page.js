'use client';

import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';

export default function AdminUsersPage() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [role, setRole] = useState('student');
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const res = await fetch('/api/admin/users');
            if (res.ok) {
                const data = await res.json();
                setUsers(data);
            }
        } catch (error) {
            console.error('Failed to fetch users:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleCreateUser = async (e) => {
        e.preventDefault();
        setMessage('Creating user...');

        try {
            const res = await fetch('/api/admin/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password, role }),
            });
            const data = await res.json();

            if (res.ok) {
                setMessage('✅ User created successfully!');
                setEmail('');
                setPassword('');
                fetchUsers();
            } else {
                setMessage(`❌ Error: ${data.error}`);
            }
        } catch (error) {
            setMessage('❌ Connection error.');
        }

        setTimeout(() => setMessage(''), 4000);
    };

    const handleDeleteUser = async (userEmail) => {
        if (!confirm(`Are you sure you want to delete ${userEmail}?`)) return;

        try {
            const res = await fetch(`/api/admin/users?email=${encodeURIComponent(userEmail)}`, {
                method: 'DELETE',
            });
            const data = await res.json();

            if (res.ok) {
                fetchUsers();
            } else {
                alert(`Error: ${data.error}`);
            }
        } catch (error) {
            alert('Connection error.');
        }
    };

    return (
        <Layout>
            <div className="page-header">
                <h1 className="page-title">🛡️ Admin Dashboard</h1>
                <p className="page-subtitle">Manage student accounts and access.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 32 }}>

                {/* Create User Form */}
                <div className="lesson-card">
                    <h2 style={{ fontSize: 20, marginBottom: 16, color: '#0f172a' }}>➕ Create New Account</h2>
                    <form onSubmit={handleCreateUser}>
                        <div style={{ marginBottom: 16 }}>
                            <label style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 600 }}>Email Address</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                                placeholder="student@example.com"
                                style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #d1d5db' }}
                            />
                        </div>
                        <div style={{ marginBottom: 16 }}>
                            <label style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 600 }}>Password</label>
                            <input
                                type="text"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                                placeholder="Secure password"
                                style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #d1d5db' }}
                            />
                        </div>
                        <div style={{ marginBottom: 20 }}>
                            <label style={{ display: 'block', marginBottom: 6, fontSize: 13, fontWeight: 600 }}>Role</label>
                            <select
                                value={role}
                                onChange={e => setRole(e.target.value)}
                                style={{ width: '100%', padding: '10px 14px', borderRadius: 6, border: '1px solid #d1d5db', background: '#fff' }}
                            >
                                <option value="student">Student</option>
                                <option value="admin">Admin</option>
                            </select>
                        </div>
                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Create Account</button>
                    </form>
                    {message && (
                        <div style={{ marginTop: 16, padding: '10px 14px', background: message.includes('✅') ? '#ecfdf5' : '#fef2f2', color: message.includes('✅') ? '#065f46' : '#991b1b', borderRadius: 6, fontSize: 14 }}>
                            {message}
                        </div>
                    )}
                </div>

                {/* User List */}
                <div className="lesson-card">
                    <h2 style={{ fontSize: 20, marginBottom: 16, color: '#0f172a' }}>👥 Active Users ({users.length})</h2>

                    {loading ? (
                        <p style={{ color: 'var(--text-muted)' }}>Loading users...</p>
                    ) : (
                        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                            {users.map(user => (
                                <div key={user.email} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', background: '#f8fafc', borderRadius: 8, border: '1px solid #e2e8f0' }}>
                                    <div>
                                        <div style={{ fontWeight: 600, color: '#0f172a' }}>{user.email}</div>
                                        <div style={{ fontSize: 12, color: '#64748b', marginTop: 2 }}>
                                            Password: <span style={{ fontFamily: 'monospace', background: '#e2e8f0', padding: '2px 6px', borderRadius: 4 }}>{user.password}</span>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                                        <span className={`tag ${user.role === 'admin' ? 'tag-purple' : 'tag-cyan'}`}>
                                            {user.role}
                                        </span>
                                        {user.email !== 'admin@dansk.dk' && (
                                            <button
                                                onClick={() => handleDeleteUser(user.email)}
                                                style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: '#ef4444', padding: 4 }}
                                                title="Delete user"
                                            >
                                                🗑️
                                            </button>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

            </div>

            <div className="lesson-card" style={{ marginTop: 24, background: '#fefce8', borderColor: '#fef08a' }}>
                <h3 style={{ color: '#854d0e', marginBottom: 8 }}>⚠️ Deployment Note (Vercel)</h3>
                <p style={{ fontSize: 14, color: '#a16207', lineHeight: 1.6 }}>
                    Because Vercel environments are serverless, any users created here will be reset on every new deployment <strong>UNLESS</strong> you enable Vercel KV.
                    <br /><br />
                    <strong>To make user accounts permanent:</strong><br />
                    1. Go to your Vercel Dashboard → Storage<br />
                    2. Create a new <strong>KV Database</strong> and link it to this project.<br />
                    3. Redeploy. User accounts will now be saved permanently in the database!
                </p>
            </div>
        </Layout>
    );
}
