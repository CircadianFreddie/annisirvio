'use client'

import Link from 'next/link'
import { useEffect } from 'react'

export default function Footer() {
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
    <footer style={{
      background: 'var(--dark)',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
      {/* NEWSLETTER */}
      <div style={{
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        padding: '56px 24px',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '48px', alignItems: 'center',
        }} className="footer-nl-grid">
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

      {/* BOTTOM */}
      <div style={{ padding: '44px 24px 28px' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px',
        }}>
          <div>
            <span style={{ fontSize: '15px', fontWeight: 600, color: '#fff', display: 'block', marginBottom: '4px' }}>
              Anni Sirviö
            </span>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.45)' }}>
              Naisten hyvinvoinnin asiantuntija
            </span>
          </div>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
            <a href="https://www.instagram.com/anni_sirvio/" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Instagram</a>
            <a href="https://annisirvio.substack.com" target="_blank" rel="noopener noreferrer"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>Substack</a>
            <a href="mailto:info@fatburningfemale.fi"
              style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)' }}>info@fatburningfemale.fi</a>
          </div>
        </div>

        <div style={{
          maxWidth: '1100px', margin: '28px auto 0',
          paddingTop: '20px', borderTop: '1px solid rgba(255,255,255,0.06)',
          display: 'flex', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
            <Link href="/tietosuoja" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>Tietosuoja</Link>
            <Link href="/vastuuvapauslauseke" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>Vastuuvapauslauseke</Link>
            <Link href="/yhteystiedot" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.25)' }}>Yhteystiedot</Link>
          </div>
          <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.22)' }}>
            © 2026 Anni Sirviö. Kaikki oikeudet pidätetään.
          </span>
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