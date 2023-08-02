import { NavbarRoute } from '@/components/export'
import './globals.css'
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'

const rubikFont = Rubik({ 
  weight:'500',
  subsets:['latin']
})

export const metadata: Metadata = {
  title: 'VividChat',
  description: 'Video Chat Application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={rubikFont.className}>
        <NavbarRoute/>
        {children}
      </body>
    </html>
  )
}
