import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--dark)',
      padding: '44px 24px 28px',
      borderTop: '1px solid rgba(255,255,255,0.06)',
    }}>
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
    </footer>
  )
}