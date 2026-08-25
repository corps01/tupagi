import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const items = [
  {
    icon: 'palette',
    title: 'Diseño profesional',
    description: 'Personalizado para tu negocio y adaptado a tu marca.',
  },
  {
    icon: 'chat',
    title: 'WhatsApp directo',
    description: 'Botón flotante para que te escriban fácil.',
  },
  {
    icon: 'map',
    title: 'Google Maps integrado',
    description: 'Ubicación visible para que tus clientes lleguen fácilmente.',
  },
  {
    icon: 'photo_library',
    title: 'Galería de fotos',
    description: 'Muestra tu trabajo, instalaciones o productos.',
  },
  {
    icon: 'help',
    title: 'Preguntas frecuentes',
    description: 'Resuelve dudas comunes antes del contacto.',
  },
  {
    icon: 'search',
    title: 'SEO básico',
    description: 'Configuración inicial para buscadores.',
  },
  {
    icon: 'devices',
    title: 'Responsive',
    description: 'Se ve bien en celular, tablet y computadora.',
  },
  {
    icon: 'cloud_done',
    title: 'Hosting y dominio',
    description: 'Configuración incluida para publicar tu página.',
  },
]

export function Includes() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="incluye"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="¿Qué incluye tu página?"
          subtitle="Todo lo esencial para que tu negocio se vea profesional en internet."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-unit-md">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-background p-6 rounded-2xl border border-surface-container-highest shadow-ambient hover:-translate-y-1 transition-transform"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-fixed text-primary-container flex items-center justify-center mb-4">
                <Icon name={item.icon} className="text-2xl" />
              </div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-on-surface-variant">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
