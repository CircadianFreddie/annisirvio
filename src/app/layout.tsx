import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Anni Sirviö — Naisten hormonaalinen hyvinvointi',
  description: 'FBF-metodi: biologisesti perusteltu lähestymistapa naisten painonhallintaan, hormonitasapainoon ja rasvanpolttoon. Katso maksuton masterclass.',
  keywords: 'rasvalukko, hormonaalinen painonpudotus, insuliiniresistenssi, vaihdevuodet, FBF-metodi, Anni Sirviö',
  openGraph: {
    title: 'Anni Sirviö — Naisten hormonaalinen hyvinvointi',
    description: 'Et tarvitse rääkkidieettiä. Tarvitset kehollesi turvan tunteen.',
    url: 'https://annisirvio.fi',
    siteName: 'Anni Sirviö',
    locale: 'fi_FI',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fi">
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