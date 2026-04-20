import Image from 'next/image'
import Link from 'next/link'
import CookieBanner from '@/components/CookieBanner'

const MASTERCLASS_URL = 'https://eroonrasvalukosta.fi/webinar/registration/686548809805f75fd6177d2a'

export default function Home() {
  return (
    <>
     {/* HERO */}
      <section style={{
        minHeight: 'calc(100vh - 64px)',
        background: 'var(--dark)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'stretch',
        overflow: 'hidden',
        position: 'relative',
      }} className="hero-section">
        <div style={{
          padding: '80px 48px 80px 48px',
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
          position: 'relative', zIndex: 1,
          maxWidth: '600px',
        }}>
          {/* Eyebrow — kohderyhmä heti näkyviin */}
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: '8px',
            fontSize: '12px', letterSpacing: '0.12em', textTransform: 'uppercase',
            color: 'var(--gold)', marginBottom: '24px',
          }}>
            <span style={{ width: '24px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Naisille joiden paino jumittaa — vaikka yrittävät kaikkensa
          </div>

          {/* H1 — tunne + hyöty yhdessä */}
          <h1 style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(32px, 3.8vw, 52px)',
            fontWeight: 400, lineHeight: 1.12,
            color: '#fff', marginBottom: '20px',
            letterSpacing: '-0.02em',
          }}>
            Kehosi ei ole rikki.<br />
            Se suojelee itseään —<br />
            <em style={{ color: 'var(--gold-light)' }}>ja voit muuttaa sen.</em>
          </h1>

          {/* Konkreettinen hyöty — arjen kieli */}
          <p style={{
            fontSize: '17px', lineHeight: 1.75,
            color: 'rgba(255,255,255,0.65)',
            marginBottom: '12px', maxWidth: '480px',
          }}>
            Rasvalukko, hormonit ja insuliiniresistenssi selittävät, miksi dieetit eivät pure — vaikka teet kaiken "oikein". Masterclassissa ymmärrät vihdoin miksi, ja saat ensimmäisen biologisesti perustellun askeleen.
          </p>

          {/* Pieni luottamusrivi CTA:n yläpuolella */}
          <p style={{
            fontSize: '13px', color: 'rgba(255,255,255,0.4)',
            marginBottom: '28px',
          }}>
            Maksuton · 35 000+ naista autettu · Ei uutta kuuripakettia
          </p>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <a href={MASTERCLASS_URL} target="_blank" rel="noopener noreferrer" style={{
              background: 'var(--gold)', color: 'var(--dark)',
              padding: '14px 28px', borderRadius: '6px',
              fontSize: '14px', fontWeight: 600, display: 'inline-block',
            }}>
              Katso maksuton masterclass
            </a>
            <a href="#why" style={{
              color: 'rgba(255,255,255,0.5)', fontSize: '14px',
              display: 'inline-flex', alignItems: 'center', gap: '6px',
            }}>
              Ymmärrä, miksi keho jumittaa →
            </a>
          </div>
        </div>

        {/* Hero image */}
        <div style={{ position: 'relative', overflow: 'hidden' }} className="hero-img">
          <Image
            src="/images/anni-hero.jpg"
            alt="Anni Sirviö — naisten hyvinvointivalmentaja"
            fill
            style={{ objectFit: 'cover', objectPosition: 'top center' }}
            priority
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to right, var(--dark) 0%, transparent 25%)',
          }} />
        </div>
      </section>

      {/* TRUST BAR */}
      <div style={{
        background: 'var(--cream)',
        borderBottom: '1px solid var(--border)',
        padding: '18px 24px',
      }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'flex', alignItems: 'center',
          justifyContent: 'center', gap: '40px', flexWrap: 'wrap',
        }}>
          {[
            { num: '35 000+', label: 'naista autettu vuodesta 2014' },
            { num: '1 300+', label: 'tilaajaa Substackissa' },
            { num: '10+', label: 'vuotta naisten hormonaalisen terveyden parissa' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--muted)' }}>
              <strong style={{ color: 'var(--text)', fontWeight: 600 }}>{item.num}</strong> {item.label}
            </div>
          ))}
        </div>
      </div>

      {/* WHY */}
      <section id="why" style={{ padding: '96px 24px', background: '#fff' }}>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: '1fr 1fr',
          gap: '64px', alignItems: 'center',
        }} className="two-col">
          <div>
            <div style={{
              fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--gold)', marginBottom: '14px',
              display: 'flex', alignItems: 'center', gap: '10px',
            }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              Miksi tämä toimii
            </div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(26px, 2.8vw, 40px)',
              fontWeight: 400, lineHeight: 1.2,
              letterSpacing: '-0.02em', marginBottom: '18px',
            }}>
              Keho ei vastaa kurinalaisuuteen, jos se kokee olonsa <em>uhatuksi.</em>
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '36px' }}>
              Moni nainen tekee kaiken oikein — ja silti jää paikalleen. Syy ei ole itsekurin puute.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { num: '01', title: 'Paino jumittaa, vaikka teet kaiken oikein', desc: 'Syöt vähemmän, liikut enemmän — silti vaaka pysyy paikallaan. Keho ei koe olosuhteita turvallisiksi rasvan vapauttamiselle.' },
                { num: '02', title: 'Hormonaalinen painonpudotus ei noudata vanhoja sääntöjä', desc: 'Kun verensokeri, stressi, uni ja hormonitoiminta kuormittuvat yhtä aikaa, perinteiset laihdutusohjeet voivat pahentaa tilannetta.' },
                { num: '03', title: 'Et tarvitse lisää syyllistämistä', desc: 'En etsi sinusta lisää itsekuria. Etsin syyn, joka pitää rasvalukon päällä ja aineenvaihdunnan varovaisena.' },
              ].map(pt => (
                <div key={pt.num} style={{ display: 'flex', gap: '14px' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '13px', color: 'var(--gold)', minWidth: '20px', paddingTop: '2px' }}>{pt.num}</span>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '5px' }}>{pt.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--muted)', lineHeight: 1.7 }}>{pt.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div style={{ borderRadius: '4px', overflow: 'hidden' }}>
            <Image
              src="/images/anni-why.jpg"
              alt="Anni Sirviö"
              width={540}
              height={560}
              style={{ width: '100%', height: '560px', objectFit: 'cover', objectPosition: 'top' }}
            />
          </div>
        </div>
      </section>

      {/* METHOD */}
      <section id="method" style={{ background: 'var(--dark)', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto 56px' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            FBF-metodi
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff', marginBottom: '16px' }}>
            Näin keho palautetaan jälleen <em>rasvaa polttavaan tilaan.</em>
          </h2>
          <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, maxWidth: '520px' }}>
            Kyse ei ole tempusta. Kyse on selkeästä nelivaiheisesta etenemisestä, jossa keho ohjataan pois selviytymistilasta.
          </p>
        </div>
        <div style={{
          maxWidth: '1100px', margin: '0 auto',
          display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px',
        }} className="method-grid">
          {[
            { num: '01', title: 'Herätä', desc: 'Käynnistämme aineenvaihduntaa ja puramme kuormitusta, jossa keho pyytää lisää kahvia ja sokeria mutta ei enää palaudu niistä.' },
            { num: '02', title: 'Sytytä', desc: 'Tuemme hormoneja, verensokeria ja vuorokausirytmiä niin, että keho saa selkeän viestin: energiaa ei tarvitse säästää varastoon.' },
            { num: '03', title: 'Polta', desc: 'Kun sisäinen rasvanpoltto aktivoituu, nälkä rauhoittuu, energia lisääntyy ja keho alkaa hyödyntää varastoitua rasvaa.' },
            { num: '04', title: 'Vakiinnuta', desc: 'Tavoitteena ei ole kuuri, vaan uusi rytmi: arki, jossa keho ei palaa hälytystilaan jokaisen kuormittavan vaiheen myötä.' },
          ].map((step, i) => (
            <div key={step.num} style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
              padding: '36px 28px',
              borderRadius: i === 0 ? '4px 0 0 4px' : i === 3 ? '0 4px 4px 0' : '0',
            }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '44px', color: 'rgba(201,169,110,0.2)', lineHeight: 1, marginBottom: '20px' }}>{step.num}</div>
              <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '10px' }}>Vaihe</div>
              <div style={{ fontSize: '19px', fontWeight: 600, color: '#fff', marginBottom: '10px' }}>{step.title}</div>
              <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.7 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="results" style={{ background: 'var(--cream)', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Tulokset
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '48px' }}>
            Katso mitä tapahtuu, kun keho saa <em>vihdoin oikean suunnan.</em>
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="testi-grid">
            {[
              { initials: 'JI', name: 'Jaana Ikäheimo', result: '−6,2 kg · −32 cm', quote: 'Olo on energinen ja tasapainoinen. Lisäksi painoa on lähtenyt 6,2 kg ja kehosta yhteensä 32 cm.' },
              { initials: 'HR', name: 'Heidi Ranta', result: '−10 kg · −33,5 cm', quote: 'Neljän viikon aikana paino laski 10 kg ja mitoista yhteensä 33,5 cm. En olisi uskonut, että keho voi vastata näin nopeasti.' },
              { initials: 'AE', name: 'Aino Eeronheimo', result: 'Vuosien etsiminen päättyi', quote: 'Olisin toivonut saaneeni tämän tiedon jo aiemmin. Se olisi säästänyt minut vuosien kamppailulta.' },
            ].map(t => (
              <div key={t.name} style={{ background: '#fff', borderRadius: '8px', padding: '28px', border: '1px solid var(--border)' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '36px', color: 'var(--gold)', lineHeight: 1, marginBottom: '12px' }}>"</div>
                <p style={{ fontSize: '15px', lineHeight: 1.75, marginBottom: '22px' }}>{t.quote}</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--gold-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 600, color: 'var(--dark)', flexShrink: 0 }}>{t.initials}</div>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: 600 }}>{t.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--gold)', fontWeight: 500 }}>{t.result}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats */}
          <div style={{ background: '#fff', borderRadius: '8px', border: '1px solid var(--border)', padding: '28px 40px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '40px' }} className="stats-bar">
            {[
              { num: '10+', label: 'Vuotta naisten hyvinvoinnin parissa' },
              { num: '1 300+', label: 'Tilaajaa Substackissa' },
              { num: '35 000+', label: 'Naista autettu vuodesta 2014' },
            ].map(s => (
              <div key={s.num} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '40px', color: 'var(--dark)', lineHeight: 1, marginBottom: '6px' }}>{s.num}</div>
                <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE/AFTER */}
      <section style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px', marginBottom: '48px' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                Ennen &amp; jälkeen
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Oikea viesti keholle näkyy <em>ajan myötä myös ulospäin.</em>
              </h2>
            </div>
            <a href={MASTERCLASS_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '12px 24px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, flexShrink: 0 }}>
              Katso masterclass →
            </a>
          </div>

          {/* Anni oma muutoskuva — koko leveys */}
          <div style={{ marginBottom: '4px', borderRadius: '6px', overflow: 'hidden' }}>
            <Image
              src="/images/anni-why.jpg"
              alt="Anni Sirviö — oma muutos"
              width={1100}
              height={500}
              style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center 20%' }}
            />
          </div>

          {/* Asiakkaiden muutoskuvat — 4 saraketta, portrait-muoto */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3px',
            marginBottom: '3px',
          }} className="ba-grid">
            {[
              { src: '/images/ba-1.jpg', pos: 'center' },
              { src: '/images/ba-2.jpg', pos: 'center' },
              { src: '/images/ba-3.jpg', pos: 'center top' },
              { src: '/images/ba-4.jpg', pos: 'center' },
            ].map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', borderRadius: '4px' }}>
                <Image
                  src={img.src}
                  alt={`Asiakasmuutos ${i + 1}`}
                  width={280}
                  height={420}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: img.pos,
                  }}
                />
              </div>
            ))}
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '3px',
          }} className="ba-grid">
            {[
              { src: '/images/ba-5.jpg', pos: 'center' },
              { src: '/images/ba-6.jpg', pos: 'center' },
              { src: '/images/ba-7.jpg', pos: 'center top' },
              { src: '/images/ba-8.jpg', pos: 'center' },
            ].map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', borderRadius: '4px' }}>
                <Image
                  src={img.src}
                  alt={`Asiakasmuutos ${i + 5}`}
                  width={280}
                  height={420}
                  style={{
                    width: '100%',
                    aspectRatio: '3/4',
                    objectFit: 'cover',
                    objectPosition: img.pos,
                  }}
                />
              </div>
            ))}
          </div>

          {/* CTA box */}
          <div style={{ marginTop: '40px', background: 'var(--dark)', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 2.5vw, 32px)', color: '#fff', fontWeight: 400, marginBottom: '8px' }}>
              Haluatko ymmärtää, miksi kehosi ei päästä rasvasta irti?
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '16px', marginBottom: '20px', maxWidth: '500px', margin: '0 auto 20px' }}>
              Masterclass selittää sen selkeästi — ilman syyllistämistä, ilman uutta kuuripakettia.
            </p>
            <a href={MASTERCLASS_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '13px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>
              Katso maksuton masterclass
            </a>
          </div>
        </div>
      </section>

      {/* ANNI BIO */}
      <section id="anni-bio" style={{ background: 'var(--cream)', padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="two-col">
          <div style={{ position: 'relative' }}>
            <Image src="/images/anni-bio.jpg" alt="Anni Sirviö" width={540} height={580} style={{ width: '100%', height: '580px', objectFit: 'cover', objectPosition: 'top', borderRadius: '4px' }} />
            <div style={{ position: 'absolute', bottom: '28px', left: '28px', background: '#fff', borderRadius: '6px', padding: '14px 18px', boxShadow: '0 4px 20px rgba(0,0,0,0.12)' }}>
              <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '26px' }}>10+</div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', marginTop: '2px', lineHeight: 1.4 }}>vuotta naisten aineenvaihdunnan<br />ja hormonitasapainon parissa</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              Miksi juuri Anni
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '18px' }}>
              En etsi sinusta lisää itsekuria. Etsin <em>syyn, joka pitää kehon jumissa.</em>
            </h2>
            <p style={{ fontSize: '17px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '28px' }}>
              Siksi tapani puhua painosta, hormoneista ja rasvanpoltosta tuntuu monesta naisesta helpottavalta. Tässä ei teeskennellä, että kaikki ratkeaa yhdellä ruokalistalla.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {[
                'Yli kymmenen vuoden kokemus naisten aineenvaihdunnan ja hormonitasapainon parissa',
                'Selkeä ja samaistuttava tapa puhua painosta, vaihdevuosista ja rasvalukosta',
                'Lähestymistapa, jossa kehoa ei pakoteta kuriin vaan ohjataan takaisin rasvaa polttavaan tilaan',
                'Perustaja: Trueons.com — hyvinvointituotteet moderniin elämään',
              ].map((cred, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'var(--muted)', lineHeight: 1.6 }}>
                  <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '6px', display: 'block' }} />
                  {cred}
                </div>
              ))}
            </div>
            <Link href="/anni" style={{ background: 'var(--dark)', color: '#fff', padding: '13px 26px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>
              Tutustu Anniin →
            </Link>
          </div>
        </div>
      </section>

      {/* MASTERCLASS */}
      <section id="masterclass" style={{ background: 'var(--dark)', padding: '96px 24px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '72px', alignItems: 'center' }} className="two-col">
          <div>
            <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
              Maksuton masterclass
            </div>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 38px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', color: '#fff', marginBottom: '16px' }}>
              Selkeä ensimmäinen askel ilman uutta <em>kontrollikierrettä.</em>
            </h2>
            <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.8, marginBottom: '28px' }}>
              Jos et tiedä, mistä aloittaa — aloita tästä.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '36px' }}>
              {[
                'Miksi rasvalukko voi pysyä päällä, vaikka syöt vähän ja liikut paljon',
                'Miten hormonit, verensokeri, uni ja stressi vaikuttavat samaan painonhallinnan lukkoon',
                'Mikä on ensimmäinen biologisesti perusteltu askel jatkuvan uudelleen aloittamisen katkaisemiseksi',
              ].map((pt, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', fontSize: '14px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, marginTop: '7px', display: 'block' }} />
                  {pt}
                </div>
              ))}
            </div>
            <a href={MASTERCLASS_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--gold)', color: 'var(--dark)', padding: '14px 28px', borderRadius: '6px', fontSize: '14px', fontWeight: 600, display: 'inline-block' }}>
              Katso maksuton masterclass
            </a>
          </div>
          <div style={{ borderRadius: '8px', overflow: 'hidden', position: 'relative', aspectRatio: '16/9' }}>
            <Image src="/images/anni-masterclass.jpg" alt="Masterclass" fill style={{ objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.35)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <a href={MASTERCLASS_URL} target="_blank" rel="noopener noreferrer" style={{ width: '68px', height: '68px', borderRadius: '50%', background: 'rgba(255,255,255,0.95)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg viewBox="0 0 24 24" width="22" height="22" fill="#1A1A18"><path d="M8 5v14l11-7z" /></svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* PODCAST */}
      <section style={{ padding: '80px 24px', background: '#fff', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ background: 'var(--cream)', borderRadius: '12px', padding: '48px', border: '1px solid var(--border)', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '40px', alignItems: 'center' }} className="podcast-card">
            <div style={{ width: '120px', height: '120px', borderRadius: '12px', overflow: 'hidden', position: 'relative', flexShrink: 0, boxShadow: '0 8px 32px rgba(0,0,0,0.12)' }}>
              <Image src="/images/podcast-cover.jpg" alt="Valodieetti podcast" fill style={{ objectFit: 'cover' }} />
            </div>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                Podcast
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(22px, 2.5vw, 32px)', fontWeight: 400, marginBottom: '12px' }}>
                Valodieetti — <em>kuuntele matkalla</em>
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.75, marginBottom: '24px', maxWidth: '480px' }}>
                Podcast hyvinvoinnista, valosta, pimeydestä, kylmästä ja ravinnosta. Sopii kuunneltavaksi kävelyllä, autossa tai aamukahvin äärellä.
              </p>
              <a href="https://open.spotify.com/show/20noV1OqWiunftHwVmS4ht" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: '#1DB954', color: '#fff', padding: '10px 20px', borderRadius: '6px', fontSize: '13px', fontWeight: 600 }}>
                <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" /></svg>
                Kuuntele Spotifyssa
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section id="blog" style={{ padding: '96px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px', marginBottom: '44px' }}>
            <div>
              <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
                Blogi
              </div>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 2.8vw, 40px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em' }}>
                Viimeisimmät <em>kirjoitukset</em>
              </h2>
            </div>
            <Link href="/blogi" style={{ fontSize: '14px', color: 'var(--muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              Kaikki kirjoitukset →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '28px' }} className="blog-grid">
            {[
              { img: '/images/blog-1.jpg', cat: 'Hormonaalinen hyvinvointi', title: 'Miksi kontrolli ei aina ratkaise sitä, mikä kehossa oikeasti jumittaa', excerpt: 'Jos keskittyminen menee pelkkään kuriin, saatat vahvistaa juuri sitä stressitilaa, joka pitää rasvalukkoa kiinni.', href: 'https://annisirvio.substack.com' },
              { img: '/images/blog-2.jpg', cat: 'Ravinto ja rytmi', title: 'Kun syöminen on kunnossa paperilla, mutta olo ei silti kevene', excerpt: 'Hyvä ruokavalio ei auta täysipainoisesti, jos verensokeri heittelee ja palautuminen jää vajaaksi.', href: 'https://annisirvio.substack.com' },
              { img: '/images/blog-3.jpg', cat: 'Ajattelun muutos', title: 'Miten rakentaa rauhallisempi suhde omaan kehoon ilman luovuttamista', excerpt: 'Rauhallisempi ote ei tarkoita tavoitteista luopumista. Se tarkoittaa, että lopetat sodan omaa kehoasi vastaan.', href: 'https://annisirvio.substack.com' },
            ].map(post => (
              <a key={post.title} href={post.href} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', flexDirection: 'column', cursor: 'pointer' }}>
                <div style={{ borderRadius: '6px', overflow: 'hidden', marginBottom: '16px', aspectRatio: '16/9', position: 'relative' }}>
                  <Image src={post.img} alt={post.title} fill style={{ objectFit: 'cover' }} />
                </div>
                <div style={{ fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '8px' }}>{post.cat}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, lineHeight: 1.4, marginBottom: '8px' }}>{post.title}</h3>
                <p style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7 }}>{post.excerpt}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: 'var(--cream)', padding: '80px 24px', textAlign: 'center' }}>
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>
          <div style={{ fontSize: '11px', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
            Aloita tästä
            <span style={{ width: '20px', height: '1px', background: 'var(--gold)', display: 'block' }} />
          </div>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 400, lineHeight: 1.2, letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Katso maksuton masterclass ennen kuin aloitat jälleen uuden kuurin.
          </h2>
          <p style={{ fontSize: '16px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '32px' }}>
            Jos haluat ymmärtää, miksi keho ei päästä rasvasta irti, vaikka yrität entistä enemmän — aloita tästä.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href={MASTERCLASS_URL} target="_blank" rel="noopener noreferrer" style={{ background: 'var(--dark)', color: '#fff', padding: '15px 34px', borderRadius: '6px', fontSize: '15px', fontWeight: 600, display: 'inline-block' }}>
              Katso maksuton masterclass
            </a>
            <Link href="/blogi" style={{ display: 'inline-block', padding: '15px 26px', borderRadius: '6px', fontSize: '15px', color: 'var(--muted)', border: '1px solid var(--border)' }}>
              Tutustu blogiin
            </Link>
          </div>
        </div>
      </section>

      <CookieBanner />

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; min-height: auto !important; }
          .hero-img { min-height: 320px; }
          .two-col { grid-template-columns: 1fr !important; gap: 36px !important; }
          .method-grid { grid-template-columns: 1fr 1fr !important; }
          .testi-grid { grid-template-columns: 1fr !important; }
          .stats-bar { grid-template-columns: 1fr !important; }
          .ba-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .blog-grid { grid-template-columns: 1fr !important; }
          .podcast-card { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}