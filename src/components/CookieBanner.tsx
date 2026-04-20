'use client'

import Link from 'next/link'

export default function CookieBanner() {
  return (
    <div id="cookie-banner" style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      background: '#2C2C28',
      borderTop: '1px solid rgba(255,255,255,0.1)',
      padding: '14px 24px',
      display: 'flex', alignItems: 'center',
      justifyContent: 'space-between', gap: '16px', flexWrap: 'wrap',
    }}>
      <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.65)', maxWidth: '580px', lineHeight: 1.5, margin: 0 }}>
        Käytämme evästeitä parantaaksemme käyttökokemusta. Lue lisää{' '}
        <Link href="/tietosuoja" style={{ color: '#C9A96E' }}>tietosuojaselosteestamme</Link>.
      </p>
      <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
        <button
          onClick={() => { const el = document.getElementById('cookie-banner'); if (el) el.style.display = 'none'; }}
          style={{ background: 'transparent', color: 'rgba(255,255,255,0.45)', padding: '8px 14px', borderRadius: '5px', fontSize: '13px', border: '1px solid rgba(255,255,255,0.14)', cursor: 'pointer' }}
        >
          Hylkää
        </button>
        <button
          onClick={() => { const el = document.getElementById('cookie-banner'); if (el) el.style.display = 'none'; }}
          style={{ background: '#C9A96E', color: '#1A1A18', padding: '8px 18px', borderRadius: '5px', fontSize: '13px', fontWeight: 600, border: 'none', cursor: 'pointer' }}
        >
          Hyväksy
        </button>
      </div>
    </div>
  )
}