'use client'

import Link from 'next/link'
import { useState } from 'react'

const STORAGE_KEY = 'cookie-consent'

function getInitialVisibility(): boolean {
  if (typeof window === 'undefined') return false
  try {
    const consent = window.localStorage.getItem(STORAGE_KEY)
    return !consent
  } catch {
    return true
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(getInitialVisibility)
  const [showDetails, setShowDetails] = useState(false)

  function handleChoice(choice: 'all' | 'necessary') {
    try {
      window.localStorage.setItem(STORAGE_KEY, choice)
    } catch {
      // localStorage ei saatavilla, piilotetaan silti
    }
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 200,
      background: '#fff',
      borderTop: '1px solid rgba(0,0,0,0.08)',
      boxShadow: '0 -4px 20px rgba(0,0,0,0.08)',
      padding: '28px 24px 24px',
    }}>
      <div style={{ maxWidth: '680px', margin: '0 auto' }}>
        <h3 style={{
          fontFamily: 'var(--font-serif)',
          fontSize: '22px',
          fontWeight: 400,
          color: 'var(--text)',
          margin: '0 0 12px',
          letterSpacing: '-0.01em',
          lineHeight: 1.3,
        }}>
          Käytämme evästeitä <em style={{ color: 'var(--gold)' }}>käyttökokemuksesi parantamiseen</em>
        </h3>

        <p style={{
          fontSize: '14px',
          color: 'var(--muted)',
          lineHeight: 1.7,
          margin: '0 0 16px',
        }}>
          Käytämme evästeitä sivustollamme parantaaksemme käyttökokemustasi, analysoidaksemme sivuston käyttöä ja kehittääksemme sisältöämme. Voit hyväksyä kaikki evästeet tai valita vain välttämättömät. Lue lisää{' '}
          <Link href="/tietosuoja" style={{ color: 'var(--gold)', textDecoration: 'underline' }}>
            tietosuojaselosteestamme
          </Link>.
        </p>

        {showDetails && (
          <div style={{
            background: 'var(--cream)',
            borderRadius: '8px',
            padding: '16px 18px',
            marginBottom: '16px',
            fontSize: '13px',
            color: 'var(--text)',
            lineHeight: 1.7,
          }}>
            <p style={{ margin: '0 0 10px', fontWeight: 600 }}>Välttämättömät evästeet</p>
            <p style={{ margin: '0 0 14px', color: 'var(--muted)' }}>
              Tarpeelliset sivuston toiminnan kannalta. Niitä ei voi ottaa pois käytöstä.
            </p>
            <p style={{ margin: '0 0 10px', fontWeight: 600 }}>Analytiikka</p>
            <p style={{ margin: '0 0 14px', color: 'var(--muted)' }}>
              Auttavat ymmärtämään miten kävijät käyttävät sivustoa — anonymisoituna.
            </p>
            <p style={{ margin: '0 0 10px', fontWeight: 600 }}>Markkinointi</p>
            <p style={{ margin: 0, color: 'var(--muted)' }}>
              Käytetään kohdennettuun mainontaan esim. Facebookissa. Ei henkilötietoja.
            </p>
          </div>
        )}

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <button
            onClick={() => handleChoice('all')}
            style={{
              background: 'var(--gold)',
              color: 'var(--dark)',
              padding: '14px 24px',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              width: '100%',
            }}
          >
            Hyväksy kaikki evästeet
          </button>
          <button
            onClick={() => handleChoice('necessary')}
            style={{
              background: 'var(--dark)',
              color: '#fff',
              padding: '14px 24px',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              border: 'none',
              cursor: 'pointer',
              fontFamily: 'inherit',
              width: '100%',
            }}
          >
            Hyväksy vain välttämättömät
          </button>
          <button
            onClick={() => setShowDetails(!showDetails)}
            style={{
              background: '#fff',
              color: 'var(--text)',
              padding: '14px 24px',
              borderRadius: '30px',
              fontSize: '15px',
              fontWeight: 600,
              border: '1px solid var(--border)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              width: '100%',
            }}
          >
            {showDetails ? 'Piilota tiedot' : 'Hallitse'}
          </button>
        </div>
      </div>
    </div>
  )
}