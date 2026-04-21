'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
      background: 'rgba(255,255,255,0.96)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(0,0,0,0.08)',
      height: '64px',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: '1100px', margin: '0 auto', width: '100%',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'var(--font-serif)', fontSize: '17px', fontWeight: 400, letterSpacing: '0.22em', textTransform: 'uppercase' }}>Anni Sirviö</span>
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
          <Link href="/#why" style={{ fontSize: '14px', color: 'var(--muted)' }}>Miksi tämä toimii</Link>
          <Link href="/#method" style={{ fontSize: '14px', color: 'var(--muted)' }}>FBF-metodi</Link>
          <Link href="/blogi" style={{ fontSize: '14px', color: 'var(--muted)' }}>Blogi</Link>
          <Link href="/anni" style={{ fontSize: '14px', color: 'var(--muted)' }}>Anni</Link>
          <a
            href="https://eroonrasvalukosta.fi/webinar/registration/686548809805f75fd6177d2a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--dark)', color: '#fff',
              padding: '9px 20px', borderRadius: '6px',
              fontSize: '13px', fontWeight: 500,
            }}
          >
            Katso masterclass
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none', background: 'none', border: 'none',
            cursor: 'pointer', padding: '8px', color: 'var(--text)',
          }}
          aria-label="Valikko"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {menuOpen
              ? <><path d="M18 6L6 18"/><path d="M6 6l12 12"/></>
              : <><path d="M3 12h18"/><path d="M3 6h18"/><path d="M3 18h18"/></>
            }
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '64px', left: 0, right: 0,
          background: '#fff', borderBottom: '1px solid rgba(0,0,0,0.08)',
          padding: '16px 24px 24px',
          display: 'flex', flexDirection: 'column', gap: '16px',
        }}>
          <Link href="/#why" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text)' }}>Miksi tämä toimii</Link>
          <Link href="/#method" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text)' }}>FBF-metodi</Link>
          <Link href="/blogi" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text)' }}>Blogi</Link>
          <Link href="/anni" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text)' }}>Anni</Link>
          <Link href="/yhteystiedot" onClick={() => setMenuOpen(false)} style={{ fontSize: '15px', color: 'var(--text)' }}>Yhteystiedot</Link>
          <a
            href="https://eroonrasvalukosta.fi/webinar/registration/686548809805f75fd6177d2a"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              background: 'var(--dark)', color: '#fff',
              padding: '12px 20px', borderRadius: '6px',
              fontSize: '14px', fontWeight: 500, textAlign: 'center',
            }}
          >
            Katso masterclass
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}