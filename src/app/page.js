'use client';

import Layout from '@/components/Layout';
import Link from 'next/link';
import { pd2Exams } from '@/data/pd2Exams';
import { pd3Exams } from '@/data/pd3Exams';
import { lessons } from '@/data/lessons';
import { verbs } from '@/data/verbs';

const totalVerbs = Object.values(verbs).reduce((sum, g) => sum + g.verbs.length, 0);
const totalQuestions = [...pd2Exams, ...pd3Exams].reduce((sum, e) => sum + e.questions.length, 0);

export default function HomePage() {
  return (
    <Layout>
      <div className="page-header">
        <h1 className="page-title">Velkommen til DanskPraksis 🇩🇰</h1>
        <p className="page-subtitle">
          Practice Danish with real PD2 and PD3 exam questions. Learn grammar rules, practice verb conjugations,
          and hear correct pronunciation — all in one place.
        </p>
      </div>

      {/* Stats */}
      <div className="stats-row">
        <div className="stat-card fade-in fade-in-delay-1">
          <div className="stat-value">{pd2Exams.length + pd3Exams.length}</div>
          <div className="stat-label">Practice Exams</div>
        </div>
        <div className="stat-card fade-in fade-in-delay-2">
          <div className="stat-value">{totalQuestions}</div>
          <div className="stat-label">Questions</div>
        </div>
        <div className="stat-card fade-in fade-in-delay-3">
          <div className="stat-value">{totalVerbs}</div>
          <div className="stat-label">Verbs</div>
        </div>
        <div className="stat-card fade-in fade-in-delay-3">
          <div className="stat-value">{lessons.length}</div>
          <div className="stat-label">Grammar Lessons</div>
        </div>
      </div>

      {/* Quick Start */}
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>📚 Quick Start</h2>
      <div className="card-grid" style={{ marginBottom: 40 }}>
        <Link href="/exams?level=PD2" style={{ textDecoration: 'none' }}>
          <div className="card card-clickable fade-in fade-in-delay-1">
            <div className="card-header">
              <div className="card-icon card-icon-cyan">📋</div>
              <div>
                <div className="card-title">PD2 Exams</div>
                <div className="card-subtitle">Intermediate Level • {pd2Exams.length} exams</div>
              </div>
            </div>
            <div className="card-body">
              Reading comprehension, written composition, and oral practice from real PD2 exam papers (2018–2023).
            </div>
            <div style={{ marginTop: 12 }}>
              <span className="tag tag-cyan">Læseforståelse</span>{' '}
              <span className="tag tag-purple">Skriftlig</span>{' '}
              <span className="tag tag-amber">Mundtlig</span>
            </div>
          </div>
        </Link>

        <Link href="/exams?level=PD3" style={{ textDecoration: 'none' }}>
          <div className="card card-clickable fade-in fade-in-delay-2">
            <div className="card-header">
              <div className="card-icon card-icon-purple">📋</div>
              <div>
                <div className="card-title">PD3 Exams</div>
                <div className="card-subtitle">Advanced Level • {pd3Exams.length} exams</div>
              </div>
            </div>
            <div className="card-body">
              Advanced reading comprehension and argumentation from PD3 exam papers (2019–2022). Society, culture, environment.
            </div>
            <div style={{ marginTop: 12 }}>
              <span className="tag tag-cyan">Læseforståelse</span>{' '}
              <span className="tag tag-purple">Skriftlig</span>
            </div>
          </div>
        </Link>

        <Link href="/verbs" style={{ textDecoration: 'none' }}>
          <div className="card card-clickable fade-in fade-in-delay-3">
            <div className="card-header">
              <div className="card-icon card-icon-green">🔤</div>
              <div>
                <div className="card-title">Verb Practice</div>
                <div className="card-subtitle">{totalVerbs} verbs • 4 groups</div>
              </div>
            </div>
            <div className="card-body">
              Conjugation drills by verb group. Practice Group 1 (-ede), Group 2 (-te), Group 3 (irregular), and modal verbs.
            </div>
            <div style={{ marginTop: 12 }}>
              <span className="tag tag-green">Gruppe 1</span>{' '}
              <span className="tag tag-amber">Gruppe 2</span>{' '}
              <span className="tag tag-purple">Irregular</span>
            </div>
          </div>
        </Link>
      </div>

      {/* Categories */}
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>📖 Grammar Lessons</h2>
      <div className="card-grid" style={{ marginBottom: 40 }}>
        {lessons.map((lesson, i) => (
          <Link key={lesson.id} href={`/lessons/${lesson.id}`} style={{ textDecoration: 'none' }}>
            <div className="card card-clickable fade-in" style={{ animationDelay: `${i * 0.05}s` }}>
              <div className="card-header">
                <div className={`card-icon ${i % 2 === 0 ? 'card-icon-cyan' : 'card-icon-purple'}`}>
                  {i % 3 === 0 ? '📖' : i % 3 === 1 ? '📝' : '🎯'}
                </div>
                <div>
                  <div className="card-title">{lesson.titleEn}</div>
                  <div className="card-subtitle">{lesson.title}</div>
                </div>
              </div>
              <div style={{ marginTop: 8 }}>
                <span className="tag tag-cyan">{lesson.difficulty}</span>{' '}
                <span className="tag tag-purple">{lesson.categoryEn}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Additional Resources */}
      <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 16 }}>🛠️ More Tools</h2>
      <div className="card-grid">
        <Link href="/vocabulary" style={{ textDecoration: 'none' }}>
          <div className="card card-clickable">
            <div className="card-header">
              <div className="card-icon card-icon-amber">📝</div>
              <div>
                <div className="card-title">Vocabulary</div>
                <div className="card-subtitle">Adjectives, phrases, numbers</div>
              </div>
            </div>
            <div className="card-body">Browse Danish vocabulary with pronunciation and English translations.</div>
          </div>
        </Link>

        <Link href="/download" style={{ textDecoration: 'none' }}>
          <div className="card card-clickable">
            <div className="card-header">
              <div className="card-icon card-icon-pink">📥</div>
              <div>
                <div className="card-title">Download & Print</div>
                <div className="card-subtitle">Practice offline</div>
              </div>
            </div>
            <div className="card-body">Download printable practice sheets, blank exams, and verb tables for offline study.</div>
          </div>
        </Link>
      </div>
    </Layout>
  );
}
