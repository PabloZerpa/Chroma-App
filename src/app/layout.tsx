import Navegation from '@/components/Navegation'
import './globals.css'
import type { Metadata } from 'next'
import Providers from './Providers'

export const metadata: Metadata = {
  title: 'Chroma',
  description: 'Artwork Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head> 
        <link rel="icon" href="/paintbrush.svg" sizes="any" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.15.4/css/all.css" 
          integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm" 
          crossOrigin="anonymous"
        />
      </head>
      
      <body className='relative bg-zinc-800' suppressHydrationWarning={true} > 
        <Providers>
          <Navegation />
          {children}
        </Providers>
      </body>
    </html>
  )
}
