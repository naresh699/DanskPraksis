'use client';

import { useState, Suspense } from 'react';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

const chapters = [
    { href: '/', icon: '📖', label: 'Cover Page', num: '' },
    { href: '/exams', icon: '📝', label: 'Practice Exams', num: 'I' },
    { href: '/lessons', icon: '📚', label: 'Grammar Lessons', num: 'II' },
    { href: '/verbs', icon: '🔤', label: 'Verb Conjugation', num: 'III' },
    { href: '/vocabulary', icon: '🗂️', label: 'Vocabulary', num: 'IV' },
    { href: '/speaking', icon: '🗣️', label: 'Speaking Practice', num: 'V' },
    { href: '/download', icon: '🖨️', label: 'Print for Practice', num: 'VI' },
];

function SidebarNav() {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const currentLevel = searchParams.get('level');

    const [isAdmin, setIsAdmin] = useState(false);

    // Run once on mount to check cookie
    import('react').then(({ useEffect }) => {
        useEffect(() => {
            const cookies = document.cookie.split('; ');
            const roleCookie = cookies.find(row => row.startsWith('dansk-user-role='));
            if (roleCookie && roleCookie.split('=')[1] === 'admin') {
                setIsAdmin(true);
            }
        }, []);
    }).catch(() => { });

    return (
        <nav className="sidebar-nav">
            <div className="sidebar-section-title">📑 Table of Contents</div>
            {chapters.map(item => (
                <Link
                    key={item.href}
                    href={item.href}
                    className={`sidebar-link ${pathname === item.href && !currentLevel ? 'active' : ''}`}
                >
                    {item.num && <span className="chapter-num">{item.num}</span>}
                    <span className="sidebar-link-icon">{item.icon}</span>
                    {item.label}
                </Link>
            ))}

            <div className="sidebar-section-title">📋 Exam Levels</div>
            <Link
                href="/exams?level=PD2"
                className={`sidebar-link ${pathname === '/exams' && currentLevel === 'PD2' ? 'active' : ''}`}
            >
                <span className="chapter-num">•</span>
                <span className="sidebar-link-icon">🟢</span>
                PD2 — Intermediate
            </Link>
            <Link
                href="/exams?level=PD3"
                className={`sidebar-link ${pathname === '/exams' && currentLevel === 'PD3' ? 'active' : ''}`}
            >
                <span className="chapter-num">•</span>
                <span className="sidebar-link-icon">🟣</span>
                PD3 — Advanced
            </Link>

            {isAdmin && (
                <div style={{ marginTop: 24 }}>
                    <div className="sidebar-section-title">⚙️ Admin Control</div>
                    <Link
                        href="/admin/users"
                        className={`sidebar-link ${pathname === '/admin/users' ? 'active' : ''}`}
                        style={{ background: 'rgba(14, 116, 144, 0.05)', color: '#0e7490' }}
                    >
                        <span className="sidebar-link-icon">🛡️</span>
                        Admin Dashboard
                    </Link>
                </div>
            )}

            <div style={{ marginTop: isAdmin ? 16 : 32, paddingTop: 16, borderTop: '1px solid rgba(0,0,0,0.05)' }}>
                <button
                    onClick={async () => {
                        await fetch('/api/auth/logout', { method: 'POST' });
                        window.location.href = '/login';
                    }}
                    className="sidebar-link"
                    style={{ background: 'transparent', border: 'none', width: '100%', textAlign: 'left', cursor: 'pointer', color: 'var(--text-muted)' }}
                >
                    <span className="sidebar-link-icon">🚪</span>
                    Log ud
                </button>
            </div>
        </nav>
    );
}

export default function Layout({ children }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    return (
        <div className="app-layout">
            <button
                className="btn-icon mobile-menu-btn no-print"
                onClick={() => setSidebarOpen(!sidebarOpen)}
                aria-label="Toggle menu"
            >
                {sidebarOpen ? '✕' : '☰'}
            </button>

            <aside className={`sidebar ${sidebarOpen ? 'open' : ''}`} onClick={() => setSidebarOpen(false)}>
                <div className="sidebar-logo">
                    <div className="sidebar-logo-icon">🇩🇰</div>
                    <div>
                        <div className="sidebar-logo-text">DanskPraksis</div>
                        <div style={{ fontSize: 10, color: 'var(--text-muted)', letterSpacing: 1, textTransform: 'uppercase' }}>
                            Exam Practice Book
                        </div>
                    </div>
                </div>

                <Suspense fallback={<div style={{ padding: 16, color: 'var(--text-muted)' }}>Loading...</div>}>
                    <SidebarNav />
                </Suspense>
            </aside>

            <main className="main-content page-enter">
                {children}
            </main>
        </div>
    );
}
