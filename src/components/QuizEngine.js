'use client';

import { useState } from 'react';
import SpeechButton from './SpeechButton';
import FeedbackPanel from './FeedbackPanel';

export default function QuizEngine({ questions, onFinish }) {
    const [answers, setAnswers] = useState({});
    const [checked, setChecked] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleInputChange = (qId, value) => {
        if (checked[qId]) return; // Don't allow changes after checking
        setAnswers(prev => ({ ...prev, [qId]: value }));
    };

    const handleCheck = (qId, correctAnswer) => {
        const userAnswer = (answers[qId] || '').trim().toLowerCase();
        const correct = correctAnswer.toLowerCase();
        const isCorrect = userAnswer === correct;
        setChecked(prev => ({ ...prev, [qId]: { isCorrect, userAnswer, correctAnswer: correctAnswer } }));
    };

    const handleFinish = () => {
        // Auto-check any unanswered/unchecked questions
        const allChecked = {};
        questions.forEach(q => {
            if (checked[q.id]) {
                allChecked[q.id] = checked[q.id];
            } else {
                const userAnswer = (answers[q.id] || '').trim().toLowerCase();
                const isCorrect = userAnswer === q.answer.toLowerCase();
                allChecked[q.id] = { isCorrect, userAnswer, correctAnswer: q.answer };
            }
        });
        setChecked(allChecked);
        setShowResults(true);

        if (onFinish) {
            const correct = Object.values(allChecked).filter(c => c.isCorrect).length;
            onFinish({ total: questions.length, correct, results: allChecked });
        }
    };

    const handleKeyDown = (e, qId, correctAnswer) => {
        if (e.key === 'Enter' && !checked[qId]) {
            handleCheck(qId, correctAnswer);
        }
    };

    const answeredCount = Object.keys(checked).length;
    const correctCount = Object.values(checked).filter(c => c.isCorrect).length;
    const progress = (answeredCount / questions.length) * 100;

    // Build the sentence with blank replaced by input
    const renderSentence = (q) => {
        const parts = q.sentence.split('______');
        return (
            <div className="quiz-sentence">
                <SpeechButton text={q.sentence.replace('______', q.answer)} />
                <span>
                    {parts[0]}
                    <span style={{
                        borderBottom: `2px solid ${checked[q.id] ? (checked[q.id].isCorrect ? 'var(--accent-green)' : 'var(--accent-red)') : 'var(--accent-cyan)'}`,
                        padding: '0 2px',
                        fontWeight: 600
                    }}>
                        {checked[q.id] ? q.answer : '______'}
                    </span>
                    {parts[1]}
                </span>
            </div>
        );
    };

    return (
        <div className="quiz-container">
            {/* Progress bar */}
            <div className="quiz-progress no-print">
                <div className="quiz-progress-bar">
                    <div className="quiz-progress-fill" style={{ width: `${progress}%` }} />
                </div>
                <span className="quiz-progress-text">
                    {answeredCount}/{questions.length} answered
                    {answeredCount > 0 && ` • ${correctCount} correct`}
                </span>
            </div>

            {/* Questions */}
            {questions.map((q, i) => (
                <div
                    key={q.id}
                    className={`quiz-question fade-in ${checked[q.id] ? (checked[q.id].isCorrect ? 'correct' : 'incorrect') : ''
                        }`}
                    style={{ animationDelay: `${i * 0.05}s` }}
                >
                    <div className="quiz-question-number">Spørgsmål {i + 1}</div>

                    {renderSentence(q)}

                    <div className="quiz-sentence-en">
                        <SpeechButton text={q.sentenceEn} lang="en-US" size="small" />
                        <span>{q.sentenceEn}</span>
                    </div>

                    <div className="quiz-input-wrapper">
                        <input
                            type="text"
                            className={`quiz-input ${checked[q.id] ? (checked[q.id].isCorrect ? 'correct' : 'incorrect') : ''
                                }`}
                            placeholder="Skriv dit svar her..."
                            value={answers[q.id] || ''}
                            onChange={(e) => handleInputChange(q.id, e.target.value)}
                            onKeyDown={(e) => handleKeyDown(e, q.id, q.answer)}
                            disabled={!!checked[q.id]}
                        />
                        {!checked[q.id] && (
                            <button
                                className="btn btn-primary btn-sm"
                                onClick={() => handleCheck(q.id, q.answer)}
                                disabled={!answers[q.id]?.trim()}
                            >
                                Check ✓
                            </button>
                        )}
                    </div>

                    {!checked[q.id] && q.hint && (
                        <div className="quiz-hint">💡 {q.hint}</div>
                    )}

                    {checked[q.id] && (
                        <FeedbackPanel
                            isCorrect={checked[q.id].isCorrect}
                            userAnswer={checked[q.id].userAnswer}
                            correctAnswer={q.answer}
                            ruleId={q.ruleId}
                            verb={q.verb}
                            tense={q.tense}
                        />
                    )}
                </div>
            ))}

            {/* Finish button */}
            {!showResults && (
                <div style={{ textAlign: 'center', marginTop: 24 }} className="no-print">
                    <button className="btn btn-primary" onClick={handleFinish}>
                        📊 Finish Exam & See Results
                    </button>
                </div>
            )}

            {/* Score summary */}
            {showResults && (
                <div className="score-board fade-in">
                    <div className="score-circle">
                        <div className="score-number">{Math.round((correctCount / questions.length) * 100)}%</div>
                        <div className="score-label">{correctCount}/{questions.length} correct</div>
                    </div>
                    <div className="score-stars">
                        {correctCount / questions.length >= 0.9 ? '⭐⭐⭐⭐⭐' :
                            correctCount / questions.length >= 0.7 ? '⭐⭐⭐⭐' :
                                correctCount / questions.length >= 0.5 ? '⭐⭐⭐' :
                                    correctCount / questions.length >= 0.3 ? '⭐⭐' : '⭐'}
                    </div>
                    <div className="score-message">
                        {correctCount / questions.length >= 0.9 ? 'Fremragende! Excellent!' :
                            correctCount / questions.length >= 0.7 ? 'Godt klaret! Well done!' :
                                correctCount / questions.length >= 0.5 ? 'Ikke dårligt! Not bad!' :
                                    'Øv dig mere! Keep practicing!'}
                    </div>
                    <div className="score-submessage">
                        Review your answers above. Use the "Why?" and "Go to Lesson" buttons on incorrect answers to learn more.
                    </div>
                    <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button className="btn btn-secondary" onClick={() => window.location.reload()}>
                            🔄 Retry Exam
                        </button>
                        <button className="btn btn-primary" onClick={() => window.print()}>
                            🖨️ Print Results
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
