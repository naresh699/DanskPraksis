'use client';

import Link from 'next/link';
import Image from 'next/image';
import Layout from '@/components/Layout';
import { dailyLifeTopics } from '@/data/dailyLife';

export default function DailyLifePage() {
    return (
        <Layout>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <span>Daily Life</span>
                </div>
                <h1 className="page-title">🇩🇰 Daily Life in Denmark</h1>
                <p className="page-subtitle">
                    Learn practical Danish vocabulary and phrases for everyday situations.
                    Master conversations at the grocery store, at the doctor's, or in the office.
                </p>
            </div>

            <div className="card-grid">
                {dailyLifeTopics.map((topic, index) => (
                    <Link href={`/daily-life/${topic.id}`} key={topic.id} style={{ textDecoration: 'none' }}>
                        <div className="card card-clickable fade-in" style={{ animationDelay: `${index * 0.05}s`, display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div style={{ width: '100%', height: 200, position: 'relative', borderTopLeftRadius: 10, borderTopRightRadius: 10, overflow: 'hidden', backgroundColor: '#fff', borderBottom: '1px solid var(--border-color)' }}>
                                <Image
                                    src={topic.image}
                                    alt={topic.titleEn}
                                    fill
                                    style={{ objectFit: 'contain', padding: 20 }}
                                />
                            </div>
                            <div style={{ padding: 20, flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                                <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 8, color: 'var(--text-primary)' }}>
                                    {topic.title}
                                </h2>
                                <h3 style={{ fontSize: 14, fontWeight: 500, color: 'var(--text-secondary)', marginBottom: 12 }}>
                                    {topic.titleEn}
                                </h3>
                                <p style={{ fontSize: 14, color: 'var(--text-muted)', lineHeight: 1.5, flexGrow: 1 }}>
                                    {topic.description}
                                </p>
                                <div style={{ display: 'flex', gap: 8, marginTop: 16 }}>
                                    <span className="tag tag-cyan">{topic.vocabulary.length} words</span>
                                    <span className="tag tag-purple">{topic.phrases.length} phrases</span>
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Layout>
    );
}
