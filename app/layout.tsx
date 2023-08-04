import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { NavbarRoute } from '@/components/export'
import AuthProvider from '@/components/auth-provider/AuthProvider'

const rubikFont = Rubik({ 
  weight:'500',
  subsets:['latin']
})

export const metadata: Metadata = {
  title: 'VividChat',
  description: 'Video Chat Application',
}

export default  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthProvider>
      <html lang="en">
        <body className={rubikFont.className}>
          <NavbarRoute/>
          {children}
        </body>
      </html>
    </AuthProvider>
  )

}


