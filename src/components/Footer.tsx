'use client';
import '../styles/footer.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-col logo-col">
          <h4>Gesso 2000</h4>
          <p>Oferecendo serviços de qualidade e compromisso com os clientes.</p>
        </div>

        <div className="footer-col">
          <h5>Serviços</h5>
          <ul>
            <li><Link href="/servicos#boiserie">Boiserie</Link></li>
            <li><Link href="/servicos#drywall">Divisórias de Drywall</Link></li>
            <li><Link href="/servicos#eletrica">Elétrica - Iluminação</Link></li>
            <li><Link href="/servicos#nicho">Estante e Nicho</Link></li>
            <li><Link href="/servicos#gesso3d">Gesso 3D</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Links</h5>
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/servicos">Serviços</Link></li>
            <li><Link href="/quem-somos">Sobre Nós</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h5>Contato</h5>
          <ul>
            <li><i className="fas fa-phone"></i> (11) 99335-3912</li>
            <li><i className="fas fa-phone"></i> (11) 4991-3230</li>
            <li><i className="fas fa-envelope"></i> gesso2000abc@hotmail.com</li>
            <li className="social-icons">
              <p>Redes Sociais</p>
              <a href="https://facebook.com" target="_blank"><i className="fab fa-facebook-square"></i></a>
              <a href="https://instagram.com" target="_blank"><i className="fab fa-instagram"></i></a>
              <a href="https://wa.me/5511993353912" target="_blank"><i className="fab fa-whatsapp"></i></a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

