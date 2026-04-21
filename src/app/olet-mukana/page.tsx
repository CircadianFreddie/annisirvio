'use client'

import { useEffect, useState } from 'react'

const START_DATE = new Date('2026-05-04T09:00:00+03:00')
const FB_GROUP_URL = 'https://www.facebook.com/groups/1492476558925687'
const SHARE_URL = 'https://annisirvio.fi/haaste'
const SHARE_TEXT = 'Hei! Löysin mielenkiintoisen 5 päivän maksuttoman FBF-haasteen naisten hyvinvointiin. Yhteislähtö 4.5.2026. Liitytkö mukaan?'

function getTimeLeft() {
  const now = new Date()
  const diff = START_DATE.getTime() - now.getTime()
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, expired: true }
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds, expired: false }
}

export default function OletMukanaPage() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft())
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(timer)
  }, [])

  function copyLink() {
    navigator.clipboard.writeText(SHARE_URL).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  function shareFacebook() {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(SHARE_URL)}`
    window.open(url, '_blank', 'width=600,height=500')
  }

  function shareWhatsApp() {
    const text = encodeURIComponent(`${SHARE_TEXT} ${SHARE_URL}`)
    window.open(`https://wa.me/?text=${text}`, '_blank')
  }

  return (
    <>
      <section style={{ background: 'var(--dark)', padding: '96px 24px 80px', textAlign: 'center' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: 'var(--gold)', margin: '0 auto 28px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--dark)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px' }}>— Tervetuloa —</div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 400, lineHeight: 1.1, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Olet <em style={{ color: 'var(--gold-light)' }}>mukana!</em>
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.7)', marginBottom: '8px' }}>Paikkasi FBF 5 Day Challengeen on varattu.</p>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)' }}>Yhteislähtö <strong style={{ color: '#fff' }}>4.5.2026 klo 9:00</strong></p>
        </div>
      </section>

      <section style={{ background: 'var(--dark)', padding: '0 24px 96px', borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px' }}>
            {timeLeft.expired ? 'Haaste on alkanut!' : 'Aloitukseen'}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', maxWidth: '520px', margin: '0 auto' }} className="countdown-grid">
            <CountdownBox value={timeLeft.days} label="päivää" />
            <CountdownBox value={timeLeft.hours} label="tuntia" />
            <CountdownBox value={timeLeft.minutes} label="min" />
            <CountdownBox value={timeLeft.seconds} label="sek" />
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>— Mitä seuraavaksi —</div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', margin: 0 }}>
              Näin haaste <em>etenee</em>
            </h2>
          </div>
          {[
            { num: '1', title: 'Tarkista sähköpostisi', desc: 'Lähetimme sinulle tervetuloviestin muutaman minuutin sisällä. Jos et löydä sitä, tarkista myös roskapostikansio.' },
            { num: '2', title: 'Liity Facebook-ryhmään', desc: 'Haasteen yhteisö kokoontuu suljetussa Facebook-ryhmässä. Sieltä saat tukea muilta osallistujilta ja Anni vastaa kysymyksiisi.' },
            { num: '3', title: 'Odota yhteislähtöä 4.5.2026', desc: 'Saat muistutuksen päivää ennen aloitusta. Haaste alkaa ensimmäisellä opetusvideolla kello 9:00.' },
          ].map((step, i) => (
            <div key={i} style={{ display: 'flex', gap: '20px', padding: '24px 0', borderBottom: i < 2 ? '1px solid var(--border)' : 'none', alignItems: 'flex-start' }}>
              <div style={{ minWidth: '40px', height: '40px', borderRadius: '50%', background: 'var(--cream)', color: 'var(--gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-serif)', fontSize: '18px', fontWeight: 400 }}>
                {step.num}
              </div>
              <div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, marginBottom: '8px', color: 'var(--text)' }}>{step.title}</h3>
                <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>— Liity heti yhteisöön —</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Tapaa muita jotka ovat samalla <em>matkalla</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '32px' }}>
            Haasteen suljetussa Facebook-ryhmässä kohtaat muita naisia jotka aloittavat samaan aikaan kanssasi. Se on paras paikka kysyä, jakaa ja saada tukea matkan aikana.
          </p>
          <a href={FB_GROUP_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--dark)', color: '#fff', padding: '16px 32px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
            Liity Facebook-ryhmään
          </a>
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px' }}>— Kutsu ystävä —</div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 2.6vw, 32px)', fontWeight: 400, lineHeight: 1.25, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Tunnetko jonkun joka <em>hyötyisi tästä?</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '32px' }}>
            Jaa haaste ystävällesi, sisarellesi tai työkaverillesi. Matka on helpompi yhdessä — ja maksutta mukaan voi liittyä kuka tahansa.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <button onClick={copyLink} style={{ background: copied ? 'var(--gold)' : '#fff', color: copied ? 'var(--dark)' : 'var(--text)', border: `1px solid ${copied ? 'var(--gold)' : 'var(--border)'}`, padding: '14px 20px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'all 0.2s' }}>
              {copied ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  Linkki kopioitu!
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>
                  Kopioi linkki
                </>
              )}
            </button>
            <button onClick={shareFacebook} style={{ background: '#fff', color: 'var(--text)', border: '1px solid var(--border)', padding: '14px 20px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#1877F2"><path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.95.93-1.95 1.88v2.27h3.32l-.53 3.49h-2.79V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
              Jaa Facebookissa
            </button>
            <button onClick={shareWhatsApp} style={{ background: '#fff', color: 'var(--text)', border: '1px solid var(--border)', padding: '14px 20px', borderRadius: '8px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413" /></svg>
              Jaa WhatsAppissa
            </button>
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 24px', background: 'var(--dark)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(20px, 2.2vw, 26px)', lineHeight: 1.5, fontStyle: 'italic', color: '#fff', marginBottom: '24px', letterSpacing: '-0.01em' }}>
            &ldquo;Kiitos että lähdet mukaan. Odotan jo innolla 4.5.2026 — silloin aloitamme yhdessä.&rdquo;
          </p>
          <p style={{ fontSize: '14px', color: 'var(--gold)', letterSpacing: '0.08em' }}>— Anni</p>
        </div>
      </section>

      <style>{`
        @media (max-width: 600px) {
          .countdown-grid { gap: 8px !important; }
        }
      `}</style>
    </>
  )
}

function CountdownBox({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '20px 8px' }}>
      <div style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 400, color: 'var(--gold-light)', lineHeight: 1, marginBottom: '6px' }}>
        {String(value).padStart(2, '0')}
      </div>
      <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.5)' }}>
        {label}
      </div>
    </div>
  )
}