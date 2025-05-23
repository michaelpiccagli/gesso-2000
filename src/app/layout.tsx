import '../styles/reset.css'
import '../styles/globals.css'    
import '../styles/variables.css'  
import Header from '../components/Header'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Gesso 2000',
  description: 'Site de Gesso 2000',
}

 function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
