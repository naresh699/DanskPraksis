'use client';

import React, { useMemo, Suspense, useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Layout from '@/components/Layout';
import { pd2Exams } from '@/data/pd2Exams';
import { pd3Exams } from '@/data/pd3Exams';

function ExamsContent() {
    const searchParams = useSearchParams();
    const levelFromUrl = searchParams.get('level') || 'all';

    // New: State for Search, Sorting, and Pagination
    const [searchTerm, setSearchTerm] = React.useState('');
    const [sortBy, setSortBy] = React.useState('newest'); // 'newest', 'oldest', 'alphabetical'
    const [currentPage, setCurrentPage] = React.useState(1);
    const examsPerPage = 12;

    const allExams = useMemo(() => [...pd2Exams, ...pd3Exams], []);

    // Derive filter and sort directly from URL params, search term, and sortBy
    const processedExams = useMemo(() => {
        let filtered = allExams.filter(e => {
            if (levelFromUrl !== 'all' && e.level !== levelFromUrl) return false;
            return true;
        });

        if (searchTerm) {
            const term = searchTerm.toLowerCase();
            filtered = filtered.filter(e =>
                e.lesson.title.toLowerCase().includes(term) ||
                e.lesson.titleEn.toLowerCase().includes(term) ||
                e.year.toString().includes(term) ||
                e.season.toLowerCase().includes(term) ||
                e.type.toLowerCase().includes(term)
            );
        }

        // Apply Sorting
        const sorted = [...filtered].sort((a, b) => {
            if (sortBy === 'newest') return b.year - a.year || b.season.localeCompare(a.season);
            if (sortBy === 'oldest') return a.year - b.year || a.season.localeCompare(b.season);
            if (sortBy === 'alphabetical') return a.lesson.titleEn.localeCompare(b.lesson.titleEn);
            return 0;
        });

        return sorted;
    }, [levelFromUrl, searchTerm, sortBy, allExams]);

    // Pagination logic
    const totalPages = Math.ceil(processedExams.length / examsPerPage);
    const indexOfLastExam = currentPage * examsPerPage;
    const indexOfFirstExam = indexOfLastExam - examsPerPage;
    const currentExams = processedExams.slice(indexOfFirstExam, indexOfLastExam);

    // Reset page when filter/sort changes
    React.useEffect(() => {
        setCurrentPage(1);
    }, [levelFromUrl, searchTerm, sortBy]);

    const groupedByYear = {};
    currentExams.forEach(e => {
        if (!groupedByYear[e.year]) groupedByYear[e.year] = [];
        groupedByYear[e.year].push(e);
    });
    // If not alphabetical, we show by year blocks. If alphabetical, maybe just a flat list?
    // Let's stick to year groups if not alphabetical, or just one big block if alphabetical.
    const sortedYears = sortBy === 'alphabetical'
        ? ['All Results']
        : Object.keys(groupedByYear).sort((a, b) => sortBy === 'newest' ? b - a : a - b);

    if (sortBy === 'alphabetical') {
        groupedByYear['All Results'] = currentExams;
    }

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

            {/* Level Filter, Sorting & Search */}
            <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 20 }}>
                <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                    <div>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Level</div>
                        <div className="filter-row">
                            {['all', 'PD2', 'PD3'].map(level => (
                                <Link
                                    key={level}
                                    href={level === 'all' ? '/exams' : `/exams?level=${level}`}
                                    className={`filter-chip ${levelFromUrl === level ? 'active' : ''}`}
                                    style={{ textDecoration: 'none' }}
                                >
                                    {level === 'all' ? `All (${allExams.length})` : `${level} (${allExams.filter(e => e.level === level).length})`}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Sort By</div>
                        <select
                            value={sortBy}
                            onChange={(e) => setSortBy(e.target.value)}
                            style={{
                                padding: '8px 12px',
                                background: 'var(--card-bg)',
                                border: '1px solid var(--border-color)',
                                borderRadius: '12px',
                                color: 'var(--text-primary)',
                                fontSize: '14px',
                                outline: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <option value="newest">Newest First</option>
                            <option value="oldest">Oldest First</option>
                            <option value="alphabetical">Title (A-Z)</option>
                        </select>
                    </div>
                </div>

                <div style={{ flex: '1', minWidth: 250, maxWidth: 400 }}>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>Search</div>
                    <input
                        type="text"
                        placeholder="Search by year, title or topic..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                        style={{
                            width: '100%',
                            padding: '10px 16px',
                            background: 'var(--card-bg)',
                            border: '1px solid var(--border-color)',
                            borderRadius: '12px',
                            color: 'var(--text-primary)',
                            fontSize: '14px',
                            outline: 'none',
                            transition: 'border-color 0.2s'
                        }}
                    />
                </div>
            </div>

            {/* Results Info */}
            <div style={{ marginBottom: 16, color: 'var(--text-secondary)', fontSize: 14, display: 'flex', justifyContent: 'space-between' }}>
                <div>Showing {processedExams.length} exam{processedExams.length !== 1 ? 's' : ''}</div>
                {(searchTerm || levelFromUrl !== 'all') && (
                    <Link href="/exams" onClick={() => setSearchTerm('')} style={{ background: 'none', border: 'none', color: 'var(--accent-cyan)', cursor: 'pointer', fontSize: 14, textDecoration: 'none' }}>
                        Reset Filters
                    </Link>
                )}
            </div>

            {sortedYears.map(year => (
                <div key={year} style={{ marginBottom: 32 }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>{year}</span>
                        {sortBy !== 'alphabetical' && (
                            <span style={{ fontSize: 13, color: 'var(--text-muted)', fontWeight: 400 }}>
                                ({groupedByYear[year].length} on this page)
                            </span>
                        )}
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
                                        <span className="tag tag-green">{exam.typeEn || exam.type}</span>
                                        {sortBy === 'alphabetical' && <span className="tag tag-cyan">{exam.year}</span>}
                                    </div>
                                    <div className="card-body">
                                        {exam.questions.length} questions • {exam.lesson.topics?.length || 0} grammar topics
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="pagination" style={{ display: 'flex', justifyContent: 'center', gap: 10, marginTop: 40, marginBottom: 60 }}>
                    <button
                        disabled={currentPage === 1}
                        onClick={() => setCurrentPage(p => p - 1)}
                        className="filter-chip"
                        style={{ opacity: currentPage === 1 ? 0.5 : 1, cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                    >
                        Previous
                    </button>
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrentPage(i + 1)}
                            className={`filter-chip ${currentPage === i + 1 ? 'active' : ''}`}
                            style={{ minWidth: 40 }}
                        >
                            {i + 1}
                        </button>
                    ))}
                    <button
                        disabled={currentPage === totalPages}
                        onClick={() => setCurrentPage(p => p + 1)}
                        className="filter-chip"
                        style={{ opacity: currentPage === totalPages ? 0.5 : 1, cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                    >
                        Next
                    </button>
                </div>
            )}

            {processedExams.length === 0 && (
                <div style={{ textAlign: 'center', padding: 60, color: 'var(--text-muted)' }}>
                    <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
                    <div style={{ fontSize: 16 }}>No exams match your criteria.</div>
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
