'use client';

import { useState, use } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SpeechButton from '@/components/SpeechButton';
import { lessons } from '@/data/lessons';

export default function LessonDetailPage({ params }) {
    const resolvedParams = use(params);
    const topicId = resolvedParams.topicId;
    const lesson = lessons.find(l => l.id === topicId);
    const [practiceAnswers, setPracticeAnswers] = useState({});
    const [practiceChecked, setPracticeChecked] = useState({});

    if (!lesson) {
        return (
            <Layout>
                <div style={{ textAlign: 'center', padding: 80 }}>
                    <div style={{ fontSize: 64, marginBottom: 16 }}>🤔</div>
                    <h1 style={{ fontSize: 24, marginBottom: 8 }}>Lesson not found</h1>
                    <Link href="/lessons" className="btn btn-primary">← Back to Lessons</Link>
                </div>
            </Layout>
        );
    }

    const handleCheck = (idx) => {
        const q = lesson.practiceQuestions[idx];
        const userAnswer = (practiceAnswers[idx] || '').trim().toLowerCase();
        const isCorrect = userAnswer === q.answer.toLowerCase();
        setPracticeChecked(prev => ({ ...prev, [idx]: { isCorrect, correctAnswer: q.answer } }));
    };

    return (
        <Layout>
            <div className="print-header">
                <h1>{lesson.titleEn}</h1>
                <p>{lesson.title} — Grammar Lesson</p>
            </div>

            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link>
                    <span>/</span>
                    <Link href="/lessons">Lessons</Link>
                    <span>/</span>
                    <span>{lesson.titleEn}</span>
                </div>
                <h1 className="page-title">{lesson.titleEn}</h1>
                <p className="page-subtitle">{lesson.title}</p>
                <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
                    <span className="tag tag-cyan">{lesson.difficulty}</span>
                    <span className="tag tag-purple">{lesson.categoryEn}</span>
                </div>
            </div>

            {/* Lesson sections */}
            {lesson.sections.map((section, i) => (
                <div key={i} className="lesson-card fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                    <h3>{section.headingEn}</h3>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 12 }}>{section.heading}</div>

                    {section.content && (
                        <p style={{ whiteSpace: 'pre-line' }}>{section.content}</p>
                    )}

                    {section.contentEn && section.content !== section.contentEn && (
                        <div style={{
                            marginTop: 16,
                            padding: '12px 16px',
                            background: 'var(--bg-glass)',
                            borderRadius: 'var(--radius-sm)',
                            borderLeft: '3px solid var(--accent-cyan)'
                        }}>
                            <div style={{ fontSize: 11, fontWeight: 600, color: 'var(--accent-cyan)', marginBottom: 4, textTransform: 'uppercase', letterSpacing: 1 }}>
                                English
                            </div>
                            <p style={{ whiteSpace: 'pre-line', fontSize: 13 }}>{section.contentEn}</p>
                        </div>
                    )}

                    {section.examples && section.examples.length > 0 && (
                        <div style={{ marginTop: 16 }}>
                            {section.examples.map((ex, j) => (
                                <div key={j} className="lesson-example">
                                    <SpeechButton text={ex.da} size="small" />
                                    <span className="lesson-example-da">{ex.da}</span>
                                    <span className="lesson-example-en">{ex.en}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}

            {/* Practice exercises */}
            {lesson.practiceQuestions && lesson.practiceQuestions.length > 0 && (
                <div className="lesson-card fade-in" style={{ borderColor: 'rgba(16, 185, 129, 0.2)' }}>
                    <h2 style={{ color: 'var(--accent-green)' }}>🎯 Practice Exercises</h2>
                    <p className="lesson-subtitle" style={{ marginBottom: 20 }}>Test what you have learned!</p>

                    {lesson.practiceQuestions.map((q, idx) => (
                        <div key={idx} style={{
                            padding: 16,
                            background: 'var(--bg-glass)',
                            borderRadius: 'var(--radius-sm)',
                            marginBottom: 12,
                            border: practiceChecked[idx]
                                ? `1px solid ${practiceChecked[idx].isCorrect ? 'rgba(16, 185, 129, 0.3)' : 'rgba(239, 68, 68, 0.3)'}`
                                : '1px solid var(--border-glass)'
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
                                <SpeechButton text={q.sentence.replace('______', q.answer)} size="small" />
                                <span style={{ fontSize: 16, fontWeight: 500 }}>{q.sentence}</span>
                            </div>
                            <div style={{ fontSize: 13, color: 'var(--text-secondary)', fontStyle: 'italic', marginBottom: 12 }}>
                                {q.sentenceEn}
                            </div>
                            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                                <input
                                    type="text"
                                    className={`quiz-input ${practiceChecked[idx] ? (practiceChecked[idx].isCorrect ? 'correct' : 'incorrect') : ''
                                        }`}
                                    style={{ maxWidth: 250 }}
                                    placeholder="Dit svar..."
                                    value={practiceAnswers[idx] || ''}
                                    onChange={(e) => setPracticeAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                                    onKeyDown={(e) => e.key === 'Enter' && handleCheck(idx)}
                                    disabled={!!practiceChecked[idx]}
                                />
                                {!practiceChecked[idx] && (
                                    <button className="btn btn-primary btn-sm" onClick={() => handleCheck(idx)}>Check</button>
                                )}
                                {practiceChecked[idx] && !practiceChecked[idx].isCorrect && (
                                    <span style={{ color: 'var(--accent-green)', fontWeight: 600, fontSize: 14 }}>
                                        → {practiceChecked[idx].correctAnswer}
                                    </span>
                                )}
                                {practiceChecked[idx] && practiceChecked[idx].isCorrect && (
                                    <span style={{ color: 'var(--accent-green)', fontSize: 16 }}>✅</span>
                                )}
                            </div>
                            {q.hint && !practiceChecked[idx] && (
                                <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 6 }}>💡 {q.hint}</div>
                            )}
                        </div>
                    ))}
                </div>
            )}

            {/* Navigation */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 32 }} className="no-print">
                <Link href="/lessons" className="btn btn-secondary">← All Lessons</Link>
                <button className="btn btn-secondary" onClick={() => window.print()}>🖨️ Print Lesson</button>
            </div>
        </Layout>
    );
}
