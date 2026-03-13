'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import QuizEngine from '@/components/QuizEngine';
import SpeechButton from '@/components/SpeechButton';
import { pd2Exams } from '@/data/pd2Exams';
import { pd3Exams } from '@/data/pd3Exams';
import { grammarRules } from '@/data/grammarRules';

const allExams = [...pd2Exams, ...pd3Exams];

export default function ExamDetailPage({ params }) {
    const resolvedParams = use(params);
    const examId = resolvedParams.examId;
    const exam = allExams.find(e => e.id === examId);
    const [phase, setPhase] = useState('lesson'); // 'lesson' | 'quiz' | 'results'
    const [results, setResults] = useState(null);

    if (!exam) {
        return (
            <Layout>
                <div style={{ textAlign: 'center', padding: 80 }}>
                    <div style={{ fontSize: 64, marginBottom: 16 }}>🤔</div>
                    <h1 style={{ fontSize: 24, marginBottom: 8 }}>Exam not found</h1>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: 24 }}>This exam ID does not exist.</p>
                    <Link href="/exams" className="btn btn-primary">← Back to Exams</Link>
                </div>
            </Layout>
        );
    }

    const relevantRules = exam.lesson.topics
        .map(t => grammarRules.find(r => r.id === t))
        .filter(Boolean);

    const handleFinish = (res) => {
        setResults(res);
        setPhase('results');
    };

    return (
        <Layout>
            {/* Print header */}
            <div className="print-header">
                <h1>{exam.level} — {exam.type} — {exam.year} {exam.season}</h1>
                <p>{exam.lesson.titleEn}</p>
            </div>

            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/exams">Exams</Link>
                    <span>/</span>
                    <span>{exam.level} {exam.year} {exam.season}</span>
                </div>
                <h1 className="page-title">{exam.lesson.titleEn}</h1>
                <p className="page-subtitle">
                    {exam.lesson.title} • {exam.level} • {exam.year} {exam.seasonEn} • {exam.typeEn}
                </p>
                <div style={{ marginTop: 12, display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                    <span className={`tag ${exam.level === 'PD2' ? 'tag-cyan' : 'tag-purple'}`}>{exam.level}</span>
                    <span className="tag tag-amber">{exam.season} {exam.year}</span>
                    <span className="tag tag-green">{exam.typeEn}</span>
                    <span className="tag tag-purple">{exam.questions.length} questions</span>
                </div>
            </div>

            {/* Phase tabs */}
            <div className="tabs no-print">
                <button
                    className={`tab ${phase === 'lesson' ? 'active' : ''}`}
                    onClick={() => setPhase('lesson')}
                >
                    📖 Lesson
                </button>
                <button
                    className={`tab ${phase === 'quiz' ? 'active' : ''}`}
                    onClick={() => setPhase('quiz')}
                >
                    ✍️ Quiz
                </button>
                <button
                    className={`tab ${phase === 'results' ? 'active' : ''}`}
                    onClick={() => results && setPhase('results')}
                    style={{ opacity: results ? 1 : 0.4 }}
                >
                    📊 Results
                </button>
            </div>

            {/* PHASE 1: Lesson */}
            {phase === 'lesson' && (
                <div className="fade-in">
                    <div className="lesson-card">
                        <h2>{exam.lesson.titleEn}</h2>
                        <p className="lesson-subtitle">{exam.lesson.title}</p>

                        <h3>📝 What you will learn</h3>
                        <p style={{ whiteSpace: 'pre-line' }}>{exam.lesson.content}</p>

                        {relevantRules.length > 0 && (
                            <>
                                <h3>📖 Grammar Rules for this Exam</h3>
                                {relevantRules.map(rule => (
                                    <div key={rule.id} style={{ marginBottom: 20 }}>
                                        <div style={{ fontWeight: 600, fontSize: 15, marginBottom: 6 }}>
                                            {rule.titleEn}
                                            <span style={{ fontSize: 13, color: 'var(--text-secondary)', fontWeight: 400, marginLeft: 8 }}>
                                                ({rule.title})
                                            </span>
                                        </div>
                                        <div style={{
                                            padding: '10px 14px',
                                            background: 'rgba(168, 85, 247, 0.08)',
                                            borderRadius: 'var(--radius-sm)',
                                            borderLeft: '3px solid var(--accent-purple)',
                                            fontSize: 13,
                                            color: 'var(--text-secondary)',
                                            lineHeight: 1.7,
                                            marginBottom: 8
                                        }}>
                                            {rule.shortRule}
                                        </div>
                                        {rule.examples.slice(0, 3).map((ex, i) => (
                                            <div key={i} className="lesson-example">
                                                <SpeechButton text={ex.da} size="small" />
                                                <span className="lesson-example-da">{ex.da}</span>
                                                <span className="lesson-example-en">{ex.en}</span>
                                            </div>
                                        ))}
                                        <Link href={`/lessons/${rule.id}`} className="btn btn-ghost btn-sm" style={{ marginTop: 4 }}>
                                            📖 Full lesson →
                                        </Link>
                                    </div>
                                ))}
                            </>
                        )}
                    </div>

                    <div style={{ textAlign: 'center' }} className="no-print">
                        <button className="btn btn-primary" onClick={() => setPhase('quiz')} style={{ fontSize: 16, padding: '14px 32px' }}>
                            ✍️ Start Quiz — {exam.questions.length} Questions
                        </button>
                    </div>
                </div>
            )}

            {/* PHASE 2: Quiz */}
            {phase === 'quiz' && (
                <div className="fade-in">
                    <QuizEngine questions={exam.questions} onFinish={handleFinish} />
                </div>
            )}

            {/* PHASE 3: Results (handled by QuizEngine score board) */}
            {phase === 'results' && results && (
                <div className="fade-in">
                    <QuizEngine questions={exam.questions} onFinish={handleFinish} />
                </div>
            )}

            {/* Navigation */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 40,
                paddingTop: 24,
                borderTop: '1px solid var(--border-glass)'
            }} className="no-print">
                <Link href="/exams" className="btn btn-secondary">
                    ← Back to Exams
                </Link>
                <button className="btn btn-secondary" onClick={() => window.print()}>
                    🖨️ Print this page
                </button>
            </div>
        </Layout>
    );
}
