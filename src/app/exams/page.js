'use client';

import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { pd2Exams } from '@/data/pd2Exams';
import { pd3Exams } from '@/data/pd3Exams';

function ExamsContent() {
    const searchParams = useSearchParams();
    const initialLevel = searchParams.get('level') || 'all';

    const [levelFilter, setLevelFilter] = useState(initialLevel);
    const [yearFilter, setYearFilter] = useState('all');
    const [typeFilter, setTypeFilter] = useState('all');

    const allExams = useMemo(() => [...pd2Exams, ...pd3Exams], []);

    const filteredExams = useMemo(() => {
        return allExams.filter(e => {
            if (levelFilter !== 'all' && e.level !== levelFilter) return false;
            if (yearFilter !== 'all' && e.year !== parseInt(yearFilter)) return false;
            if (typeFilter !== 'all' && !e.type.includes(typeFilter)) return false;
            return true;
        });
    }, [allExams, levelFilter, yearFilter, typeFilter]);

    const years = [...new Set(allExams.map(e => e.year))].sort((a, b) => b - a);
    const types = [...new Set(allExams.map(e => e.type))];

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
                <h1 className="page-title">📚 Exam Browser</h1>
                <p className="page-subtitle">
                    Browse and practice exams from PD2 and PD3 exam papers.
                    Each exam includes a pre-lesson, quiz, and intelligent feedback.
                </p>
            </div>

            {/* Filters */}
            <div style={{ marginBottom: 32 }}>
                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Level</div>
                <div className="filter-row">
                    {['all', 'PD2', 'PD3'].map(level => (
                        <button
                            key={level}
                            className={`filter-chip ${levelFilter === level ? 'active' : ''}`}
                            onClick={() => setLevelFilter(level)}
                        >
                            {level === 'all' ? 'All Levels' : level}
                        </button>
                    ))}
                </div>

                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Year</div>
                <div className="filter-row">
                    <button
                        className={`filter-chip ${yearFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setYearFilter('all')}
                    >
                        All Years
                    </button>
                    {years.map(year => (
                        <button
                            key={year}
                            className={`filter-chip ${yearFilter === String(year) ? 'active' : ''}`}
                            onClick={() => setYearFilter(String(year))}
                        >
                            {year}
                        </button>
                    ))}
                </div>

                <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Type</div>
                <div className="filter-row">
                    <button
                        className={`filter-chip ${typeFilter === 'all' ? 'active' : ''}`}
                        onClick={() => setTypeFilter('all')}
                    >
                        All Types
                    </button>
                    {types.map(type => (
                        <button
                            key={type}
                            className={`filter-chip ${typeFilter === type ? 'active' : ''}`}
                            onClick={() => setTypeFilter(type)}
                        >
                            {type}
                        </button>
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
                    <div style={{ fontSize: 16 }}>No exams match your filters. Try adjusting the filters above.</div>
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
