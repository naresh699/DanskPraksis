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
