'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function YhteystiedotPage() {
  const [submitted, setSubmitted] = useState(false)

  return (
    <>
      <div style={{ padding: '72px 24px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: '#C9A96E', display: 'block' }} />
            Ota yhteyttä
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Ollaan <em>yhteydessä.</em>
          </h1>
          <p style={{ fontSize: '15px', color: '#6B6B62', lineHeight: 1.7 }}>
            Kysymyksiä valmennuksista, mediapyynnöistä tai yhteistyöstä? Kirjoita meille.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '56px 24px 96px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px' }} className="contact-grid">

        {/* LEFT — contact info */}
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 400, lineHeight: 1.3, marginBottom: '16px' }}>
            Löydät <em>Annin täältä</em>
          </h2>
          <p style={{ fontSize: '16px', color: '#6B6B62', lineHeight: 1.8, marginBottom: '28px' }}>
            Vastaamme viesteihin arkisin 24–48 tunnin kuluessa.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {[
              {
                href: 'mailto:info@fatburningfemale.fi',
                label: 'Sähköposti',
                value: 'info@fatburningfemale.fi',
                bg: '#FFF0E0',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9612A" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M2 7l10 7 10-7"/></svg>
              },
              {
                href: 'https://www.instagram.com/anni_sirvio/',
                label: 'Instagram',
                value: '@anni_sirvio',
                bg: '#FDE8F0',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C13584" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="#C13584"/></svg>
              },
              {
                href: 'https://annisirvio.substack.com',
                label: 'Substack',
                value: 'annisirvio.substack.com',
                bg: '#FFF8ED',
                icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="#FF6719"><path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/></svg>
              },
            ].map((item, i) => (
              <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '16px 20px', border: '1px solid rgba(0,0,0,0.08)', borderRadius: '8px', textDecoration: 'none', color: 'inherit' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#9A9A90', marginBottom: '2px' }}>{item.label}</div>
                  <div style={{ fontSize: '14px', fontWeight: 500 }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ marginTop: '32px', padding: '20px', background: '#FAF8F4', borderRadius: '8px', border: '1px solid rgba(0,0,0,0.08)' }}>
            <p style={{ fontSize: '13px', color: '#6B6B62', lineHeight: 1.7 }}>
              <strong style={{ color: '#1A1A18' }}>Mediayhteistyöt ja haastattelut</strong><br />
              Kaikki mediayhteistyöhön liittyvät pyynnöt käsitellään sähköpostitse. Liitä viestiin lyhyt kuvaus yhteistyöehdotuksesta.
            </p>
          </div>
        </div>

        {/* RIGHT — form */}
        <div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '26px', fontWeight: 400, marginBottom: '8px' }}>
            Lähetä <em>viesti</em>
          </h2>
          <p style={{ fontSize: '14px', color: '#6B6B62', marginBottom: '28px', lineHeight: 1.6 }}>
            Täytä lomake ja palaamme asiaan mahdollisimman pian.
          </p>

          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ fontSize: '36px', marginBottom: '16px' }}>✓</div>
              <h3 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400, marginBottom: '10px' }}>Viesti lähetetty!</h3>
              <p style={{ fontSize: '15px', color: '#6B6B62' }}>Kiitos yhteydenotosta. Palaamme asiaan 24–48 tunnin kuluessa.</p>
            </div>
          ) : (
            <div>
              {[
                { label: 'Nimi', type: 'text', placeholder: 'Etunimi Sukunimi' },
                { label: 'Sähköposti', type: 'email', placeholder: 'sinun@email.fi' },
              ].map((field, i) => (
                <div key={i} style={{ marginBottom: '18px' }}>
                  <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6B62', marginBottom: '6px', fontWeight: 500 }}>{field.label}</label>
                  <input type={field.type} placeholder={field.placeholder} style={{ width: '100%', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '6px', padding: '11px 14px', fontSize: '15px', fontFamily: 'inherit', outline: 'none' }} />
                </div>
              ))}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6B62', marginBottom: '6px', fontWeight: 500 }}>Aihe</label>
                <select style={{ width: '100%', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '6px', padding: '11px 14px', fontSize: '15px', fontFamily: 'inherit', outline: 'none', background: '#fff' }}>
                  <option>Valitse aihe...</option>
                  <option>Kysymys valmennuksista</option>
                  <option>Mediayhteistyö tai haastattelu</option>
                  <option>Tekninen ongelma sivustolla</option>
                  <option>Muu asia</option>
                </select>
              </div>
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '12px', letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6B6B62', marginBottom: '6px', fontWeight: 500 }}>Viesti</label>
                <textarea placeholder="Kirjoita viestisi tähän..." style={{ width: '100%', border: '1px solid rgba(0,0,0,0.12)', borderRadius: '6px', padding: '11px 14px', fontSize: '15px', fontFamily: 'inherit', outline: 'none', minHeight: '120px', resize: 'vertical', lineHeight: 1.6 }} />
              </div>
              <button onClick={() => setSubmitted(true)} style={{ background: '#1A1A18', color: '#fff', border: 'none', padding: '13px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', width: '100%' }}>
                Lähetä viesti
              </button>
              <p style={{ fontSize: '12px', color: '#9A9A90', marginTop: '10px', textAlign: 'center', lineHeight: 1.5 }}>
                Käsittelemme viestisi <Link href="/tietosuoja" style={{ color: '#C9A96E' }}>tietosuojaselosteen</Link> mukaisesti.
              </p>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </>
  )
}