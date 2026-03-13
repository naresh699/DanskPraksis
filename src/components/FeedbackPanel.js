'use client';

import { useState } from 'react';
import Link from 'next/link';
import { grammarRules } from '@/data/grammarRules';
import { findVerb } from '@/data/verbs';
import SpeechButton from './SpeechButton';

export default function FeedbackPanel({ isCorrect, userAnswer, correctAnswer, ruleId, verb, tense }) {
    const [expanded, setExpanded] = useState(false);

    const rule = grammarRules.find(r => r.id === ruleId);
    const verbData = verb ? findVerb(verb.replace('at ', '')) : null;

    if (isCorrect) {
        return (
            <div className="feedback-panel feedback-correct">
                <div className="feedback-title">
                    ✅ Korrekt! Correct!
                </div>
                <div className="feedback-rule">
                    <strong>{correctAnswer}</strong> — {verb && <span>({verb})</span>}
                    {verbData && <span> • {verbData.group} • {verbData.en}</span>}
                </div>
            </div>
        );
    }

    return (
        <div className="feedback-panel feedback-incorrect">
            <div className="feedback-title">
                ❌ Forkert — Incorrect
            </div>

            <div className="feedback-rule">
                <div style={{ marginBottom: 8 }}>
                    Your answer: <strong style={{ color: 'var(--accent-red)' }}>{userAnswer || '(empty)'}</strong>
                    <span style={{ margin: '0 8px' }}>→</span>
                    Correct: <strong style={{ color: 'var(--accent-green)' }}>{correctAnswer}</strong>
                    <SpeechButton text={correctAnswer} size="small" />
                </div>

                {rule && (
                    <div style={{
                        padding: '10px 14px',
                        background: 'rgba(168, 85, 247, 0.08)',
                        borderRadius: 'var(--radius-sm)',
                        borderLeft: '3px solid var(--accent-purple)',
                        marginTop: 8
                    }}>
                        💡 <strong>Reason:</strong> {rule.shortRule}
                    </div>
                )}

                {verbData && (
                    <div style={{ marginTop: 8, fontSize: 13, color: 'var(--text-secondary)' }}>
                        📖 {verb}: {verbData.inf} → {verbData.pres} → {verbData.past} → {verbData.perf}
                        <span style={{ marginLeft: 8, color: 'var(--text-muted)' }}>({verbData.en})</span>
                    </div>
                )}
            </div>

            <div className="feedback-actions">
                <button
                    className="btn btn-ghost btn-sm"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? '▲ Hide details' : '❓ Why?'}
                </button>
                {ruleId && (
                    <Link href={`/lessons/${ruleId}`} className="btn btn-secondary btn-sm">
                        📖 Go to Lesson
                    </Link>
                )}
            </div>

            {expanded && rule && (
                <div className="feedback-expanded">
                    <h4>{rule.title}</h4>
                    <p style={{ whiteSpace: 'pre-line' }}>{rule.fullExplanation}</p>

                    {rule.examples && rule.examples.length > 0 && (
                        <div style={{ marginTop: 12 }}>
                            <h4>More Examples:</h4>
                            {rule.examples.slice(0, 4).map((ex, i) => (
                                <div key={i} className="lesson-example" style={{ margin: '6px 0' }}>
                                    <SpeechButton text={ex.da} size="small" />
                                    <span className="lesson-example-da">{ex.da}</span>
                                    <span className="lesson-example-en">{ex.en}</span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}
