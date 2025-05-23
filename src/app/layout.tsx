import React from 'react'
import Header from '../components/Header'
import '../styles/globals.css'

export const metadata = {
  title: 'Gesso 2000',
  description: 'Site oficial Gesso 2000',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        {/* Aqui você pode colocar o <Footer /> se tiver */}
      </body>
    </html>
  )
}
