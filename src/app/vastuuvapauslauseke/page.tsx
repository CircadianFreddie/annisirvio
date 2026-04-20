import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vastuuvapauslauseke — Anni Sirviö',
}

export default function VastuuvapausPage() {
  return (
    <>
      <div style={{ padding: '72px 24px 48px', borderBottom: '1px solid rgba(0,0,0,0.08)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C9A96E', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: '#C9A96E', display: 'block' }} />
            Lainmukaiset tiedot
          </div>
          <h1 style={{ fontFamily: 'Georgia, serif', fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400, lineHeight: 1.15, letterSpacing: '-0.02em', marginBottom: '12px' }}>
            Vastuuvapauslauseke
          </h1>
          <p style={{ fontSize: '15px', color: '#6B6B62', lineHeight: 1.7 }}>
            Tärkeää luettavaa ennen kuin hyödynnät annisirvio.fi-sivuston sisältöä.
          </p>
          <p style={{ fontSize: '12px', color: '#9A9A90', marginTop: '10px' }}>Päivitetty: huhtikuu 2026</p>
        </div>
      </div>

      <div style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 24px 96px' }}>

        {/* Highlight box */}
        <div style={{ background: '#FAF8F4', borderLeft: '3px solid #C9A96E', borderRadius: '0 6px 6px 0', padding: '20px 24px', marginBottom: '48px' }}>
          <p style={{ fontSize: '15px', color: '#1A1A18', lineHeight: 1.7 }}>
            <strong>Tärkeää:</strong> Tämän sivuston sisältö on tarkoitettu ainoastaan yleiseen tiedotus- ja koulutustarkoitukseen. Se ei korvaa lääkärin, ravitsemusterapeutin tai muun terveydenhuollon ammattilaisen antamia neuvoja, diagnooseja tai hoitoa.
          </p>
        </div>

        {[
          {
            title: '1. Ei lääketieteellinen neuvonta',
            content: <><p>Annisirvio.fi-sivustolla julkaistu sisältö — mukaan lukien artikkelit, videot, masterclass-materiaali ja podcastit — on tarkoitettu yleiseksi tiedoksi ja hyvinvoinnin tukemiseksi. Sisältö ei ole lääketieteellistä neuvontaa.</p><p style={{ marginTop: '12px' }}>Ennen kuin teet merkittäviä muutoksia ruokavalioon, liikuntaan tai elämäntapoihisi, konsultoi lääkäriäsi — erityisesti jos sinulla on jokin sairaus, otat lääkkeitä tai olet raskaana.</p></>
          },
          {
            title: '2. Yksilölliset tulokset vaihtelevat',
            content: <p>Sivustolla esitetyt asiakastulokset, ennen ja jälkeen -kuvat sekä menestystarinat kuvaavat yksittäisten henkilöiden kokemuksia. Ne eivät ole tyypillisiä tuloksia eivätkä takaa samankaltaisia tuloksia muille.</p>
          },
          {
            title: '3. Sisällön tarkkuus',
            content: <p>Pyrimme pitämään sisällön ajantasaisena ja paikkansapitävänä. Terveystieto kehittyy jatkuvasti, ja uudet tutkimukset voivat muuttaa suosituksia. Emme voi taata kaiken sisällön täydellisyyttä tai virheettömyyttä.</p>
          },
          {
            title: '4. Ulkoiset linkit',
            content: <p>Sivustomme voi sisältää linkkejä ulkoisille verkkosivustoille. Emme ole vastuussa näiden sivustojen sisällöstä tai tietosuojakäytännöistä.</p>
          },
          {
            title: '5. Vastuunrajoitus',
            content: <p>Anni Sirviö ja annisirvio.fi eivät ole vastuussa mistään suorista tai epäsuorista vahingoista, jotka johtuvat sivuston sisällön käyttämisestä. Käytät sivuston tietoja omalla vastuullasi.</p>
          },
          {
            title: '6. Tekijänoikeudet',
            content: <p>Kaikki annisirvio.fi-sivuston sisältö on Anni Sirviön omaisuutta ja suojattu tekijänoikeuslailla. Sisältöä ei saa kopioida tai käyttää kaupallisesti ilman kirjallista lupaa.</p>
          },
          {
            title: '7. Yhteydenotto',
            content: <p>Jos sinulla on kysyttävää tästä vastuuvapauslausekkeesta: <a href="mailto:info@fatburningfemale.fi" style={{ color: '#C9A96E' }}>info@fatburningfemale.fi</a></p>
          },
        ].map((section, i) => (
          <div key={i} style={{ marginBottom: '40px', paddingBottom: '40px', borderBottom: i < 6 ? '1px solid rgba(0,0,0,0.08)' : 'none' }}>
            <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '22px', fontWeight: 400, marginBottom: '14px' }}>{section.title}</h2>
            <div style={{ fontSize: '16px', lineHeight: 1.85, color: '#6B6B62' }}>{section.content}</div>
          </div>
        ))}
      </div>
    </>
  )
}