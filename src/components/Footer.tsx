'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

const SOCIAL = [
  {
    name: 'Instagram',
    href: 'https://instagram.com/anni_sirvio',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@annisirvio/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M23.5 6.2s-.2-1.6-.9-2.3c-.9-1-1.9-1-2.3-1C17.2 2.7 12 2.7 12 2.7s-5.2 0-8.3.2c-.5.1-1.4.1-2.3 1-.7.7-.9 2.3-.9 2.3S.2 8 .2 9.8v1.7c0 1.7.3 3.5.3 3.5s.2 1.6.9 2.3c.9 1 2 1 2.6 1 1.9.2 7.9.2 7.9.2s5.2 0 8.3-.3c.5-.1 1.4-.1 2.3-1 .7-.7.9-2.3.9-2.3s.3-1.7.3-3.5V9.8c0-1.7-.2-3.6-.2-3.6zM9.7 15.5V8.2l6.3 3.7-6.3 3.6z"/></svg>
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/annisirvio',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z"/></svg>
  },
  {
    name: 'TikTok',
    href: 'https://tiktok.com/@anni_sirvio',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.17 8.17 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z"/></svg>
  },
  {
    name: 'X',
    href: 'https://x.com/anni_sirvio',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  },
  {
    name: 'Substack',
    href: 'https://annisirvio.substack.com/',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/show/20noV1OqWiunftHwVmS4ht',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/></svg>
  },
]

export default function Footer() {
  const pathname = usePathname()
  const isChallenge = pathname === '/haaste'

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://eomail8.com/form/fb5fc404-3626-11f1-97b9-eb425289454e.js'
    script.async = true
    script.setAttribute('data-form', 'fb5fc404-3626-11f1-97b9-eb425289454e')
    const container = document.getElementById('eo-form-container')
    if (container && !container.hasChildNodes()) {
      container.appendChild(script)
    }
  }, [])

  return (
    <footer style={{ background: 'var(--dark)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>

      {/* NEWSLETTER */}
      {!isChallenge && (
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="footer-nl-grid">
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              Uutiskirje
            </div>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(20px, 2vw, 28px)', fontWeight: 400, color: '#fff', marginBottom: '10px', lineHeight: 1.3 }}>
              Älä missaa uusia kirjoituksia
            </h3>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.7 }}>
              Tilaa ja saat uusimmat kirjoitukset sekä parhaat vinkit suoraan sähköpostiisi.
            </p>
          </div>
          <div id="eo-form-container" style={{ minHeight: '80px' }} />
        </div>
      </div>
      )}

      {/* SOME-IKONIT */}
      <div style={{ borderBottom: '1px solid rgba(255,255,255,0.06)', padding: '32px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.35)' }}>Seuraa Annia</p>
          <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {SOCIAL.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.name}
                style={{
                  width: '40px', height: '40px',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'rgba(255,255,255,0.5)',
                  transition: 'all 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(201,169,110,0.15)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(201,169,110,0.3)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLAnchorElement).style.background = 'rgba(255,255,255,0.06)'
                  ;(e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.5)'
                  ;(e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div style={{ padding: '32px 24px 28px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#fff', display: 'block', marginBottom: '4px' }}>Anni Sirviö</span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>Naisten hyvinvoinnin asiantuntija</span>
          </div>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/tietosuoja" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Tietosuoja</Link>
            <Link href="/vastuuvapauslauseke" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Vastuuvapauslauseke</Link>
            <Link href="/yhteystiedot" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)' }}>Yhteystiedot</Link>
          </div>
        </div>
        <div style={{ maxWidth: '1100px', margin: '20px auto 0', paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.22)' }}>© 2026 Anni Sirviö. Kaikki oikeudet pidätetään.</span>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-nl-grid { grid-template-columns: 1fr !important; }
        }
        #eo-form-container input[type="email"] {
          background: rgba(255,255,255,0.08) !important;
          border: 1px solid rgba(255,255,255,0.15) !important;
          color: #fff !important;
          border-radius: 6px !important;
          padding: 10px 14px !important;
        }
        #eo-form-container button {
          background: var(--gold) !important;
          color: var(--dark) !important;
          border: none !important;
          border-radius: 6px !important;
          font-weight: 600 !important;
          cursor: pointer !important;
        }
      `}</style>
    </footer>
  )
}