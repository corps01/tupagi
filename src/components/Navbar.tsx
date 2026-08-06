import { Icon } from './Icon'

export function Navbar() {
  return (
    <nav
      className="bg-surface/80 backdrop-blur-md fixed top-0 left-0 w-full border-b border-surface-container-highest shadow-sm z-50 transition-all duration-300"
      id="main-nav"
    >
      <div className="flex justify-between items-center max-w-container-max mx-auto px-margin-mobile md:px-gutter h-20">
        <a href="#" className="flex items-center gap-2 group">
          <Icon
            name="language"
            className="text-primary text-3xl group-hover:scale-110 transition-transform"
          />
          <span className="text-headline-md font-headline-md font-bold text-primary tracking-tight">
            Tú Pagi
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#servicios"
          >
            Servicios
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#paquetes"
          >
            Paquetes
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#ejemplos"
          >
            Ejemplos
          </a>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 font-button-text text-button-text"
            href="#contacto"
          >
            Contacto
          </a>
        </div>

        <a
          href="#cotizar"
          className="bg-primary-container text-white px-6 py-3 rounded-xl font-button-text text-button-text hover:opacity-90 hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-ambient shadow-primary-container/20"
        >
          Cotizar
        </a>
      </div>
    </nav>
  )
}
