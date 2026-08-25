import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: 'storefront',
    title: 'Google Business Profile',
    description:
      'Ayuda para configurar tu perfil en búsquedas locales y Maps.',
  },
  {
    icon: 'campaign',
    title: 'Google Ads',
    description: 'Campañas de anuncios si quieres atraer más visitas.',
  },
  {
    icon: 'thumb_up',
    title: 'Facebook e Instagram Ads',
    description: 'Publicidad en redes para generar mensajes y llamadas.',
  },
  {
    icon: 'calendar_month',
    title: 'Sistema de citas',
    description: 'Agenda en línea para que tus clientes reserven contigo.',
  },
]

export function Services() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="servicios"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-background"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="Servicios adicionales"
          subtitle="Opciones extra si quieres complementar tu página. Pregúntanos por WhatsApp."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-unit-md">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-highest shadow-ambient hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-container text-white flex items-center justify-center mb-4">
                <Icon name={service.icon} className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">{service.title}</h3>
              <p className="text-sm text-on-surface-variant">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
