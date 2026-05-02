'use client'

import { useEffect, useState } from 'react'

const FB_GROUP_URL = 'https://www.facebook.com/groups/1492476558925687'

type LessonType = 'video' | 'pdf' | 'locked-future'

interface Lesson {
  id: string
  title: string
  type: LessonType
  vimeoId?: string
  pdfPath?: string
  lockedNote?: string
}

interface Day {
  day: number
  title: string
  unlockDate: Date
  lessons: Lesson[]
}

const CHALLENGE_DATA: Day[] = [
  {
    day: 1,
    title: 'Aloitus',
    unlockDate: new Date('2000-01-01T00:00:00+03:00'),
    lessons: [
      { id: 'aloita-tasta', title: 'Aloita tästä', type: 'video', vimeoId: '907109498' },
      { id: 'kuinka-onnistua', title: 'Kuinka onnistua haasteessa', type: 'video', vimeoId: '907110684' },
      { id: 'ateriasuunnitelma-ohje', title: 'Ohjeistus ateriasuunnitelmaan', type: 'video', vimeoId: '907112652' },
      { id: 'meal-plan-pdf', title: 'Lataa ateriasuunnitelma ja ostoslista', type: 'pdf', pdfPath: '/meal-plans/paiva-1.pdf' },
    ],
  },
  { day: 2, title: 'Eroon makeanhimosta ja mieliteoista', unlockDate: new Date('2026-05-05T05:00:00+03:00'), lessons: [] },
  { day: 3, title: 'Terveellisen ruokavalion ABC', unlockDate: new Date('2026-05-06T05:00:00+03:00'), lessons: [] },
  { day: 4, title: 'Pikakurssi leptiiniresistenssiin', unlockDate: new Date('2026-05-07T05:00:00+03:00'), lessons: [] },
  { day: 5, title: 'Eroon pysyvästi rasvalukosta', unlockDate: new Date('2026-05-08T05:00:00+03:00'), lessons: [] },
]

function formatDateFi(date: Date): string {
  return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
}

function isUnlocked(unlockDate: Date, now: Date): boolean {
  return now.getTime() >= unlockDate.getTime()
}

function getInitialNow(): Date | null {
  if (typeof window === 'undefined') return null
  return new Date()
}

const heroSection: React.CSSProperties = { background: 'var(--dark)', padding: '64px 24px 56px', textAlign: 'center' }
const heroInner: React.CSSProperties = { maxWidth: '720px', margin: '0 auto' }
const eyebrow: React.CSSProperties = { fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '18px' }
const heroTitle: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 4vw, 48px)', fontWeight: 400, lineHeight: 1.15, color: '#fff', marginBottom: '18px', letterSpacing: '-0.02em' }
const heroSub: React.CSSProperties = { fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '28px' }
const fbBtn: React.CSSProperties = { background: 'rgba(255,255,255,0.08)', color: '#fff', padding: '12px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: 500, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid rgba(255,255,255,0.15)' }
const daysSection: React.CSSProperties = { padding: '72px 24px 96px', background: '#fff' }
const daysInner: React.CSSProperties = { maxWidth: '880px', margin: '0 auto' }

export default function FbfChallengePage() {
  const [now, setNow] = useState<Date | null>(getInitialNow)

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 60000)
    return () => clearInterval(interval)
  }, [])

  const unlockedCount = now ? CHALLENGE_DATA.filter((d) => isUnlocked(d.unlockDate, now)).length : 1

  return (
    <>
      <section style={heroSection}>
        <div style={heroInner}>
          <div style={eyebrow}>Tervetuloa matkalle</div>
          <h1 style={heroTitle}>FBF 5 Day <em style={{ color: 'var(--gold-light)' }}>Challenge</em></h1>
          <p style={heroSub}>{unlockedCount} / 5 päivää avoinna. Yhteislähtö 4.5.2026.</p>
          <a href={FB_GROUP_URL} target="_blank" rel="noopener noreferrer" style={fbBtn}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
            Liity keskusteluun FB-ryhmässä
          </a>
        </div>
      </section>

      <section style={daysSection}>
        <div style={daysInner}>
          {CHALLENGE_DATA.map((day) => {
            const unlocked = now ? isUnlocked(day.unlockDate, now) : day.day === 1
            return <DaySection key={day.day} day={day} unlocked={unlocked} />
          })}
        </div>
      </section>
    </>
  )
}

function DaySection({ day, unlocked }: { day: Day; unlocked: boolean }) {
  const dayCard: React.CSSProperties = { marginBottom: '40px', background: unlocked ? '#fff' : 'var(--cream)', border: '1px solid var(--border)', borderRadius: '12px', overflow: 'hidden', opacity: unlocked ? 1 : 0.75 }
  const dayHeader: React.CSSProperties = { padding: '28px 32px', borderBottom: unlocked && day.lessons.length > 0 ? '1px solid var(--border)' : 'none' }
  const headerRow: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px', flexWrap: 'wrap' }
  const dayLabel: React.CSSProperties = { fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }
  const dayTitle: React.CSSProperties = { fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 2.4vw, 28px)', fontWeight: 400, lineHeight: 1.25, color: 'var(--text)', margin: 0, letterSpacing: '-0.02em' }
  const badgeOpen: React.CSSProperties = { background: '#E8F3ED', color: '#2D6B4E', fontSize: '12px', padding: '6px 12px', borderRadius: '20px', fontWeight: 500, letterSpacing: '0.02em', display: 'inline-flex', alignItems: 'center', gap: '6px' }
  const badgeClosed: React.CSSProperties = { background: 'rgba(0,0,0,0.05)', color: 'var(--muted)', fontSize: '12px', padding: '6px 12px', borderRadius: '20px', fontWeight: 500, letterSpacing: '0.02em', display: 'inline-flex', alignItems: 'center', gap: '6px' }

  return (
    <div style={dayCard}>
      <div style={dayHeader}>
        <div style={headerRow}>
          <div>
            <div style={dayLabel}>Päivä {String(day.day).padStart(2, '0')}</div>
            <h2 style={dayTitle}>{day.title}</h2>
          </div>
          <div style={{ flexShrink: 0 }}>
            {unlocked ? (
              <span style={badgeOpen}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                Avoinna
              </span>
            ) : (
              <span style={badgeClosed}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                Aukeaa {formatDateFi(day.unlockDate)}
              </span>
            )}
          </div>
        </div>
      </div>
      {unlocked && day.lessons.length > 0 && (
        <div style={{ padding: '8px 0' }}>
          {day.lessons.map((lesson, idx) => (
            <LessonRow key={lesson.id} lesson={lesson} isLast={idx === day.lessons.length - 1} />
          ))}
        </div>
      )}
      {unlocked && day.lessons.length === 0 && (
        <div style={{ padding: '20px 32px 28px', fontSize: '14px', color: 'var(--muted)', fontStyle: 'italic' }}>Sisältö ladataan pian.</div>
      )}
    </div>
  )
}

function LessonRow({ lesson, isLast }: { lesson: Lesson; isLast: boolean }) {
  const [expanded, setExpanded] = useState(false)
  const baseRow: React.CSSProperties = { padding: '18px 32px', borderBottom: isLast ? 'none' : '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap' }
  const iconBox: React.CSSProperties = { width: '32px', height: '32px', borderRadius: '8px', background: 'var(--cream)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
  const iconBoxMuted: React.CSSProperties = { width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(0,0,0,0.05)', color: 'var(--muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }
  const titleSpan: React.CSSProperties = { fontSize: '15px', color: 'var(--text)', fontWeight: 500 }
  const leftGroup: React.CSSProperties = { display: 'flex', alignItems: 'center', gap: '14px' }

  if (lesson.type === 'locked-future') {
    return (
      <div style={{ ...baseRow, opacity: 0.55 }}>
        <div style={leftGroup}>
          <div style={iconBoxMuted}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
          </div>
          <span style={titleSpan}>{lesson.title}</span>
        </div>
        <span style={{ fontSize: '12px', color: 'var(--muted)', fontStyle: 'italic', flexShrink: 0 }}>{lesson.lockedNote}</span>
      </div>
    )
  }

  if (lesson.type === 'pdf') {
    return (
      <div style={baseRow}>
        <div style={leftGroup}>
          <div style={iconBox}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
          </div>
          <span style={titleSpan}>{lesson.title}</span>
        </div>
        <a href={lesson.pdfPath} download target="_blank" rel="noopener noreferrer" style={{ background: 'var(--dark)', color: '#fff', padding: '8px 18px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, textDecoration: 'none', flexShrink: 0 }}>Lataa PDF</a>
      </div>
    )
  }

  return (
    <div style={{ borderBottom: isLast ? 'none' : '1px solid var(--border)' }}>
      <button onClick={() => setExpanded(!expanded)} style={{ width: '100%', padding: '18px 32px', background: 'transparent', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px', fontFamily: 'inherit', textAlign: 'left' }}>
        <div style={leftGroup}>
          <div style={iconBox}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
          </div>
          <span style={titleSpan}>{lesson.title}</span>
        </div>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--muted)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s', flexShrink: 0 }}><polyline points="6 9 12 15 18 9"/></svg>
      </button>
      {expanded && lesson.vimeoId && (
        <div style={{ padding: '0 32px 28px' }}>
          <div style={{ position: 'relative', aspectRatio: '16/9', background: '#000', borderRadius: '8px', overflow: 'hidden' }}>
            <iframe src={`https://player.vimeo.com/video/${lesson.vimeoId}`} allow="autoplay; fullscreen; picture-in-picture" allowFullScreen style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }} title={lesson.title} />
          </div>
        </div>
      )}
    </div>
  )
}