import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const services = [
  {
    icon: 'storefront',
    title: 'Google Business Profile',
    description:
      'Creación y optimización para aparecer en búsquedas locales y Google Maps.',
  },
  {
    icon: 'star',
    title: 'Google Reviews',
    description:
      'Estrategias para conseguir más reseñas y mejorar tu reputación.',
  },
  {
    icon: 'campaign',
    title: 'Google Ads',
    description: 'Campañas para atraer clientes listos para comprar.',
  },
  {
    icon: 'thumb_up',
    title: 'Facebook & Instagram Ads',
    description: 'Publicidad para generar mensajes, llamadas y citas.',
  },
  {
    icon: 'calendar_month',
    title: 'Sistema de citas',
    description:
      'Agenda automática para dentistas, psicólogos, barberías, spas y más.',
  },
  {
    icon: 'shopping_cart',
    title: 'E-commerce',
    description: 'Tienda en línea con pagos y catálogo de productos.',
  },
  {
    icon: 'smart_toy',
    title: 'Automatizaciones con IA',
    description:
      'Respuestas automáticas, seguimiento de clientes y asistentes para WhatsApp.',
  },
  {
    icon: 'qr_code_2',
    title: 'Tarjetas digitales con QR',
    description: 'Comparte tu contacto, ubicación y redes en segundos.',
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
          subtitle="Complementa tu página con herramientas que atraen más clientes y automatizan tu negocio."
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
