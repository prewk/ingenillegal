import type { Metadata } from 'next'
import { Roboto, Roboto_Mono } from 'next/font/google'
import './globals.css'

const roboto = Roboto({
  weight: ['300', '400', '500','700','900'],
  subsets: ['latin-ext']
})

const robotoMono = Roboto_Mono({
  weight: ['400', '500'],
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Ingen människa är illegal',
  description: 'Vi kräver permanent uppehållstillstånd åt alla som vill stanna i Sverige. För en värld utan nationsgränser, en värld där ingen människa är illegal.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <body className={`bg-cream text-carbon font-roboto leading-normal ${roboto.className} ${robotoMono.className}`}>
      {children}
    </body>
    </html>
  )
}
