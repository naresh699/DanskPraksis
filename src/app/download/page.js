'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { pd2Exams } from '@/data/pd2Exams';
import { pd3Exams } from '@/data/pd3Exams';
import { verbs } from '@/data/verbs';
import { lessons } from '@/data/lessons';

export default function DownloadPage() {
    const [generating, setGenerating] = useState(null);

    const handlePrintPage = (url, label) => {
        setGenerating(label);
        const printWindow = window.open(url, '_blank');

        const checkReady = setInterval(() => {
            try {
                if (printWindow && printWindow.document && printWindow.document.readyState === 'complete') {
                    clearInterval(checkReady);
                    setTimeout(() => {
                        printWindow.print();
                        setGenerating(null);
                    }, 1500);
                }
            } catch (e) {
                clearInterval(checkReady);
                setGenerating(null);
            }
        }, 500);

        setTimeout(() => {
            clearInterval(checkReady);
            setGenerating(null);
        }, 10000);
    };

    return (
        <Layout>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <span>Print for Practice</span>
                </div>
                <h1 className="page-title">🖨️ Print for Practice</h1>
                <p className="page-subtitle">
                    Print practice materials for offline study. Study on the bus, train, or anywhere without internet!
                </p>
            </div>

            <div style={{
                padding: '16px 20px',
                background: 'rgba(8, 145, 178, 0.06)',
                border: '1px solid rgba(8, 145, 178, 0.15)',
                borderRadius: 'var(--radius-md)',
                marginBottom: 32,
                fontSize: 14,
                color: 'var(--text-secondary)',
                lineHeight: 1.6
            }}>
                💡 <strong>How it works:</strong> Click any card → page opens in a new tab → print dialog appears automatically.
                Choose <strong>"Save as PDF"</strong> as the printer to save a PDF, or select your printer to print directly.
            </div>

            {/* Practice Exams */}
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>📋 Practice Exams</h2>

            <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: 12 }}>PD2 Exams (Intermediate)</h3>
            <div className="download-grid" style={{ marginBottom: 24 }}>
                {pd2Exams.map(exam => (
                    <div key={exam.id} className="download-card" onClick={() => handlePrintPage(`/exams/${exam.id}`, exam.id)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <span style={{ fontSize: 24 }}>{generating === exam.id ? '⏳' : '🖨️'}</span>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{exam.lesson.titleEn}</div>
                                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{exam.level} • {exam.year} {exam.season} • {exam.typeEn}</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            {exam.questions.length} questions • {generating === exam.id ? 'Opening print...' : 'Click to print'}
                        </div>
                    </div>
                ))}
            </div>

            <h3 style={{ fontSize: 16, fontWeight: 600, color: 'var(--accent-purple)', marginBottom: 12 }}>PD3 Exams (Advanced)</h3>
            <div className="download-grid" style={{ marginBottom: 40 }}>
                {pd3Exams.map(exam => (
                    <div key={exam.id} className="download-card" onClick={() => handlePrintPage(`/exams/${exam.id}`, exam.id)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <span style={{ fontSize: 24 }}>{generating === exam.id ? '⏳' : '🖨️'}</span>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{exam.lesson.titleEn}</div>
                                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{exam.level} • {exam.year} {exam.season} • {exam.typeEn}</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            {exam.questions.length} questions • {generating === exam.id ? 'Opening print...' : 'Click to print'}
                        </div>
                    </div>
                ))}
            </div>

            {/* Grammar Lessons */}
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>📖 Grammar Lessons</h2>
            <div className="download-grid" style={{ marginBottom: 40 }}>
                {lessons.map(lesson => (
                    <div key={lesson.id} className="download-card" onClick={() => handlePrintPage(`/lessons/${lesson.id}`, lesson.id)}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                            <span style={{ fontSize: 24 }}>{generating === lesson.id ? '⏳' : '🖨️'}</span>
                            <div>
                                <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>{lesson.titleEn}</div>
                                <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>{lesson.title}</div>
                            </div>
                        </div>
                        <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                            {lesson.sections.length} sections • {lesson.practiceQuestions?.length || 0} exercises • {generating === lesson.id ? 'Printing...' : 'Click to print'}
                        </div>
                    </div>
                ))}
            </div>

            {/* Reference Materials */}
            <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16, color: 'var(--text-primary)' }}>🔤 Reference Materials</h2>
            <div className="download-grid" style={{ marginBottom: 40 }}>
                <div className="download-card" onClick={() => handlePrintPage('/verbs', 'verbs')}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span style={{ fontSize: 24 }}>{generating === 'verbs' ? '⏳' : '🖨️'}</span>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>Complete Verb Tables</div>
                            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>All groups with conjugation</div>
                        </div>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        {Object.values(verbs).reduce((s, g) => s + g.verbs.length, 0)} verbs • {generating === 'verbs' ? 'Printing...' : 'Click to print'}
                    </div>
                </div>

                <div className="download-card" onClick={() => handlePrintPage('/vocabulary', 'vocab')}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span style={{ fontSize: 24 }}>{generating === 'vocab' ? '⏳' : '🖨️'}</span>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>Vocabulary Lists</div>
                            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Adjectives, phrases, numbers</div>
                        </div>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        Complete word lists • {generating === 'vocab' ? 'Printing...' : 'Click to print'}
                    </div>
                </div>

                <div className="download-card" onClick={() => handlePrintPage('/speaking', 'speaking')}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                        <span style={{ fontSize: 24 }}>{generating === 'speaking' ? '⏳' : '🖨️'}</span>
                        <div>
                            <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--text-primary)' }}>Speaking Practice Guide</div>
                            <div style={{ fontSize: 12, color: 'var(--text-secondary)' }}>Oral exam speeches & questions</div>
                        </div>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--text-muted)' }}>
                        5-min speeches + cross questions • {generating === 'speaking' ? 'Printing...' : 'Click to print'}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
