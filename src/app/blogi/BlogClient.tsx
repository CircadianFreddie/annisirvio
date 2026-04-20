'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Post {
  title: string
  link: string
  pubDate: string
  description: string
  thumbnail: string
}

const CATEGORIES: Record<string, string> = {
  'hormon': 'Hormonit & aineenvaihdunta',
  'rasva': 'Rasvalukko',
  'vaihdevuos': 'Vaihdevuodet',
  'perimenopaus': 'Perimenopaussi',
  'uni': 'Uni & palautuminen',
  'ravinto': 'Ravinto',
  'valo': 'Valo & rytmi',
  'paino': 'Painonhallinta',
  'stressi': 'Stressi',
}

function getCategory(title: string, desc: string): string {
  const txt = (title + ' ' + desc).toLowerCase()
  for (const [key, label] of Object.entries(CATEGORIES)) {
    if (txt.includes(key)) return label
  }
  return 'Hyvinvointi'
}

function formatDate(dateStr: string): string {
  try {
    return new Date(dateStr).toLocaleDateString('fi-FI', { day: 'numeric', month: 'long', year: 'numeric' })
  } catch { return '' }
}

function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, '').trim()
}

function getExcerpt(content: string, max = 120): string {
  const text = stripHtml(content)
  return text.length > max ? text.slice(0, max).trim() + '…' : text
}

export default function BlogClient() {
  const [posts, setPosts] = useState<Post[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [showAll, setShowAll] = useState(false)

  useEffect(() => {
    // Fetch via our own API route (avoids CORS)
    fetch('/api/posts')
      .then(r => r.json())
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '6px', marginBottom: '16px' }}>
        {[0, 1, 2].map(i => (
          <div key={i} style={{
            width: '8px', height: '8px', borderRadius: '50%',
            background: '#C9A96E', opacity: 0.4,
            animation: `pulse 1.4s ease-in-out ${i * 0.2}s infinite`,
          }} />
        ))}
      </div>
      <p style={{ fontSize: '14px', color: '#9A9A90' }}>Ladataan kirjoituksia...</p>
      <style>{`@keyframes pulse { 0%,100%{opacity:.3;transform:scale(1)} 50%{opacity:1;transform:scale(1.2)} }`}</style>
    </div>
  )

  if (error || posts.length === 0) return (
    <div style={{ textAlign: 'center', padding: '80px 24px' }}>
      <h3 style={{ fontFamily: 'Georgia,serif', fontSize: '22px', fontWeight: 400, marginBottom: '12px' }}>
        Lue kaikki kirjoitukset Substackissa
      </h3>
      <p style={{ fontSize: '15px', color: '#6B6B62', marginBottom: '24px' }}>
        Kaikki Annin kirjoitukset löydät suoraan Substackista.
      </p>
      <a href="https://annisirvio.substack.com" target="_blank" rel="noopener noreferrer"
        style={{ background: '#C9A96E', color: '#1A1A18', padding: '12px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>
        Siirry Substackiin
      </a>
    </div>
  )

  const featured = posts[0]
  const rest = showAll ? posts.slice(1) : posts.slice(1, 7)

  return (
    <div style={{ background: '#fff' }}>
      {/* FEATURED */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 0' }}>
        <a href={featured.link} target="_blank" rel="noopener noreferrer" style={{
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          borderRadius: '8px', overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0.08)', cursor: 'pointer',
          textDecoration: 'none', color: 'inherit',
        }} className="featured-card">
          <div style={{ background: '#FAF8F4', aspectRatio: '4/3', overflow: 'hidden', position: 'relative' }}>
            {featured.thumbnail
              ? <Image
                  src={featured.thumbnail}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  style={{ objectFit: 'cover' }}
                />
              : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                </div>
            }
          </div>
          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: '#fff' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '14px', fontWeight: 600 }}>
              ✦ Uusin kirjoitus · {getCategory(featured.title, featured.description)}
            </div>
            <h2 style={{ fontFamily: 'Georgia,serif', fontSize: 'clamp(20px, 2.2vw, 28px)', fontWeight: 400, lineHeight: 1.3, letterSpacing: '-0.01em', marginBottom: '14px' }}>
              {featured.title}
            </h2>
            <p style={{ fontSize: '15px', color: '#6B6B62', lineHeight: 1.75, marginBottom: '20px', flex: 1 }}>
              {getExcerpt(featured.description || '', 180)}
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <span style={{ fontSize: '13px', color: '#9A9A90' }}>{formatDate(featured.pubDate)}</span>
              <span style={{ fontSize: '13px', color: '#C9A96E', fontWeight: 500, marginLeft: 'auto' }}>Lue Substackissa →</span>
            </div>
          </div>
        </a>
      </div>

      {/* GRID */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '40px 24px 80px' }}>
        <div style={{ fontSize: '11px', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#9A9A90', marginBottom: '28px', paddingBottom: '12px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
          Kaikki kirjoitukset — {posts.length} julkaisua
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }} className="blog-grid">
          {rest.map((post, i) => (
            <a key={i} href={post.link} target="_blank" rel="noopener noreferrer"
              style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}>
              <div style={{ borderRadius: '6px', overflow: 'hidden', marginBottom: '16px', background: '#FAF8F4', aspectRatio: '16/9', position: 'relative' }}>
                {post.thumbnail
                  ? <Image
                      src={post.thumbnail}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover' }}
                    />
                  : <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>
                    </div>
                }
              </div>
              <div style={{ fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '8px', fontWeight: 600 }}>
                {getCategory(post.title, post.description)}
              </div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.4, marginBottom: '8px' }}>{post.title}</h3>
              <p style={{ fontSize: '13px', color: '#6B6B62', lineHeight: 1.7, flex: 1, marginBottom: '12px' }}>
                {getExcerpt(post.description || '', 100)}
              </p>
              <span style={{ fontSize: '12px', color: '#9A9A90' }}>{formatDate(post.pubDate)}</span>
            </a>
          ))}
        </div>

        {/* SHOW ALL BUTTON */}
        {!showAll && posts.length > 7 && (
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button
              onClick={() => setShowAll(true)}
              style={{
                background: 'transparent', border: '1px solid rgba(0,0,0,0.12)',
                padding: '13px 32px', borderRadius: '6px',
                fontSize: '14px', color: '#6B6B62', cursor: 'pointer',
                fontFamily: 'inherit', transition: 'all 0.2s',
              }}
              onMouseEnter={e => { (e.target as HTMLButtonElement).style.borderColor = '#C9A96E'; (e.target as HTMLButtonElement).style.color = '#C9A96E' }}
              onMouseLeave={e => { (e.target as HTMLButtonElement).style.borderColor = 'rgba(0,0,0,0.12)'; (e.target as HTMLButtonElement).style.color = '#6B6B62' }}
            >
              Näytä kaikki kirjoitukset ({posts.length - 1} julkaisua)
            </button>
          </div>
        )}

        {showAll && (
          <div style={{ textAlign: 'center', marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
            <a href="https://annisirvio.substack.com/archive?sort=new" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '14px', color: '#C9A96E', display: 'inline-flex', alignItems: 'center', gap: '6px', fontWeight: 500 }}>
              Katso koko arkisto Substackissa →
            </a>
            <p style={{ fontSize: '13px', color: '#9A9A90' }}>Tilaa Substack niin et missaa uusia kirjoituksia</p>
          </div>
        )}
      </div>

      <style>{`
        .featured-card { transition: box-shadow 0.3s; }
        .featured-card:hover { box-shadow: 0 8px 32px rgba(0,0,0,0.08); }
        @media (max-width: 768px) {
          .featured-card { grid-template-columns: 1fr !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}