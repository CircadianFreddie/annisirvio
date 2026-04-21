'use client'

import { useEffect } from 'react'
import Image from 'next/image'

const START_DATE = '4.5.2026'
const COHORT_LABEL = `Yhteislähtö ${START_DATE}`

const TESTIMONIALS = [
  { text: 'Anni on aivan ihana persoona ja kannustava tukija. Elämäni paras päätös lähteä valmennukseen mukaan. Kaikkea hyvää sinne kauas ja pysytään onnellisina ja terveinä ♥️', name: 'Seija H.' },
  { text: 'Anni on upea persoona, tekee kaiken asialleen omistautuneena ja suurella sydämellä meitä varten ❤️✨', name: 'Sari T.' },
  { text: 'Anni, olet inspiroiva, viisas, mukaansatempaava, rohkea ja täyttä terästä🤩 Kiitos mahtavista valmennuksista❤️ olen ikuisesti Sinulle kiitollinen☺️', name: 'Merja I.' },
  { text: 'Mahtava tsemppari ja loistava valmentaja ❣️', name: 'Sari E.' },
  { text: 'Aina kiinnostunut kaikkien hyvinvoinnista ja loistava tsemppari! Asiantuntija jota mielelläni kuuntelen.', name: 'Teija R.' },
  { text: 'Annin kehittämä valmennus on muuttanut koko elämäni.', name: 'Arja N.' },
  { text: 'Ammattilainen omalla alallaan sekä uusien asioiden kehittäjä ihmisten hyvinvointiin liittyen.', name: 'Pia H.' },
  { text: 'Mahtava tyyppi, osaa asiansa ja paneutuu valmennukseen täysillä ja on niissä itsekin mukana noudattaen ruokavaliota asiakkaiden kanssa. Tuonut mun elämään FBF:n 🤩', name: 'Sisko J.' },
  { text: 'Pursuava energiaa täynnä koko nainen!', name: 'Irmeli L.' },
  { text: 'Inspiroiva, energinen, paljon tietoa. Anni on todella maanläheinen, helposti lähestyttävissä, mikä tekee hänestä erilaisen kuin muut hyvinvointivalmentajat 🙏❤', name: 'Maiju L.' },
  { text: 'Anni on jatkuva inspiraation lähde meille, joita hän on omalla esimerkillään, tiedonhalullaan ja uuden tiedon jakamisella auttanut. On ihanaa, että ihminen näin omistautuu hyvän tekemiselle. Kiiitos, Anni 🌹', name: 'Tytti L.' },
  { text: 'Annin tietämys on luotettavaa. Luotettava tieto on nyky infoähkyssä tosi tärkeää. Näillä sivuilla on turvallinen olo.', name: 'Tarja C.' },
  { text: 'Suosittelen elämänlaadun parantamiseen!', name: 'Helena L.' },
  { text: 'Tietää mistä puhuu ja on täydellä sydämellä mukana. 😃🤩', name: 'Suvi T.' },
  { text: 'Aito asiantuntija Anni 💗 Elämä on saanut uuden merkityksellisen suunnan Annin matkassa selkeän ja laadukkaan ohjauksen äärellä. Toimii!', name: 'Essi T.' },
  { text: 'Anni on asiantunteva ja osaa esittää asiat selkeästi. Hän pitää "laumastaan" hyvää huolta ja luo valoa elämään. Kiitos ❤️', name: 'Tarja H.' },
  { text: 'Se että löysin Annin noin kaksi vuotta sitten, oli elämäni parhaimpia juttuja', name: 'Emilia K.' },
  { text: 'Anni on kyllä alansa huippu, oikea onnenpotku että lähdin häntä seuraamaan!', name: 'Outi H.' },
  { text: 'Erittäin asiantunteva tietopankki, tsemppaa ja kannustaa ja tekee itse valmennuksia mukana! 🥰', name: 'Heli I.' },
  { text: 'On hieno esikuva siihen hyvään oloon minkä jokainen meistä voi tavoittaa ja onnistua. Kannustava ja hienot selkeät ohjeet elämäntapa muutokseen. Kiitos siitä ❤', name: 'Sari T. (2)' },
  { text: 'Ihana, innostava ja positiivinen valmentaja, joka tietää mistä puhuu.', name: 'Tanja B.' },
]

const FAQ_ITEMS = [
  {
    q: 'Onko tämä oikeasti maksuton?',
    a: 'Kyllä — haaste on täysin maksuton. Saat videot, meal planit, pääsyn Facebook-ryhmään ja päivittäiset tehtävät veloituksetta. Jos haluat syventyä rasvalukon purkamiseen kokonaisvaltaisesti haasteen jälkeen, sinulle tarjotaan mahdollisuus osallistua Annin maksuttomaan masterclassiin. Ei pakkoa, ei jälkilaskuja.',
  },
  {
    q: 'Kuinka paljon aikaa tämä vie päivässä?',
    a: 'Noin 15–20 minuuttia päivässä. Jokainen opetusvideo on alle 10 minuuttia, ja päivän tehtävä on pieni ja konkreettinen — ei päiväkirjatehtäviä eikä aikaavieviä suunnitelmia.',
  },
  {
    q: 'Pitääkö minun ostaa erityisruokia tai lisäravinteita?',
    a: 'Ei. Meal planit on suunniteltu normaaleista ruuista, joita löydät jokaisesta päivittäistavarakaupasta. Ei eksoottisia jauheita, ei kalliita lisäravinteita, ei erikoisvalmisteita.',
  },
  {
    q: 'Sopiiko tämä jos olen ollut dieetillä vuosia?',
    a: 'Juuri sinulle tämä on tarkoitettu. Rasvalukko kehittyy usein vuosien jojo-laihduttamisen seurauksena. Haasteessa emme aloita uutta dieettiä — päinvastoin, opit miksi dieetit eivät ole toimineet ja mitä kehosi todella tarvitsee.',
  },
  {
    q: 'Mitä haasteen jälkeen tapahtuu?',
    a: 'Viidennen päivän jälkeen sinulla on selkeä käsitys rasvalukosta ja omista oireistasi. Tarjoamme tällöin mahdollisuuden osallistua Annin maksuttomaan masterclassiin, jossa syvennymme siihen miten rasvalukko puretaan pysyvästi. Mutta valinta on sinun — mikään ei ole pakollista.',
  },
]

function scrollToSignup() {
  const el = document.getElementById('signup')
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

function JoinButton({ label = 'Liity ilmaiseksi mukaan', variant = 'gold' }: { label?: string; variant?: 'gold' | 'dark' }) {
  const styles =
    variant === 'gold'
      ? { background: 'var(--gold)', color: 'var(--dark)' }
      : { background: 'var(--dark)', color: '#fff' }
  return (
    <button
      onClick={scrollToSignup}
      style={{
        ...styles,
        padding: '14px 32px',
        borderRadius: '6px',
        fontSize: '14px',
        fontWeight: 600,
        border: 'none',
        cursor: 'pointer',
        fontFamily: 'inherit',
      }}
    >
      {label}
    </button>
  )
}

export default function HaastePage() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://eomail8.com/form/6f86efbe-3d53-11f1-854d-997824e90abd.js'
    script.async = true
    script.setAttribute('data-form', '6f86efbe-3d53-11f1-854d-997824e90abd')
    const container = document.getElementById('eo-haaste-form')
    if (container && !container.hasChildNodes()) {
      container.appendChild(script)
    }
  }, [])

  return (
    <>
      {/* HERO */}
      <section
        style={{
          minHeight: 'calc(100vh - 64px)',
          background: 'var(--dark)',
          display: 'grid',
          gridTemplateColumns: '1.1fr 1fr',
          alignItems: 'stretch',
          overflow: 'hidden',
        }}
        className="hero-section"
      >
        <div
          style={{
            padding: '80px 48px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            zIndex: 1,
          }}
        >
          <div
            className="hero-eyebrow"
            style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            5 päivän maksuton haaste · {COHORT_LABEL}
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(30px, 3.6vw, 48px)',
              fontWeight: 400,
              lineHeight: 1.15,
              color: '#fff',
              marginBottom: '22px',
              letterSpacing: '-0.02em',
            }}
          >
            Koe kuinka hyvältä kroppa voi tuntua vain <em style={{ color: 'var(--gold-light)' }}>viidessä päivässä</em> kun puremme rasvalukon
          </h1>
          <p
            style={{
              fontSize: '17px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.65)',
              marginBottom: '28px',
              maxWidth: '520px',
            }}
          >
            Viisi päivää, viisi opetusvideota, viisi päivää meal planeja — ja ymmärrys siitä, miksi kehosi toimii juuri niin kuin toimii. Kaikki maksutta.
          </p>
          <div className="hero-ctas" style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'flex-start' }}>
            <JoinButton />
            <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>
              Alkaa yhteislähdöllä {START_DATE}
            </p>
          </div>
        </div>
        <div style={{ position: 'relative', overflow: 'hidden' }} className="hero-img">
          <Image
            src="/images/anni-hero.jpg"
            alt="Anni Sirviö"
            fill
            priority
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, var(--dark) 0%, transparent 25%)' }} />
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '14px',
              }}
            >
              — Mitä haaste sisältää —
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 2.8vw, 38px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Kaikki mitä tarvitset <em>5 päivän matkaan</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '48px' }} className="value-grid">
            {[
              { icon: '📹', title: '5 opetusvideota hyvinvointiin ja ravitsemukseen', desc: 'Yhteensä alle 45 min. Katsot omaan tahtiin.' },
              { icon: '🍴', title: '5 päivän FBF meal plan', desc: 'PDF-muodossa, tukee rasvalukon purkamista.' },
              { icon: '💬', title: 'Pääsy haasteen suljettuun FB-ryhmään', desc: 'Muita haasteessa olevia naisia. Anni vastailee.' },
              { icon: '🎯', title: 'Päivittäisiä inspiroivia tehtäviä', desc: 'Konkreettisia muutosaskeleita arjessa.' },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  padding: '28px 24px',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  background: '#fff',
                }}
              >
                <div style={{ fontSize: '28px', marginBottom: '14px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '15px', fontWeight: 600, lineHeight: 1.35, marginBottom: '10px' }}>{item.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
          <p
            style={{
              textAlign: 'center',
              fontSize: '16px',
              color: 'var(--muted)',
              lineHeight: 1.8,
              maxWidth: '680px',
              margin: '0 auto 40px',
            }}
          >
            Haasteen jälkeen <em>ymmärrät miksi kehosi toimii juuri niin kuin toimii</em>, tunnistat omat rasvalukon oireesi ja tiedät selkeästi mikä on seuraava askel kohti kevyempää oloa.
          </p>
          <div style={{ textAlign: 'center' }}>
            <JoinButton />
          </div>
        </div>
      </section>

      {/* WHO IS THIS FOR */}
      <section style={{ padding: '96px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '18px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
            }}
          >
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Tunnetko tämän?
          </div>
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(22px, 2.4vw, 30px)',
              lineHeight: 1.45,
              fontStyle: 'italic',
              color: 'var(--text)',
              marginBottom: '24px',
              letterSpacing: '-0.01em',
            }}
          >
            ”Olet yrittänyt kaikkea. Kokeillut dieettejä, syönyt vähemmän, treenannut kovemmin. Mutta keho tuntuu jumittavan paikoilleen — väsymys jatkuu, paino ei lähde ja turvotus ei helpotu.”
          </p>
          <p style={{ fontSize: '17px', color: 'var(--muted)', lineHeight: 1.85, marginBottom: '36px' }}>
            Sinusta tuntuu kuin tekisit kaiken oikein, mutta kehosi ei suostu yhteistyöhön. Tämä haaste on sinulle jos olet valmis ymmärtämään miksi — ja löytämään ensimmäiset konkreettiset askeleet ulos jumista.
          </p>
          <JoinButton />
        </div>
      </section>

      {/* ANNI */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div
          style={{
            maxWidth: '1000px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: '56px',
            alignItems: 'center',
          }}
          className="two-col"
        >
          <div style={{ position: 'relative', aspectRatio: '4/5', borderRadius: '8px', overflow: 'hidden' }}>
            <Image
              src="/images/anni-bio.jpg"
              alt="Anni Sirviö"
              fill
              sizes="(max-width: 900px) 100vw, 430px"
              style={{ objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
          <div>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '14px',
              }}
            >
              — Kuka Anni on —
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 2.6vw, 34px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                marginBottom: '22px',
              }}
            >
              Tutustu <em>Annin tarinaan</em>
            </h2>
            <p style={{ fontSize: '16px', color: 'var(--text)', lineHeight: 1.8, marginBottom: '28px' }}>
              Anni Sirviö on auttanut yli 35 000 naista palauttamaan aineenvaihduntansa, tasapainottamaan hormoninsa ja pudottamaan painoa ilman kalorien laskemista tai treenirääkkejä. Hän on valmistunut hyvinvointivalmentajaksi Institute for Integrative Nutrition -koulusta vuonna 2014. Anni on kirjoittanut useita suosittuja ravitsemus- ja hyvinvointikirjoja sekä perustanut Fat Burning Female® -brändin, joka on auttanut tuhansia naisia saavuttamaan pysyviä tuloksia luonnollisesti.
            </p>
            <JoinButton variant="dark" />
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section style={{ padding: '96px 24px', background: 'var(--cream)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '14px',
              }}
            >
              — Asiakaskokemukset —
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 2.8vw, 38px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Yli 35 000 naista, <em>yksi polku</em>
            </h2>
            <p
              style={{
                fontSize: '15px',
                color: 'var(--muted)',
                lineHeight: 1.7,
                marginTop: '16px',
                maxWidth: '520px',
                marginLeft: 'auto',
                marginRight: 'auto',
              }}
            >
              Mitä oikeat asiakkaat kirjoittavat Annista ja FBF-valmennuksista.
            </p>
          </div>
          <div style={{ columnCount: 3, columnGap: '24px' }} className="testimonial-grid">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  breakInside: 'avoid',
                  background: '#fff',
                  border: '1px solid var(--border)',
                  borderRadius: '8px',
                  padding: '22px 24px',
                  marginBottom: '20px',
                  display: 'inline-block',
                  width: '100%',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '28px',
                    color: 'var(--gold)',
                    lineHeight: 1,
                    marginBottom: '8px',
                  }}
                >
                  ”
                </div>
                <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.65, margin: '0 0 14px' }}>{t.text}</p>
                <p style={{ fontSize: '12px', color: '#9A9A90', margin: 0, letterSpacing: '0.02em' }}>— {t.name}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <JoinButton />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <div
              style={{
                fontSize: '11px',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '14px',
              }}
            >
              — Usein kysytyt —
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(26px, 2.8vw, 38px)',
                fontWeight: 400,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                margin: 0,
              }}
            >
              Jäikö jotain <em>epäselväksi?</em>
            </h2>
          </div>
          {FAQ_ITEMS.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '22px 0',
                borderBottom: i < FAQ_ITEMS.length - 1 ? '1px solid var(--border)' : 'none',
              }}
            >
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '10px', color: 'var(--text)' }}>{item.q}</h3>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, margin: 0 }}>{item.a}</p>
            </div>
          ))}
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <JoinButton />
          </div>
        </div>
      </section>

      {/* SIGNUP (EmailOctopus) */}
      <section id="signup" style={{ padding: '96px 24px', background: 'var(--dark)', textAlign: 'center' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div
            style={{
              fontSize: '11px',
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: 'var(--gold)',
              marginBottom: '18px',
            }}
          >
            — Liity mukaan —
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(28px, 3vw, 40px)',
              fontWeight: 400,
              lineHeight: 1.2,
              letterSpacing: '-0.02em',
              color: '#fff',
              marginBottom: '14px',
            }}
          >
            Valmis <em style={{ color: 'var(--gold-light)' }}>aloittamaan?</em>
          </h2>
          <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.5)', marginBottom: '36px', lineHeight: 1.7 }}>
            {COHORT_LABEL} · Kaikki maksutta · Ei sitoumuksia
          </p>
          <div
            style={{
              background: '#fff',
              borderRadius: '8px',
              padding: '28px 24px',
              textAlign: 'left',
            }}
          >
            <div id="eo-haaste-form" style={{ minHeight: '80px' }} />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-section > div:first-child { padding: 56px 24px !important; text-align: center !important; align-items: center !important; }
          .hero-section h1 { max-width: 100% !important; }
          .hero-section .hero-eyebrow { justify-content: center !important; }
          .hero-section .hero-ctas { align-items: center !important; }
          .hero-img { min-height: 320px; }
          .value-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .two-col { grid-template-columns: 1fr !important; gap: 36px !important; text-align: center !important; }
          .testimonial-grid { column-count: 2 !important; column-gap: 16px !important; }
        }
        @media (max-width: 600px) {
          .value-grid { grid-template-columns: 1fr !important; }
          .testimonial-grid { column-count: 1 !important; }
        }
        #eo-haaste-form input[type="text"],
        #eo-haaste-form input[type="email"] {
          background: #FAF8F4 !important;
          border: 1px solid rgba(0,0,0,0.12) !important;
          color: var(--text) !important;
          border-radius: 8px !important;
          padding: 16px 18px !important;
          font-size: 15px !important;
          width: 100% !important;
          margin-bottom: 12px !important;
          font-family: inherit !important;
          transition: border-color 0.2s, background 0.2s !important;
        }
        #eo-haaste-form input[type="text"]:focus,
        #eo-haaste-form input[type="email"]:focus {
          outline: none !important;
          border-color: var(--gold) !important;
          background: #fff !important;
        }
        #eo-haaste-form input::placeholder {
          color: rgba(0,0,0,0.4) !important;
        }
        #eo-haaste-form button {
          background: var(--gold) !important;
          color: var(--dark) !important;
          border: none !important;
          border-radius: 8px !important;
          padding: 18px 24px !important;
          font-weight: 600 !important;
          font-size: 16px !important;
          cursor: pointer !important;
          width: 100% !important;
          font-family: inherit !important;
          margin-top: 4px !important;
          letter-spacing: 0.01em !important;
          transition: background 0.2s !important;
        }
        #eo-haaste-form button:hover {
          background: #b89658 !important;
        }
      `}</style>
    </>
  )
}