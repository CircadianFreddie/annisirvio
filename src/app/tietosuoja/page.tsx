import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tietosuojaseloste — Anni Sirviö',
}

export default function TietosuojaPage() {
  return (
    <>
      <div style={{ padding: '72px 24px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: '#C9A96E', display: 'block' }} />
            Lainmukaiset tiedot
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Tietosuojaseloste
          </h1>
          <p style={{ fontSize: '15px', color: '#6B6B62', lineHeight: 1.7 }}>
            Tässä selosteessa kerromme, miten keräämme, käytämme ja suojelemme henkilötietojasi.
          </p>
          <p style={{ fontSize: '12px', color: '#9A9A90', marginTop: '10px' }}>Päivitetty: huhtikuu 2026</p>
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 24px 96px' }}>
        {[
          {
            title: '1. Rekisterinpitäjä',
            content: <p>Anni Sirviö (Fat Burning Female)<br />Sähköposti: <a href="mailto:info@fatburningfemale.fi" style={{ color: '#C9A96E' }}>info@fatburningfemale.fi</a><br />Verkkosivusto: annisirvio.fi</p>
          },
          {
            title: '2. Mitä tietoja keräämme',
            content: <>
              <p>Keräämme seuraavia henkilötietoja vain silloin, kun annat ne itse:</p>
              <ul style={{ paddingLeft: '20px', margin: '12px 0' }}>
                <li style={{ marginBottom: '8px' }}><strong>Yhteystiedot</strong> — nimi ja sähköposti, kun tilaat uutiskirjeen tai lähetät yhteydenottolomakkeen</li>
                <li style={{ marginBottom: '8px' }}><strong>Käyttäytymistiedot</strong> — evästeiden kautta kerättävä tieto sivuston käytöstä</li>
                <li><strong>Lomakkeiden tiedot</strong> — yhteydenottolomakkeella lähettämäsi viestit</li>
              </ul>
            </>
          },
          {
            title: '3. Miksi käytämme tietojasi',
            content: <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Uutiskirjeen ja sähköpostiviestinnän lähettämiseen</li>
              <li style={{ marginBottom: '8px' }}>Yhteydenottoihisi vastaamiseen</li>
              <li style={{ marginBottom: '8px' }}>Sivuston käytön analysointiin ja kehittämiseen</li>
              <li>Lakisääteisten velvoitteiden täyttämiseen</li>
            </ul>
          },
          {
            title: '4. Evästekäytäntö',
            content: <>
              <p>Käytämme evästeitä sivuston toiminnan parantamiseksi ja kävijätilastojen keräämiseksi.</p>
              <p style={{ marginTop: '12px' }}><strong>Välttämättömät evästeet</strong> — sivuston toiminnalle välttämättömät.</p>
              <p style={{ marginTop: '8px' }}><strong>Analytiikkaevästeet</strong> — käytämme Google Analyticsia ymmärtääksemme sivuston käyttöä. Tiedot ovat anonyymejä.</p>
            </>
          },
          {
            title: '5. Tietojen säilytys ja suojaus',
            content: <p>Säilytämme tietojasi vain niin kauan kuin on tarpeen. Sivustomme käyttää HTTPS-suojausta.</p>
          },
          {
            title: '6. Kolmannet osapuolet',
            content: <>
              <p>Emme myy tai luovuta henkilötietojasi kolmansille osapuolille markkinointitarkoituksiin. Käytämme:</p>
              <ul style={{ paddingLeft: '20px', marginTop: '12px' }}>
                <li style={{ marginBottom: '8px' }}><strong>Substack</strong> — uutiskirjeen hallinta</li>
                <li><strong>Google Analytics</strong> — kävijätilastot (anonymisoitu)</li>
              </ul>
            </>
          },
          {
            title: '7. Sinun oikeutesi (GDPR)',
            content: <ul style={{ paddingLeft: '20px' }}>
              <li style={{ marginBottom: '8px' }}>Tarkastusoikeus — voit pyytää kopion tiedoistasi</li>
              <li style={{ marginBottom: '8px' }}>Oikaisun oikeus — voit pyytää virheellisten tietojen korjaamista</li>
              <li style={{ marginBottom: '8px' }}>Poisto-oikeus — voit pyytää tietojesi poistamista</li>
              <li style={{ marginBottom: '8px' }}>Vastustamisoikeus — voit vastustaa suoramarkkinointia</li>
              <li>Peruutusoikeus — voit peruuttaa suostumuksesi milloin tahansa</li>
            </ul>
          },
          {
            title: '8. Yhteystiedot',
            content: <p>Lähetä tietopyyntösi osoitteeseen <a href="mailto:info@fatburningfemale.fi" style={{ color: '#C9A96E' }}>info@fatburningfemale.fi</a>. Sinulla on myös oikeus tehdä valitus tietosuojavaltuutetulle: <a href="https://tietosuoja.fi" target="_blank" rel="noopener noreferrer" style={{ color: '#C9A96E' }}>tietosuoja.fi</a></p>
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < 7 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400, marginBottom: '14px' }}>{section.title}</h2>
            <div style={{ fontSize: '16px', lineHeight: 1.85, color: '#6B6B62' }}>{section.content}</div>
          </div>
        ))}
      </div>
    </>
  )
}