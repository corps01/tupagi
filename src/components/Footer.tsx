import logo from '../assets/logo.png'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../lib/contact'

type FooterLink = {
  label: string
  href: string
  external?: boolean
}

const columns: { title: string; links: FooterLink[] }[] = [
  {
    title: 'Navegación',
    links: [
      { label: 'Qué incluye', href: '#incluye' },
      { label: 'Servicios', href: '#servicios' },
      { label: 'Cómo trabajamos', href: '#proceso' },
      { label: 'Clientes', href: '#clientes' },
      { label: 'Precio', href: '#paquetes' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      {
        label: `WhatsApp ${WHATSAPP_DISPLAY}`,
        href: WHATSAPP_URL,
        external: true,
      },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-unit-xl border-t border-surface-container-highest">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-col gap-4">
          <img
            src={logo}
            alt="2Pagi"
            className="h-12 w-auto object-contain self-start"
          />
          <p className="text-sm text-on-surface-variant max-w-xs">
            Páginas web para negocios locales.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title} className="flex flex-col gap-3">
            <h3 className="font-bold text-on-background">{column.title}</h3>
            {column.links.map((link) => (
              <a
                key={link.label}
                className="text-sm text-on-secondary-container hover:text-primary transition-colors"
                href={link.href}
                {...(link.external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
              >
                {link.label}
              </a>
            ))}
          </div>
        ))}
      </div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter mt-unit-lg pt-unit-md border-t border-surface-container-highest">
        <p className="font-label-caps text-label-caps text-on-secondary-container text-center sm:text-left">
          © 2026 2Pagi
        </p>
      </div>
    </footer>
  )
}
