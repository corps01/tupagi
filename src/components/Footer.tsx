import { Icon } from './Icon'

const columns = [
  {
    title: 'Servicios',
    links: [
      { label: 'Páginas Web', href: '#incluye' },
      { label: 'Google Business', href: '#servicios' },
      { label: 'Google Ads', href: '#servicios' },
      { label: 'IA para negocios', href: '#servicios' },
    ],
  },
  {
    title: 'Empresa',
    links: [
      { label: 'Nosotros', href: '#proceso' },
      { label: 'Portafolio', href: '#ejemplos' },
      { label: 'Contacto', href: '#contacto' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      { label: 'WhatsApp', href: 'https://wa.me/525500000000' },
      { label: 'Email', href: 'mailto:hola@tupagi.com' },
      { label: 'Instagram', href: '#' },
      { label: 'Facebook', href: '#' },
    ],
  },
]

export function Footer() {
  return (
    <footer className="bg-surface-container-lowest w-full py-unit-xl border-t border-surface-container-highest">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <Icon name="language" className="text-primary text-3xl" />
            <span className="text-headline-md font-headline-md font-bold text-primary">
              Tú Pagi
            </span>
          </div>
          <p className="text-sm text-on-surface-variant max-w-xs">
            Páginas web profesionales para negocios locales en México.
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
                {...(link.href.startsWith('http')
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
          © 2026 Tú Pagi. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
