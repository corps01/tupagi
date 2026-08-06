import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const examples = [
  {
    name: 'Barbería',
    category: 'Belleza',
    color: 'from-[#1f2937] to-[#4b5563]',
    icon: 'content_cut',
  },
  {
    name: 'Dentista',
    category: 'Salud',
    color: 'from-[#0ea5e9] to-[#0369a1]',
    icon: 'dentistry',
  },
  {
    name: 'Restaurante',
    category: 'Comida',
    color: 'from-[#f97316] to-[#c2410c]',
    icon: 'restaurant',
  },
  {
    name: 'Psicólogo',
    category: 'Bienestar',
    color: 'from-[#8b5cf6] to-[#6d28d9]',
    icon: 'psychology',
  },
  {
    name: 'Gimnasio',
    category: 'Fitness',
    color: 'from-[#22c55e] to-[#15803d]',
    icon: 'fitness_center',
  },
]

export function Examples() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="ejemplos"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-background"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="Ejemplos"
          subtitle="Páginas diseñadas para negocios locales que quieren verse profesionales y convertir visitantes en clientes."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-unit-md">
          {examples.map((example) => (
            <article
              key={example.name}
              className="group bg-surface-container-lowest rounded-2xl border border-surface-container-highest overflow-hidden shadow-ambient hover:-translate-y-1 transition-transform"
            >
              <div
                className={`h-48 bg-gradient-to-br ${example.color} flex items-center justify-center relative`}
              >
                <div className="absolute inset-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 flex flex-col p-4">
                  <div className="flex gap-1.5 mb-3">
                    <span className="w-2 h-2 rounded-full bg-white/50" />
                    <span className="w-2 h-2 rounded-full bg-white/50" />
                    <span className="w-2 h-2 rounded-full bg-white/50" />
                  </div>
                  <div className="flex-1 flex items-center justify-center">
                    <Icon
                      name={example.icon}
                      className="text-5xl text-white/90"
                    />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                  {example.category}
                </p>
                <h3 className="font-bold text-xl mb-4">{example.name}</h3>
                <a
                  href="#cotizar"
                  className="inline-flex items-center gap-2 text-primary-container font-button-text text-button-text group-hover:gap-3 transition-all"
                >
                  Ver proyecto
                  <Icon name="arrow_forward" className="text-sm" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
