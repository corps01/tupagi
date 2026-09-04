import logo from '../assets/logo.png'
import { WHATSAPP_URL } from '../lib/contact'

export function Navbar() {
  return (
    <nav
      className="bg-surface/80 backdrop-blur-md fixed top-0 left-0 w-full border-b border-surface-container-highest shadow-sm z-50 transition-all duration-300"
      id="main-nav"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter h-20">
        <a href="#" className="flex items-center group">
          <img
            src={logo}
            alt="2Pagi"
            className="h-10 md:h-12 w-auto object-contain group-hover:opacity-90 transition-opacity"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#incluye"
          >
            Qué incluye
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#clientes"
          >
            Clientes
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#paquetes"
          >
            Precio
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary-container text-white px-6 py-3 rounded-xl font-button-text text-button-text hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-ambient shadow-primary-container/20"
        >
          WhatsApp
        </a>
      </div>
    </nav>
  )
}
