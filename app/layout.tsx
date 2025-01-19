import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Nav } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Alecstar',
    template: '%s | Official Website',
  },
  description: 'This is my portfolio.',
  openGraph: {
    title: 'Alecstar',
    description: 'Alecstar Official Website',
    url: baseUrl,
    siteName: 'Alecstar',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased max-w-6xl mb-40 flex flex-col md:flex-row mx-4 mt-8 md:mt-20 lg:mx-auto">
        <div className="flex-auto min-w-0 flex flex-col md:ml-64">
          <main className="flex-auto min-w-0 mt-6 md:mt-0 flex flex-col px-2 md:px-0">
            {children}
          </main>
          <footer className="mt-auto">
            <Footer />
          </footer>
        </div>
        <Nav />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
