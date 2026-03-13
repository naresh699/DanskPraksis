'use client';

import { useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { pd2Exams } from '@/data/pd2Exams';
import { pd3Exams } from '@/data/pd3Exams';

function ExamsContent() {
    const searchParams = useSearchParams();
    const levelFromUrl = searchParams.get('level') || 'all';

    const allExams = useMemo(() => [...pd2Exams, ...pd3Exams], []);

    // Derive filter directly from URL params so it updates on every navigation
    const filteredExams = useMemo(() => {
        return allExams.filter(e => {
            if (levelFromUrl !== 'all' && e.level !== levelFromUrl) return false;
            return true;
        });
    }, [allExams, levelFromUrl]);

    const years = [...new Set(allExams.map(e => e.year))].sort((a, b) => b - a);

    const groupedByYear = {};
    filteredExams.forEach(e => {
        if (!groupedByYear[e.year]) groupedByYear[e.year] = [];
        groupedByYear[e.year].push(e);
    });
    const sortedYears = Object.keys(groupedByYear).sort((a, b) => b - a);

    return (
        <>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <span>Exams</span>
                </div>
                <h1 className="page-title">📝 Practice Exams</h1>
                <p className="page-subtitle">
                    Browse and practice exams from PD2 and PD3 exam papers ({allExams.length} total).
                    Each exam includes a pre-lesson, quiz, and intelligent feedback.
                </p>
            </div>

            {/* Level Filter */}
            <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Level</div>
                <div className="filter-row">
                    {['all', 'PD2', 'PD3'].map(level => (
                        <Link
                            key={level}
                            href={level === 'all' ? '/exams' : `/exams?level=${level}`}
                            className={`filter-chip ${levelFromUrl === level ? 'active' : ''}`}
                            style={{ textDecoration: 'none' }}
                        >
                            {level === 'all' ? `All Levels (${allExams.length})` : `${level} (${allExams.filter(e => e.level === level).length})`}
                        </Link>
                    ))}
                </div>
            </div>

            {/* Results */}
            <div style={{ marginBottom: 16, color: 'var(--text-secondary)', fontSize: 14 }}>
                Showing {filteredExams.length} exam{filteredExams.length !== 1 ? 's' : ''}
            </div>

            {sortedYears.map(year => (
                <div key={year} style={{ marginBottom: 32 }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>{year}</span>
                        <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 400 }}>
                            ({groupedByYear[year].length} exams)
                        </span>
                    </h2>
                    <div className="card-grid">
                        {groupedByYear[year].map(exam => (
                            <Link key={exam.id} href={`/exams/${exam.id}`} style={{ textDecoration: 'none' }}>
                                <div className="card card-clickable">
                                    <div className="card-header">
                                        <div className={`card-icon ${exam.level === 'PD2' ? 'card-icon-cyan' : 'card-icon-purple'}`}>
                                            {exam.type.includes('Læseforståelse') ? '📖' : exam.type.includes('Skriftlig') ? '✍️' : '🗣️'}
                                        </div>
                                        <div>
                                            <div className="card-title">{exam.lesson.titleEn}</div>
                                            <div className="card-subtitle">{exam.lesson.title}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
                                        <span className={`tag ${exam.level === 'PD2' ? 'tag-cyan' : 'tag-purple'}`}>{exam.level}</span>
                                        <span className="tag tag-amber">{exam.season}</span>
                                        <span className="tag tag-green">{exam.typeEn}</span>
                                    </div>
                                    <div className="card-body">
                                        {exam.questions.length} questions • {exam.lesson.topics.length} grammar topics
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            {filteredExams.length === 0 && (
                <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-muted)' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                    <div style={{ fontSize: 16 }}>No exams match your filter.</div>
                </div>
            )}
        </>
    );
}

export default function ExamsPage() {
    return (
        <Layout>
            <Suspense fallback={<div style={{ padding: 40, textAlign: 'center', color: 'var(--text-muted)' }}>Loading exams...</div>}>
                <ExamsContent />
            </Suspense>
        </Layout>
    );
}
