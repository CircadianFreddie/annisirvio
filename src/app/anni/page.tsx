import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Tietoa Annista — Anni Sirviö',
  description: 'Palkittu hyvinvointivalmentaja, ravintokirjailija ja Fat Burning Female -brändin perustaja. Yli 35 000 naista autettu vuodesta 2014.',
}

const MASTERCLASS_URL = 'https://eroonrasvalukosta.fi/webinar/registration/686548809805f75fd6177d2a'

export default function AnniPage() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'var(--dark)',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        alignItems: 'stretch', overflow: 'hidden', minHeight: '70vh',
      }} className="two-col">
        <div style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Tietoa Annista
          </div>
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(32px, 3.5vw, 52px)', fontWeight: 400, lineHeight: 1.12, color: '#fff', marginBottom: '20px', letterSpacing: '-0.02em' }}>
            Palkittu valmentaja,<br />ravintokirjailija<br />ja <em style={{ color: 'var(--gold-light)' }}>ikuinen oppija.</em>
          </h1>
          <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'rgba(255,255,255,0.55)', maxWidth: '460px' }}>
            Pienen suomalaiskaupungin kasvatti, joka on auttanut yli 35 000 naista löytämään takaisin kehoonsa ja elinvoimaansa.
          </p>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '500px' }}>
          <Image src="/images/anni-bio.jpg" alt="Anni Sirviö" fill style={{ objectFit: 'cover', objectPosition: 'top' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--dark) 0%, transparent 25%)' }} />
        </div>
      </section>

      {/* INTRO */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'start' }} className="two-col">
          <div style={{ position: 'relative', width: '100%', height: '520px', borderRadius: '4px', overflow: 'hidden' }}>
            <Image src="/images/tietoa-annista.jpg" alt="Anni Sirviö" fill quality={95} sizes="(max-width: 900px) 100vw, 550px" style={{ objectFit: 'cover', objectPosition: 'top' }} />
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, background: 'linear-gradient(to top, rgba(26,26,24,0.95) 0%, transparent 100%)', padding: '32px 28px 28px', borderRadius: '0 0 4px 4px' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '17px', color: 'var(--gold-light)', lineHeight: 1.5 }}>
                ”Jokainen nainen ansaitsee olla terve ja onnellinen omassa kehossaan.”
              </p>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              Anni käännekohdassa
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '20px' }}>
              Olen elänyt läpi jokaisen dieetin, jokaisen vatsakivun ja jokaisen <em>hormonimyrskyn.</em>
            </h2>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '16px' }}>
              Reilu kymmenen vuotta sitten istuin töissä kampaamossa, ahdistuneena ja turvonneena, yrittäen selvitä päivästä toiseen vatsakipujen, uupumuksen ja painonhallinnan kanssa. Kuvittelin tekeväni ”oikein” — söin kevyesti, treenasin kovaa ja noudatin dieetti-kuureja.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--muted)', marginBottom: '16px' }}>
              Mutta mitä enemmän yritin, sitä pahemmin kehoni oireili. Se oli jatkuvaa selviytymistä.
            </p>
            <p style={{ fontSize: '16px', lineHeight: 1.85, color: 'var(--muted)' }}>
              Se, mikä alkoi epätoivoisena etsintänä paremmasta olosta, johti minut vuosien mittaiselle matkalle — ja lopulta oman unelmatyöni äärelle. Nyt elän elämääni täysin toisin: vapaana, energisenä ja intohimolla rakennetun Fat Burning Female® terveysbrändin vetäjänä.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: 'var(--dark)', padding: '56px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }} className="stats-grid">
          {[
            { num: '35 000+', label: 'Naista autettu rasvanpolttoon ja painonhallintaan' },
            { num: '10+', label: 'Vuotta naisten hyvinvoinnin parissa' },
            { num: '3', label: 'Ravitsemuskirjaa — neljäs työn alla' },
            { num: '2014', label: 'Valmistui IIN-koulusta hyvinvointivalmentajaksi' },
          ].map((s, i) => (
            <div key={i} style={{
              background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)',
              padding: '32px 28px', textAlign: 'center',
              borderRadius: i === 0 ? '4px 0 0 4px' : i === 3 ? '0 4px 4px 0' : '0',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '36px', color: 'var(--gold-light)', lineHeight: 1, marginBottom: '8px' }}>{s.num}</div>
              <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.45)', lineHeight: 1.5 }}>{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ROLES */}
      <section style={{ padding: '96px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              Muutamia titteleitä
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', maxWidth: '560px' }}>
              Joihin Anni <em>vastaa mielellään</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="roles-grid">
            {[
              { tag: 'Valmentaja', title: 'Palkittu hyvinvointivalmentaja', desc: 'Olen valmentanut yli 35 000 naista rasvanpolttoon ja painonhallintaan vuodesta 2014. Institute for Integrative Nutrition -koulutettu.' },
              { tag: 'Kirjailija', title: 'Kolmen ravitsemuskirjan kirjoittaja', desc: 'Olen kirjoittanut kolme ravitsemuskirjaa. Neljäs on tällä hetkellä työn alla. Kirjoittelen terveydestä myös Substackissa joka viikko.' },
              { tag: 'Perustaja', title: 'Fat Burning Female® & Trueons', desc: 'Rakensin FBF-brändin nollasta. Nyt myös Trueons.com — hyvinvointituotteet, jotka yhdistävät luonnolliset biologiset tarpeet moderniin elämään.' },
              { tag: 'Vaimo', title: 'Olympiavalmentajan puoliso', desc: 'Mieheni Fredu Sirviö on olympiavalmentaja — yhtä intohimoinen terveysasioissa kuin minä. Terveys on meille yhteinen elämäntapa, ei vain työ.' },
              { tag: 'Äiti', title: 'Ura alkoi äitiyden myötä', desc: 'Urani hyvinvoinnin parissa alkoi tultuani äidiksi ja tahtomalla tarjota lapsilleni terveen tulevaisuuden. Siitä kasvoi kutsumus.' },
              { tag: 'Luonnon ihminen', title: 'Metsäretkeilijä & auringon puolestapuhuja', desc: 'Rakastan auringonnousua, pitkiä metsäkävelyitä koirani kanssa ja elää luonnollista elämäntyyliä — ilman kalorien kytäämistä.' },
            ].map((r, i) => (
              <div key={i} style={{ background: '#fff', borderRadius: '8px', padding: '28px', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: '10px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '10px' }}>{r.tag}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, lineHeight: 1.3, marginBottom: '10px' }}>{r.title}</h3>
                <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px' }}>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              Aikajana
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
              Miten tähän <em>päädyttiin</em>
            </h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: '40px' }}>
            <div style={{ position: 'absolute', left: 0, top: '8px', bottom: '8px', width: '1px', background: 'var(--gold-light)' }} />
            {[
              { year: '1978', text: 'Anni syntyy Kuusankoskella. Pienen suomalaiskaupungin kasvatti — tausta, joka on muokannut käytännönläheistä tapaa puhua terveydestä.' },
              { year: '1995', text: 'Ensimmäinen dieetti. Alku vuosikymmenen mittaiselle jojo-laihdutuksen kehässä pyörimiselle. Kaikki se kokemus muuttui myöhemmin voimavaraksi.' },
              { year: '2002', text: 'Rampauttavat vatsavaivat ajavat kriisiin. Hyvinvointi romahtaa ja herää päätös: nyt on löydettävä pysyvä ratkaisu painoon ja terveyteen.' },
              { year: '2014', text: 'Valmistuu Institute for Integrative Nutrition -koulusta hyvinvointivalmentajaksi. Tie kohti omaa menetelmää alkaa.' },
              { year: '2019', text: 'Ensimmäinen Fat Burning Female -valmennus julkaistaan. Syntyy uudenlainen lähestymistapa naisten painonpudotukseen.' },
              { year: '2025', text: 'Yli 35 000 suomalaisnaista autettu pudottamaan painoa ja voimaan paremmin omassa kehossaan. Tehokkain menetelmä FBF Body näkee päivänvalon.' },
            ].map((item, i) => (
              <div key={i} style={{ position: 'relative', marginBottom: '44px', paddingBottom: '44px', borderBottom: i < 5 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ position: 'absolute', left: '-47px', top: '4px', width: '14px', height: '14px', borderRadius: '50%', background: 'var(--gold)', border: '3px solid #fff', boxShadow: '0 0 0 1px var(--gold)' }} />
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '28px', color: 'var(--gold)', lineHeight: 1, marginBottom: '10px' }}>{item.year}</div>
                <p style={{ fontSize: '16px', lineHeight: 1.8, color: 'var(--muted)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section style={{ background: 'var(--dark)', padding: '96px 24px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Missio
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
          </div>
          <p style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 'clamp(24px, 3vw, 36px)', color: '#fff', lineHeight: 1.4, marginBottom: '24px', letterSpacing: '-0.01em' }}>
            ”Uskon, että muutos tapahtuu, kun yhdistämme ymmärryksen kehostamme konkreettisiin tekoihin.”
          </p>
          <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.4)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>— Anni Sirviö</p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--cream)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Aloita tästä
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(24px, 2.8vw, 36px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Katso maksuton masterclass ja ymmärrä, miksi kehosi toimii niin kuin toimii.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '32px' }}>
            Anni selittää rasvalukon, hormonit ja aineenvaihdunnan selkeästi — ilman syyllistämistä.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={MASTERCLASS_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--dark)', color: '#fff', padding: '14px 32px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>
              Katso maksuton masterclass
            </a>
            <Link href="/blogi" style={{ display: 'inline-block', padding: '14px 24px', borderRadius: '6px', fontSize: '14px', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              Lue blogi
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .two-col { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr 1fr !important; }
          .roles-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}