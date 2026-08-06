import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const packages = [
  {
    name: 'Inicial',
    price: '$2,499',
    description: 'Ideal para comenzar con una presencia profesional.',
    features: [
      'Página profesional',
      'WhatsApp',
      'Google Maps',
      'Galería',
      'SEO básico',
      'Hosting y dominio',
    ],
    monthly: '+ $299 MXN/mes',
    monthlyNote:
      'Soporte, hosting, dominio y cambios menores incluidos.',
    cta: 'Elegir Inicial',
    featured: false,
  },
  {
    name: 'Profesional',
    price: '$4,999',
    description: 'Para negocios que quieren generar más citas y contactos.',
    features: [
      'Todo el plan Inicial',
      'Google Business optimizado',
      'Agenda de citas',
      'Automatizaciones básicas',
      'Analytics y conversiones',
      'Soporte prioritario',
    ],
    monthly: '+ $699 MXN/mes',
    monthlyNote:
      'Mantenimiento, optimización y mejoras continuas para seguir creciendo.',
    cta: 'Elegir Profesional',
    featured: true,
  },
  {
    name: 'Premium',
    price: '$9,999',
    description:
      'La opción para escalar con publicidad y automatización avanzada.',
    features: [
      'Todo el plan Profesional',
      'Google Ads',
      'Facebook / Instagram Ads',
      'Agente IA para WhatsApp',
      'Embudo de ventas',
      'Reportes mensuales',
    ],
    monthly: '+ $1,999 MXN/mes',
    monthlyNote:
      'Gestión integral para atraer clientes y automatizar el seguimiento comercial.',
    cta: 'Elegir Premium',
    featured: false,
  },
]

export function Packages() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="paquetes"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="Paquetes"
          subtitle="Elige el plan ideal para tu negocio. Todos incluyen diseño profesional y publicación."
        />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-unit-md items-stretch">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative flex flex-col p-8 rounded-2xl border shadow-ambient transition-transform hover:-translate-y-1 ${
                pkg.featured
                  ? 'bg-primary-container text-white border-primary-container scale-[1.02] lg:-my-2'
                  : 'bg-background border-surface-container-highest'
              }`}
            >
              {pkg.featured ? (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#22C55E] text-white text-xs font-bold px-3 py-1 rounded-full">
                  Más vendido
                </span>
              ) : null}

              <h3
                className={`font-bold text-xl mb-2 ${
                  pkg.featured ? 'text-white' : 'text-on-background'
                }`}
              >
                {pkg.name}
              </h3>
              <div className="mb-2">
                <span className="text-4xl font-bold tracking-tight">
                  {pkg.price}
                </span>
                <span
                  className={`ml-1 text-sm ${
                    pkg.featured ? 'text-white/80' : 'text-on-surface-variant'
                  }`}
                >
                  MXN
                </span>
              </div>
              <p
                className={`text-sm mb-6 ${
                  pkg.featured ? 'text-white/80' : 'text-on-surface-variant'
                }`}
              >
                {pkg.description}
              </p>

              <ul className="flex flex-col gap-3 mb-6 flex-1">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm">
                    <Icon
                      name="check_circle"
                      fill
                      className={`text-lg shrink-0 ${
                        pkg.featured ? 'text-[#86EFAC]' : 'text-primary-container'
                      }`}
                    />
                    {feature}
                  </li>
                ))}
              </ul>

              <div
                className={`mb-6 p-4 rounded-xl text-sm ${
                  pkg.featured
                    ? 'bg-white/10'
                    : 'bg-surface-container-low border border-surface-container-highest'
                }`}
              >
                <p className="font-semibold mb-1">{pkg.monthly}</p>
                <p
                  className={
                    pkg.featured ? 'text-white/75' : 'text-on-surface-variant'
                  }
                >
                  {pkg.monthlyNote}
                </p>
              </div>

              <a
                href="#cotizar"
                className={`text-center px-6 py-3.5 rounded-xl font-button-text text-button-text transition-all hover:-translate-y-0.5 ${
                  pkg.featured
                    ? 'bg-white text-primary-container hover:bg-primary-fixed'
                    : 'bg-primary-container text-white hover:opacity-90'
                }`}
              >
                {pkg.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
