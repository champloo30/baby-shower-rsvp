import './globals.css'
import { Great_Vibes, Inter, Playfair_Display } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair-display'
})

const greatVibes = Great_Vibes({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-great-vibes'
})

export const metadata = {
  title: 'KLAD Baby Shower',
  description: 'Baby Shower RSVP for the new baby girl Kensley-Lincoln Alisa Dunn!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${greatVibes.variable} font-playfair`}>{children}</body>
    </html>
  )
}
