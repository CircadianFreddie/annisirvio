import Link from 'next/link'

export default function NotFound() {
  return (
    <div style={{
      minHeight: 'calc(100vh - 64px)',
      background: 'var(--dark)',
      display: 'flex', alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 24px',
      textAlign: 'center',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', fontFamily: 'Georgia, serif',
        fontStyle: 'italic', fontSize: 'clamp(180px, 25vw, 320px)',
        color: 'rgba(255,255,255,0.03)', lineHeight: 1,
        top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
        pointerEvents: 'none', whiteSpace: 'nowrap', userSelect: 'none',
      }}>404</div>

      <div style={{ position: 'relative', zIndex: 1, maxWidth: '520px' }}>
        <div style={{
          fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase',
          color: 'var(--gold)', marginBottom: '20px',
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px',
        }}>
          <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
          Sivua ei löydy
          <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
        </div>

        <h1 style={{
          fontFamily: 'Georgia, serif',
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: 400, lineHeight: 1.2,
          color: '#fff', marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>
          Hups. Tämä sivu on<br /><em style={{ color: 'var(--gold-light)' }}>eksynyt metsään.</em>
        </h1>

        <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '400px', margin: '0 auto 36px' }}>
          Etsimääsi sivua ei löydy. Se on ehkä poistettu, siirretty tai osoite on kirjoitettu väärin.
        </p>

        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/" style={{
            background: 'var(--gold)', color: 'var(--dark)',
            padding: '13px 26px', borderRadius: '6px',
            fontSize: '14px', fontWeight: 600, display: 'inline-block',
          }}>
            Takaisin etusivulle
          </Link>
          <a href="https://eroonrasvalukosta.fi/webinar/registration/686548809805f75fd6177d2a"
            target="_blank" rel="noopener noreferrer"
            style={{
              color: 'rgba(255,255,255,0.5)', padding: '13px 22px',
              borderRadius: '6px', fontSize: '14px',
              border: '1px solid rgba(255,255,255,0.15)', display: 'inline-block',
            }}>
            Katso maksuton masterclass
          </a>
        </div>

        <div style={{ marginTop: '48px', display: 'flex', gap: '28px', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { href: '/blogi', label: 'Blogi' },
            { href: '/anni', label: 'Tietoa Annista' },
            { href: '/yhteystiedot', label: 'Yhteystiedot' },
          ].map(link => (
            <Link key={link.href} href={link.href} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.3)' }}>
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}