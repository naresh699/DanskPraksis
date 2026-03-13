'use client';

import { useState } from 'react';
import Link from 'next/link';
import Layout from '@/components/Layout';
import SpeechButton from '@/components/SpeechButton';
import { vocabulary } from '@/data/vocabulary';

const categories = [
    { key: 'body', label: '🦴 Body (Kroppen)', hasEmoji: true },
    { key: 'clothing', label: '👕 Clothing (Tøj)', hasEmoji: true },
    { key: 'weather', label: '🌤️ Weather (Vejret)', hasEmoji: true },
    { key: 'food', label: '🍽️ Food (Mad)', hasEmoji: true },
    { key: 'colors', label: '🎨 Colors (Farver)', hasEmoji: true },
    { key: 'months', label: '📅 Months (Måneder)', hasEmoji: true },
    { key: 'days', label: '📆 Days (Ugedage)', hasEmoji: true },
    { key: 'holidays', label: '🎉 Holidays (Helligdage)', hasEmoji: true },
    { key: 'time', label: '🕐 Time (Klokken)', hasEmoji: true },
    { key: 'adjectives', label: '📝 Adjectives', hasEmoji: true },
    { key: 'dailyPhrases', label: '💬 Daily Phrases', hasEmoji: true },
    { key: 'numbers', label: '🔢 Numbers (Tal)', hasEmoji: false },
    { key: 'commonWords', label: '📖 Common Words', hasEmoji: false },
];

export default function VocabularyPage() {
    const [activeTab, setActiveTab] = useState('body');
    const [search, setSearch] = useState('');

    const activeCategory = categories.find(c => c.key === activeTab);
    const items = vocabulary[activeTab] || [];

    const filteredItems = search
        ? items.filter(item =>
            item.da.toLowerCase().includes(search.toLowerCase()) ||
            item.en.toLowerCase().includes(search.toLowerCase())
        )
        : items;

    return (
        <Layout>
            <div className="print-header">
                <h1>Vocabulary — DanskPraksis</h1>
                <p>Danish-English Word Lists with Visual Graphics</p>
            </div>

            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <span>Vocabulary</span>
                </div>
                <h1 className="page-title">🗂️ Visual Vocabulary</h1>
                <p className="page-subtitle">
                    Learn Danish words with pictures, sounds, and translations.
                    Click any 🔈 button to hear the pronunciation at slow speed.
                </p>
            </div>

            {/* Search */}
            <div style={{ marginBottom: 24 }}>
                <input
                    type="text"
                    placeholder="🔍 Search words in Danish or English..."
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                    className="quiz-input"
                    style={{ maxWidth: 400, width: '100%' }}
                />
            </div>

            {/* Category tabs */}
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 24 }}>
                {categories.map(cat => (
                    <button
                        key={cat.key}
                        className={`filter-chip ${activeTab === cat.key ? 'active' : ''}`}
                        onClick={() => { setActiveTab(cat.key); setSearch(''); }}
                    >
                        {cat.label}
                    </button>
                ))}
            </div>

            {/* Visual Grid for emoji categories */}
            {activeCategory?.hasEmoji && !search ? (
                <div className="visual-grid">
                    {filteredItems.map((item, i) => (
                        <div key={i} className="visual-item" title={item.sentence || ''}>
                            {item.emoji && <span className="visual-emoji">{item.emoji}</span>}
                            <span className="visual-da">{item.da}</span>
                            <span className="visual-en">{item.en}</span>
                            <SpeechButton text={item.sentence || item.da} size="small" />
                        </div>
                    ))}
                </div>
            ) : (
                /* Table view for non-emoji categories or when searching */
                <div className="lesson-card">
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th style={{ width: 40 }}></th>
                                <th>Dansk</th>
                                <th>English</th>
                                <th style={{ width: 50 }}>🔈</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredItems.map((item, i) => (
                                <tr key={i}>
                                    <td style={{ textAlign: 'center' }}>{item.emoji || ''}</td>
                                    <td style={{ fontWeight: 600 }}>{item.da}</td>
                                    <td style={{ color: 'var(--text-secondary)' }}>{item.en}</td>
                                    <td><SpeechButton text={item.da} size="small" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {/* Example sentences section */}
            {activeCategory?.hasEmoji && filteredItems.some(i => i.sentence) && (
                <div className="lesson-card" style={{ marginTop: 24 }}>
                    <h2>📝 Example Sentences</h2>
                    <p className="lesson-subtitle" style={{ marginBottom: 16 }}>How to use these words in real sentences</p>
                    {filteredItems.filter(item => item.sentence).map((item, i) => (
                        <div key={i} className="lesson-example">
                            <SpeechButton text={item.sentence} size="small" />
                            <span className="visual-emoji" style={{ fontSize: 20 }}>{item.emoji}</span>
                            <span className="lesson-example-da">{item.sentence}</span>
                            <span className="lesson-example-en">{item.sentenceEn}</span>
                        </div>
                    ))}
                </div>
            )}

            <div style={{ marginTop: 16, fontSize: 14, color: 'var(--text-muted)' }}>
                Showing {filteredItems.length} words
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 32 }} className="no-print">
                <Link href="/lessons" className="btn btn-secondary">← Lessons</Link>
                <button className="btn btn-primary" onClick={() => window.print()}>🖨️ Print Vocabulary</button>
            </div>
        </Layout>
    );
}
