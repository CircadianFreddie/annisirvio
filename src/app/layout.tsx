import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const BASE_URL = 'https://annisirvio.fi'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    template: '%s — Anni Sirviö',
  },
  description: 'Palkittu hyvinvointivalmentaja Anni Sirviö auttaa naisia vapautumaan rasvalukosta ilman ääridieettejä. Katso maksuton masterclass hormonaalisesta painonpudotuksesta.',
  keywords: 'rasvalukko, hormonaalinen painonpudotus, insuliiniresistenssi, vaihdevuodet, FBF-metodi, Anni Sirviö, naisten aineenvaihdunta, naisten hyvinvointi',
  authors: [{ name: 'Anni Sirviö', url: BASE_URL }],
  creator: 'Anni Sirviö',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    description: 'Kehosi ei ole rikki. Se suojelee itseään. Katso maksuton masterclass ja ymmärrä vihdoin miksi painonhallinta jumittaa.',
    url: BASE_URL,
    siteName: 'Anni Sirviö',
    locale: 'fi_FI',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anni Sirviö — Naisten hyvinvointivalmentaja',
      },
    ],
  },
  other: {
    'fb:app_id': '1753230098977661',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    description: 'Kehosi ei ole rikki. Se suojelee itseään. Katso maksuton masterclass.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Anni Sirviö',
      description: 'Naisten hormonaalinen hyvinvointi — rasvalukko, aineenvaihdunta ja FBF-metodi',
      inLanguage: 'fi',
    },
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Anni Sirviö',
      url: BASE_URL,
      image: `${BASE_URL}/images/og-image.jpg`,
      sameAs: [
        'https://www.instagram.com/anni_sirvio/',
        'https://annisirvio.substack.com',
      ],
      jobTitle: 'Hyvinvointivalmentaja',
      description: 'Palkittu hyvinvointivalmentaja, ravintokirjailija ja Fat Burning Female -brändin perustaja. Yli 35 000 naista autettu vuodesta 2014.',
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Anni Sirviö / Fat Burning Female',
      url: BASE_URL,
      logo: `${BASE_URL}/images/og-image.jpg`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@fatburningfemale.fi',
        contactType: 'customer service',
        availableLanguage: 'Finnish',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1072978524594391');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1072978524594391&ev=PageView&noscript=1"/>`,
          }}
        />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    template: '%s — Anni Sirviö',
  },
  description: 'Palkittu hyvinvointivalmentaja Anni Sirviö auttaa naisia vapautumaan rasvalukosta ilman ääridieettejä. Katso maksuton masterclass hormonaalisesta painonpudotuksesta.',
  keywords: 'rasvalukko, hormonaalinen painonpudotus, insuliiniresistenssi, vaihdevuodet, FBF-metodi, Anni Sirviö, naisten aineenvaihdunta, naisten hyvinvointi',
  authors: [{ name: 'Anni Sirviö', url: BASE_URL }],
  creator: 'Anni Sirviö',
  alternates: {
    canonical: BASE_URL,
  },
  openGraph: {
    title: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    description: 'Kehosi ei ole rikki. Se suojelee itseään. Katso maksuton masterclass ja ymmärrä vihdoin miksi painonhallinta jumittaa.',
    url: BASE_URL,
    siteName: 'Anni Sirviö',
    locale: 'fi_FI',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Anni Sirviö — Naisten hyvinvointivalmentaja',
      },
    ],
  },
  other: {
    'fb:app_id': '1753230098977661',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    description: 'Kehosi ei ole rikki. Se suojelee itseään. Katso maksuton masterclass.',
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${BASE_URL}/#website`,
      url: BASE_URL,
      name: 'Anni Sirviö',
      description: 'Naisten hormonaalinen hyvinvointi — rasvalukko, aineenvaihdunta ja FBF-metodi',
      inLanguage: 'fi',
    },
    {
      '@type': 'Person',
      '@id': `${BASE_URL}/#person`,
      name: 'Anni Sirviö',
      url: BASE_URL,
      image: `${BASE_URL}/images/og-image.jpg`,
      sameAs: [
        'https://www.instagram.com/anni_sirvio/',
        'https://annisirvio.substack.com',
      ],
      jobTitle: 'Hyvinvointivalmentaja',
      description: 'Palkittu hyvinvointivalmentaja, ravintokirjailija ja Fat Burning Female -brändin perustaja. Yli 35 000 naista autettu vuodesta 2014.',
    },
    {
      '@type': 'Organization',
      '@id': `${BASE_URL}/#organization`,
      name: 'Anni Sirviö / Fat Burning Female',
      url: BASE_URL,
      logo: `${BASE_URL}/images/og-image.jpg`,
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@fatburningfemale.fi',
        contactType: 'customer service',
        availableLanguage: 'Finnish',
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1072978524594391');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1072978524594391&ev=PageView&noscript=1"/>`,
          }}
        />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: '64px' }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}