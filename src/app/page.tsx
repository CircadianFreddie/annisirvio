import Image from 'next/image'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

const MC = 'https://eroonrasvalukosta.fi/webinar/registration/686548809805f75fd6177d2a'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ minHeight: 'calc(100vh - 64px)', background: 'var(--dark)', display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'stretch', overflow: 'hidden' }} className="hero-section">
        <div style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', zIndex: 1 }}>
          <div style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Naisille joiden paino jumittaa — vaikka yrittävät kaikkensa
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.8vw, 52px)', fontWeight: 400, lineHeight: 1.12, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Kehosi ei ole rikki.<br />Se suojelee itseään —<br /><em style={{ color: 'var(--gold-light)' }}>ja voit muuttaa sen.</em>
          </h1>
          <p style={{ fontSize: '17px', lineHeight: 1.75, color: 'rgba(255,255,255,0.65)', marginBottom: '12px', maxWidth: '480px' }}>
            Rasvalukko, hormonit ja insuliiniresistenssi selittävät, miksi dieetit eivät pure. Masterclassissa ymmärrät vihdoin miksi.
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)', marginBottom: '28px' }}>Maksuton · 35 000+ naista autettu · Ei uutta kuuripakettia</p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <a href={MC} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '14px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600 }}>Katso maksuton masterclass</a>
            <a href="#why" style={{ color: 'rgba(255,255,255,0.5)', fontSize: '14px', display: 'flex', alignItems: 'center', gap: '6px' }}>Ymmärrä, miksi keho jumittaa →</a>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }} className="hero-img">
          <Image src="/images/anni-hero.jpg" alt="Anni Sirviö — naisten hyvinvointivalmentaja" fill style={{ objectFit: 'cover', objectPosition: 'top center' }} priority />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--dark) 0%, transparent 25%)' }} />
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{ background: 'var(--cream)', borderBottom: '1px solid var(--border)', padding: '18px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[{ num: '35 000+', label: 'naista autettu' }, { num: '1 300+', label: 'Substack-tilaajaa' }, { num: '10+', label: 'vuotta alalla' }].map((s, i) => (
            <div key={i} style={{ fontSize: '13px', color: 'var(--muted)', display: 'flex', gap: '8px' }}>
              <strong style={{ color: 'var(--text)' }}>{s.num}</strong>{s.label}
            </div>
          ))}
        </div>
      </div>

      {/* WHY */}
      <section id="why" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="two-col">
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400, lineHeight: 1.2, marginBottom: '18px' }}>
              Keho ei vastaa kurinalaisuuteen, jos se kokee olonsa <em>uhatuksi.</em>
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '32px' }}>Moni nainen tekee kaiken oikein — ja silti jää paikalleen. Syy ei ole itsekurin puute.</p>
            <a href={MC} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '13px 26px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>Katso maksuton masterclass</a>
          </div>
          <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/images/anni-why.jpg" alt="Anni Sirviö" width={540} height={560} style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{ padding: '96px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '12px' }}>
            <p style={{ fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px' }}>ENNEN &amp; JÄLKEEN</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400, marginBottom: '48px' }}>
              Oikea viesti keholle näkyy <em>ajan myötä myös ulospäin.</em>
            </h2>
          </div>
          {/* Grid 1 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px', marginBottom: '3px' }} className="ba-grid">
            {['/images/ba-1.jpg', '/images/ba-2.jpg', '/images/ba-3.jpg', '/images/ba-4.jpg'].map((src, i) => (
              <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '4px', position: 'relative' }}>
                <Image src={src} alt={`Asiakasmuutos ${i + 1}`} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            ))}
          </div>
          {/* Grid 2 */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '3px', marginBottom: '40px' }} className="ba-grid">
            {['/images/ba-5.jpg', '/images/ba-6.jpg', '/images/ba-7.jpg', '/images/ba-8.jpg'].map((src, i) => (
              <div key={i} style={{ aspectRatio: '1/1', overflow: 'hidden', borderRadius: '4px', position: 'relative' }}>
                <Image src={src} alt={`Asiakasmuutos ${i + 5}`} fill style={{ objectFit: 'cover', objectPosition: 'center top' }} />
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center' }}>
            <a href={MC} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '13px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>Katso maksuton masterclass</a>
          </div>
        </div>
      </section>

      {/* ANNI BIO */}
      <section id="anni-bio" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="two-col">
          <div style={{ position: 'relative' }}>
            <Image src="/images/anni-bio.jpg" alt="Anni Sirviö" width={540} height={580} style={{ width: '100%', height: '580px', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px' }} />
          </div>
          <div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.2, marginBottom: '18px' }}>
              En etsi sinusta lisää itsekuria. Etsin <em>syyn, joka pitää kehon jumissa.</em>
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '28px' }}>Siksi tapani puhua painosta, hormoneista ja rasvanpoltosta tuntuu monesta naisesta helpottavalta.</p>
            <a href={MC} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--dark)', color: '#fff', padding: '13px 26px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>Katso maksuton masterclass</a>
          </div>
        </div>
      </section>

      {/* BLOG */}
      <section id="blog" style={{ padding: '96px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '44px', flexWrap: 'wrap', gap: '16px' }}>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400 }}>Viimeisimmät <em>kirjoitukset</em></h2>
            <Link href="/blogi" style={{ fontSize: '14px', color: 'var(--muted)' }}>Kaikki kirjoitukset →</Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="blog-grid">
            {[
              { img: '/images/blog-1.jpg', cat: 'Hormonaalinen hyvinvointi', title: 'Miksi kontrolli ei aina ratkaise sitä, mikä kehossa oikeasti jumittaa' },
              { img: '/images/blog-2.jpg', cat: 'Ravinto ja rytmi', title: 'Kun syöminen on kunnossa paperilla, mutta olo ei silti kevene' },
              { img: '/images/blog-3.jpg', cat: 'Ajattelun muutos', title: 'Miten rakentaa rauhallisempi suhde omaan kehoon ilman luovuttamista' },
            ].map(p => (
              <a key={p.title} href="https://annisirvio.substack.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={{ borderRadius: '6px', overflow: 'hidden', marginBottom: '16px', aspectRatio: '16/9', position: 'relative' }}>
                  <Image src={p.img} alt={p.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>{p.cat}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.4 }}>{p.title}</h3>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--dark)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, color: '#fff', marginBottom: '16px' }}>
            Tämä masterclass antaa <em style={{ color: 'var(--gold-light)' }}>selkeyden takaisin.</em>
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', marginBottom: '32px', lineHeight: 1.8 }}>Maksuton · Ei syyllistämistä · Sopii aloittaa heti</p>
          <a href={MC} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '15px 34px', borderRadius: '6px', fontSize: '15px', fontWeight: 600, display: 'inline-block' }}>Katso maksuton masterclass</a>
        </div>
      </section>

      <CookieBanner />

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-img { min-height: 320px; }
          .two-col { grid-template-columns: 1fr !important; gap: 36px !important; }
          .ba-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
          .podcast-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
