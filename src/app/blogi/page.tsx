import type { Metadata } from 'next'
import BlogClient from './BlogClient'

export const metadata: Metadata = {
  title: 'Blogi — Anni Sirviö',
  description: 'Kirjoituksia hormonaalisesta terveydestä, aineenvaihdunnasta, vuorokausirytmistä ja naisen biologiasta.',
}

export const revalidate = 3600

type Post = {
  title: string
  link: string
  pubDate: string
  description: string
  thumbnail: string
}

type SubstackApiPost = {
  title: string
  slug: string
  post_date: string
  subtitle?: string | null
  cover_image?: string | null
}

async function getPosts(): Promise<Post[]> {
  try {
    const res = await fetch(
      'https://annisirvio.substack.com/api/v1/posts?limit=50&offset=0',
      { next: { revalidate: 3600 } }
    )
    if (!res.ok) return []
    const data: SubstackApiPost[] = await res.json()
    return data.map((p) => ({
      title: p.title,
      link: `https://annisirvio.substack.com/p/${p.slug}`,
      pubDate: p.post_date,
      description: p.subtitle ?? '',
      thumbnail: p.cover_image ?? '',
    }))
  } catch {
    return []
  }
}

export default async function BlogPage() {
  const posts = await getPosts()

  return (
    <>
      <div style={{ padding: '72px 24px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: '#C9A96E', display: 'block' }} />
              Blogi
            </div>
            <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 400, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              Kirjoituksia <em>hyvinvoinnista,</em><br />valosta ja ravinnosta.
            </h1>
            <p style={{ fontSize: '16px', color: '#6B6B62', marginTop: '12px', maxWidth: '480px', lineHeight: 1.7 }}>
              Syvällisiä tekstejä hormonaalisesta terveydestä, aineenvaihdunnasta ja naisen biologiasta — suoraan Substackista.
            </p>
          </div>
          <a href="https://annisirvio.substack.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1A1A18', color: '#fff', padding: '11px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: 500, flexShrink: 0 }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z" />
            </svg>
            Tilaa Substackissa
          </a>
        </div>
      </div>

      <BlogClient posts={posts} />

      <div style={{ background: '#1A1A18', padding: '56px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '520px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 400, color: '#fff', marginBottom: '12px', lineHeight: 1.3 }}>
            Älä missaa uusia <em style={{ color: '#E8D5B0' }}>kirjoituksia</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '28px', lineHeight: 1.7 }}>
            Tilaa Substack ja saat jokaisen uuden postauksen suoraan sähköpostiisi. Yli 1 300 tilaajaa jo mukana.
          </p>
          <a href="https://annisirvio.substack.com" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#C9A96E', color: '#1A1A18', padding: '13px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600 }}>
            Tilaa ilmaiseksi
          </a>
        </div>
      </div>
    </>
  )
}