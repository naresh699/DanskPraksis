'use client';

import Link from 'next/link';
import Layout from '@/components/Layout';
import { lessons, getLessonCategories } from '@/data/lessons';

export default function LessonsPage() {
    const categories = getLessonCategories();

    return (
        <Layout>
            <div className="page-header">
                <div className="page-breadcrumb">
                    <Link href="/">Home</Link> <span>/</span> <span>Lessons</span>
                </div>
                <h1 className="page-title">📖 Grammar Lessons</h1>
                <p className="page-subtitle">
                    Complete Danish grammar lessons with bilingual explanations, examples with audio, and practice exercises.
                </p>
            </div>

            {categories.map(cat => (
                <div key={cat.name} style={{ marginBottom: 40 }}>
                    <h2 style={{ fontSize: 18, fontWeight: 700, marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}>
                        <span style={{ color: 'var(--accent-cyan)' }}>
                            {cat.nameEn === 'Verbs' ? '🔤' : '📝'}
                        </span>
                        {cat.nameEn}
                        <span style={{ fontSize: 14, color: 'var(--text-secondary)', fontWeight: 400 }}>({cat.name})</span>
                    </h2>
                    <div className="card-grid">
                        {cat.lessons.map((lesson, i) => (
                            <Link key={lesson.id} href={`/lessons/${lesson.id}`} style={{ textDecoration: 'none' }}>
                                <div className="card card-clickable fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
                                    <div className="card-header">
                                        <div className={`card-icon ${i % 2 === 0 ? 'card-icon-cyan' : 'card-icon-purple'}`}>📖</div>
                                        <div>
                                            <div className="card-title">{lesson.titleEn}</div>
                                            <div className="card-subtitle">{lesson.title}</div>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
                                        <span className="tag tag-cyan">{lesson.difficulty}</span>
                                        <span className="tag tag-green">{lesson.sections.length} sections</span>
                                        {lesson.practiceQuestions && (
                                            <span className="tag tag-amber">{lesson.practiceQuestions.length} exercises</span>
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </Layout>
    );
}
