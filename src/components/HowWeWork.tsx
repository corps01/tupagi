import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    n: 1,
    title: 'Nos escribes',
    description: 'Cuéntanos de tu negocio por WhatsApp.',
  },
  {
    n: 2,
    title: 'Diseñamos',
    description: 'Preparamos tu página con tu info y fotos.',
  },
  {
    n: 3,
    title: 'Revisas',
    description: 'Ves el resultado y pedimos los ajustes necesarios.',
  },
  {
    n: 4,
    title: 'Publicamos',
    description: 'La dejamos en línea con tu dominio.',
  },
]

export function HowWeWork() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="proceso"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-background"
    >
      <div className="max-w-container-max mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-unit-lg">
          <h2 className="font-headline-md text-headline-md text-on-background mb-4">
            Cómo trabajamos
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Un proceso sencillo, sin complicaciones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-unit-md relative">
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-surface-container-highest -translate-y-1/2 z-0" />

          {steps.map((step) => (
            <div
              key={step.n}
              className="relative z-10 bg-surface-container-lowest p-6 rounded-2xl border border-surface-container-highest"
            >
              <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center font-bold text-xl mb-4 mx-auto md:mx-0">
                {step.n}
              </div>
              <h3 className="font-bold text-lg mb-2 text-center md:text-left">
                {step.title}
              </h3>
              <p className="text-sm text-on-surface-variant text-center md:text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
