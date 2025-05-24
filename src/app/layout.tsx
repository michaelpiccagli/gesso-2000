import '../styles/reset.css'
import '../styles/globals.css'    
import '../styles/variables.css'  
import '../lib/fontawesome.ts'
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from '../components/Header'
import About from './about-us/page';
import Footer from '../components/Footer'
import TopButton from '../components/TopButton';

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
        <TopButton />
        <About />
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout;
