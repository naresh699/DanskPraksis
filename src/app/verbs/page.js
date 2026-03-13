'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SpeechButton from '@/components/SpeechButton';
import { verbs, getAllVerbs } from '@/data/verbs';

export default function VerbsPage() {
    const [activeGroup, setActiveGroup] = useState('group1');
    const [practiceMode, setPracticeMode] = useState(false);
    const [practiceAnswers, setPracticeAnswers] = useState({});
    const [practiceChecked, setPracticeChecked] = useState({});
    const [practiceTense, setPracticeTense] = useState('past');

    const groups = Object.entries(verbs);
    const currentGroup = verbs[activeGroup];

    // Random practice verbs from current group
    const practiceVerbs = useMemo(() => {
        const shuffled = [...currentGroup.verbs].sort(() => Math.random() - 0.5);
        return shuffled.slice(0, 8);
    }, [currentGroup, practiceMode]);

    const handleCheck = (idx, verb) => {
        const userAnswer = (practiceAnswers[idx] || '').trim().toLowerCase();
        let correct;
        if (practiceTense === 'present') correct = verb.pres;
        else if (practiceTense === 'past') correct = verb.past;
        else correct = verb.perf;

        const isCorrect = userAnswer === correct.toLowerCase();
        setPracticeChecked(prev => ({ ...prev, [idx]: { isCorrect, correctAnswer: correct } }));
    };

    return (
        <Layout>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <span>Verb Practice</span>
                </div>
                <h1 className="page-title">🔤 Verb Practice</h1>
                <p className="page-subtitle">
                    Master Danish verb conjugation. Browse verb tables or practice conjugation drills by group.
                </p>
            </div>

            {/* Group tabs */}
            <div className="tabs">
                {groups.map(([key, group]) => (
                    <button
                        key={key}
                        className={`tab ${activeGroup === key ? 'active' : ''}`}
                        onClick={() => { setActiveGroup(key); setPracticeMode(false); setPracticeAnswers({}); setPracticeChecked({}); }}
                    >
                        {group.nameEn}
                    </button>
                ))}
            </div>

            {/* Group info */}
            <div className="lesson-card fade-in">
                <h2>{currentGroup.nameEn} <span style={{ color: 'var(--text-secondary)', fontWeight: 400 }}>({currentGroup.name})</span></h2>
                <div style={{
                    padding: '10px 14px',
                    background: 'rgba(0, 212, 255, 0.08)',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '3px solid var(--accent-cyan)',
                    fontSize: 14,
                    color: 'var(--text-secondary)',
                    marginTop: 8
                }}>
                    📖 Rule: <strong>{currentGroup.ruleEn}</strong>
                    <span style={{ display: 'block', marginTop: 4, fontSize: 13, color: 'var(--text-muted)' }}>
                        {currentGroup.rule}
                    </span>
                </div>

                <div style={{ marginTop: 16, display: 'flex', gap: 8 }} className="no-print">
                    <button
                        className={`btn ${!practiceMode ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => setPracticeMode(false)}
                    >
                        📋 Verb Table
                    </button>
                    <button
                        className={`btn ${practiceMode ? 'btn-primary' : 'btn-secondary'}`}
                        onClick={() => { setPracticeMode(true); setPracticeAnswers({}); setPracticeChecked({}); }}
                    >
                        🎯 Practice Drill
                    </button>
                </div>
            </div>

            {/* TABLE VIEW */}
            {!practiceMode && (
                <div className="card fade-in" style={{ overflowX: 'auto' }}>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Infinitiv</th>
                                <th>Nutid (Present)</th>
                                <th>Datid (Past)</th>
                                <th>Førnutid (Perfect)</th>
                                <th>English</th>
                                <th className="no-print">🔊</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentGroup.verbs.map((verb, i) => (
                                <tr key={i}>
                                    <td style={{ fontWeight: 600 }}>{verb.inf}</td>
                                    <td style={{ color: 'var(--accent-cyan)' }}>{verb.pres}</td>
                                    <td style={{ color: 'var(--accent-purple)' }}>{verb.past}</td>
                                    <td style={{ color: 'var(--accent-green)' }}>{verb.perf}</td>
                                    <td style={{ color: 'var(--text-secondary)' }}>{verb.en}</td>
                                    <td className="no-print">
                                        <SpeechButton text={`${verb.inf}, ${verb.pres}, ${verb.past}, ${verb.perf}`} size="small" />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* PRACTICE VIEW */}
            {practiceMode && (
                <div className="fade-in">
                    <div style={{ marginBottom: 16 }}>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginBottom: 8, fontWeight: 600, textTransform: 'uppercase', letterSpacing: 1 }}>
                            Practice Tense
                        </div>
                        <div className="filter-row">
                            {[
                                { key: 'present', label: 'Nutid (Present)' },
                                { key: 'past', label: 'Datid (Past)' },
                                { key: 'perfect', label: 'Førnutid (Perfect)' },
                            ].map(t => (
                                <button
                                    key={t.key}
                                    className={`filter-chip ${practiceTense === t.key ? 'active' : ''}`}
                                    onClick={() => { setPracticeTense(t.key); setPracticeAnswers({}); setPracticeChecked({}); }}
                                >
                                    {t.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {practiceVerbs.map((verb, idx) => (
                        <div key={idx} className="quiz-question fade-in" style={{ animationDelay: `${idx * 0.05}s` }}>
                            <div className="quiz-question-number">Verb {idx + 1}</div>
                            <div className="quiz-sentence">
                                <SpeechButton text={verb.inf} size="small" />
                                <span>{verb.inf}</span>
                                <span style={{ color: 'var(--text-secondary)', fontSize: 14 }}>({verb.en})</span>
                            </div>
                            <div style={{ fontSize: 14, color: 'var(--text-muted)', marginBottom: 12 }}>
                                Write the <strong style={{ color: 'var(--accent-cyan)' }}>
                                    {practiceTense === 'present' ? 'present tense (nutid)' :
                                        practiceTense === 'past' ? 'past tense (datid)' : 'perfect tense (førnutid)'}
                                </strong> form:
                            </div>
                            <div className="quiz-input-wrapper">
                                <input
                                    type="text"
                                    className={`quiz-input ${practiceChecked[idx] ? (practiceChecked[idx].isCorrect ? 'correct' : 'incorrect') : ''
                                        }`}
                                    placeholder="Skriv her..."
                                    value={practiceAnswers[idx] || ''}
                                    onChange={(e) => setPracticeAnswers(prev => ({ ...prev, [idx]: e.target.value }))}
                                    onKeyDown={(e) => e.key === 'Enter' && handleCheck(idx, verb)}
                                    disabled={!!practiceChecked[idx]}
                                />
                                {!practiceChecked[idx] && (
                                    <button className="btn btn-primary btn-sm" onClick={() => handleCheck(idx, verb)}>Check ✓</button>
                                )}
                                {practiceChecked[idx] && (
                                    <span style={{
                                        color: practiceChecked[idx].isCorrect ? 'var(--accent-green)' : 'var(--accent-red)',
                                        fontWeight: 600,
                                        fontSize: 14
                                    }}>
                                        {practiceChecked[idx].isCorrect ? '✅ Correct!' : `❌ → ${practiceChecked[idx].correctAnswer}`}
                                    </span>
                                )}
                            </div>
                        </div>
                    ))}

                    <div style={{ textAlign: 'center', marginTop: 24 }}>
                        <button
                            className="btn btn-primary"
                            onClick={() => { setPracticeAnswers({}); setPracticeChecked({}); setPracticeMode(true); }}
                        >
                            🔄 New Practice Set
                        </button>
                    </div>
                </div>
            )}

            {/* Print/download */}
            <div style={{ marginTop: 32 }} className="no-print">
                <button className="btn btn-secondary" onClick={() => window.print()}>
                    🖨️ Print Verb Table
                </button>
            </div>
        </Layout>
    );
}
