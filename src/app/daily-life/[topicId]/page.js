'use client';

import { use } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import SpeechButton from '@/components/SpeechButton';
import { dailyLifeTopics } from '@/data/dailyLife';

export default function DailyLifeTopicPage({ params }) {
    const { topicId } = use(params);
    const topic = dailyLifeTopics.find(t => t.id === topicId);

    if (!topic) {
        return (
            <Layout>
                <div style={{ textAlign: 'center', padding: '60px 20px' }}>
                    <h2>Topic not found</h2>
                    <Link href="/daily-life" className="btn btn-primary" style={{ marginTop: 20 }}>
                        Back to Daily Life
                    </Link>
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <Link href="/daily-life">Daily Life</Link> <span>/</span> <span>{topic.titleEn}</span>
                </div>
                <h1 className="page-title">{topic.title}</h1>
                <p className="page-subtitle">{topic.titleEn}</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1fr)', gap: 32 }}>
                {/* Hero Section */}
                <div className="lesson-card fade-in" style={{ backgroundColor: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: 16, overflow: 'hidden', border: '1px solid var(--border-color)', height: 400, position: 'relative' }}>
                    <Image
                        src={topic.image}
                        alt={topic.titleEn}
                        fill
                        style={{ objectFit: 'contain', padding: 40 }}
                        priority
                    />
                </div>

                <p className="fade-in" style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--text-secondary)', animationDelay: '0.1s' }}>
                    {topic.description}
                </p>

                {/* Vocabulary Section */}
                <div className="lesson-card fade-in" style={{ animationDelay: '0.2s' }}>
                    <h2 style={{ fontSize: 24, marginBottom: 20, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: 12 }}>
                        📚 Vocabulary (Ordforråd)
                    </h2>
                    <table className="data-table">
                        <thead>
                            <tr>
                                <th>Dansk</th>
                                <th>English</th>
                                <th style={{ width: 50 }}>🔈</th>
                            </tr>
                        </thead>
                        <tbody>
                            {topic.vocabulary.map((item, idx) => (
                                <tr key={idx}>
                                    <td style={{ fontWeight: 600, fontSize: 16 }}>{item.da}</td>
                                    <td style={{ color: 'var(--text-secondary)', fontSize: 15 }}>{item.en}</td>
                                    <td><SpeechButton text={item.da} size="small" /></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Phrases Section */}
                <div className="lesson-card fade-in" style={{ animationDelay: '0.3s' }}>
                    <h2 style={{ fontSize: 24, marginBottom: 20, color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: 12 }}>
                        💬 Common Phrases (Almindelige Sætninger)
                    </h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                        {topic.phrases.map((phrase, idx) => (
                            <div key={idx} className="lesson-example" style={{ padding: 20, borderRadius: 12, backgroundColor: 'var(--bg-card)' }}>
                                <SpeechButton text={phrase.da} />
                                <div>
                                    <div className="lesson-example-da" style={{ fontSize: 18, marginBottom: 4 }}>{phrase.da}</div>
                                    <div className="lesson-example-en" style={{ fontSize: 15, color: 'var(--text-muted)' }}>{phrase.en}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Navigation Back */}
                <div style={{ marginTop: 24 }} className="fade-in">
                    <Link href="/daily-life" className="btn btn-secondary">
                        ← Back to all topics
                    </Link>
                </div>
            </div>
        </Layout>
    );
}
