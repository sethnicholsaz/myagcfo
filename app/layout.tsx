import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'MyAgCFO - Fractional CFO Services for Agriculture Operations',
    template: '%s | MyAgCFO'
  },
  description: 'Expert fractional CFO services exclusively for agriculture operations. Dairy, cattle, ranch, and farm financial management to improve cash flow and increase profitability.',
  keywords: ['agriculture CFO', 'fractional CFO', 'farm financial management', 'dairy CFO', 'cattle CFO', 'ranch CFO', 'agricultural consulting'],
  authors: [{ name: 'MyAgCFO' }],
  creator: 'MyAgCFO',
  publisher: 'MyAgCFO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://myagcfo.com',
    title: 'MyAgCFO - Fractional CFO Services for Agriculture Operations',
    description: 'Transform your agricultural operation\'s financial future with expert CFO services. Specialized in dairy, cattle, ranch, and farm financial management.',
    siteName: 'MyAgCFO',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MyAgCFO - Expert Financial Leadership for Agriculture',
    description: 'Navigate agricultural market volatility with confidence. Expert fractional CFO services for progressive farming operations.',
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'GA_MEASUREMENT_ID');
            `,
          }}
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}