'use client'

import { useState } from 'react'
import '../styles/header.css'  

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <a href="#">
            <h1 className="logo no-select">Gesso 2000</h1>
          </a>
          <nav>
            <div
              className="menu align-items-center"
              onClick={toggleMenu}
              aria-label="Menu hamburguer"
              tabIndex={0}
              role="button"
              onKeyPress={toggleMenu}
            >
              <span className={`hamburguer ${menuOpen ? 'open' : ''}`}></span>
            </div>
            <ul className={menuOpen ? 'open' : ''}>
              <li>
                <a href="#Home" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#Services" onClick={closeMenu}>
                  Serviços
                </a>
              </li>
              <li>
                <a href="#about-us" onClick={closeMenu}>
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contato
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}
