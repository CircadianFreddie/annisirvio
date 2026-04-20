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
  keywords: 'rasvalukko, hormonaalinen painonpudotus, insuliiniresistenssi, vaihdevuodet, FBF-metodi, Anni Sirviö',
  authors: [{ name: 'Anni Sirviö', url: BASE_URL }],
  creator: 'Anni Sirviö',
  alternates: { canonical: BASE_URL },
  openGraph: {
    title: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    description: 'Kehosi ei ole rikki. Se suojelee itseään. Katso maksuton masterclass.',
    url: BASE_URL,
    siteName: 'Anni Sirviö',
    locale: 'fi_FI',
    type: 'website',
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Anni Sirviö' }],
  },
  other: { 'fb:app_id': '1753230098977661' },
  twitter: {
    card: 'summary_large_image',
    title: 'Anni Sirviö — Hormonaalinen painonpudotus & rasvalukko',
    description: 'Kehosi ei ole rikki. Se suojelee itseään. Katso maksuton masterclass.',
    images: ['/images/og-image.jpg'],
  },
  robots: { index: true, follow: true },
}

const FB_PIXEL = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1072978524594391');fbq('track','PageView');`

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fi">
      <head>
        <script dangerouslySetInnerHTML={{ __html: FB_PIXEL }} />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: '64px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}