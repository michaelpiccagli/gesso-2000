'use client';
import '../styles/footer.css'
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <h4>Gesso 2000</h4>
      <nav>
        <ul>
          <li><Link href="/quem-somos">Home</Link></li>
          <li><Link href="/quem-somos">Quem somos</Link></li>
          <li><Link href="/servicos">Serviços</Link></li>
          <li><Link href="/projetos">Projetos</Link></li>
          <li><Link href="/projetos">Contato</Link></li>
        </ul>
      </nav>
      <div className="social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook-square"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter-square"></i>
        </a>
        <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-pinterest"></i>
        </a>
      </div>
    </footer>
  );
}

