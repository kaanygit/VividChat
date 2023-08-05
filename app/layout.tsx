"use client"
import type { Metadata } from 'next'
import { Rubik } from 'next/font/google'
import './globals.css'
import { NavbarRoute } from '@/components/export'
import AuthProvider from '@/components/auth-provider/AuthProvider'
import { Provider } from "react-redux";
import { store } from '@/redux/store'

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
  <Provider store={store}>
    <AuthProvider>
        <html lang="en">
          <body className={rubikFont.className}>
            <NavbarRoute/>
            {children}
          </body>
        </html>
      </AuthProvider>
    </Provider>
  )

}


