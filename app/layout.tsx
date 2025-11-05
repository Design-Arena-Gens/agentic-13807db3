import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Saint Nicholas: The Authentic Story',
  description: 'Rediscover the true Saint Nicholas - defender of the poor and icon of Christ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
