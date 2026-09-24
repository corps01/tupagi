import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import wavefrontPreview from '../assets/client-wavefront.png'
import bajaPreview from '../assets/client-baja.png'
import littleSweetPeasPreview from '../assets/client-littlesweetpeas.jpg'

type Client = {
  name: string
  category: string
  review: string
  url?: string
  preview?: string
  placeholder?: boolean
}

const clients: Client[] = [
  {
    name: 'WaveFront Swim',
    url: 'https://wavefrontswim.com/',
    preview: wavefrontPreview,
    category: 'Escuela de natación',
    review:
      'Necesitaba una página profesional para que los papás me contactaran fácil y pudieran pedir informes de las clases. 2Pagi nos entregó un sitio limpio, claro y listo para recibir consultas.',
  },
  {
    name: 'Baja Coordinator Services',
    url: 'https://www.bajacoordinatorservices.com/',
    preview: bajaPreview,
    category: 'Coordinación médica',
    review:
      'Para nuestra clínica médica necesitábamos transmitir confianza y profesionalismo. La página quedó ordenada, con WhatsApp y llamadas a la acción bien claras.',
  },
  {
    name: 'Little Sweet Peas',
    url: 'https://littlesweetpeas.vercel.app/',
    preview: littleSweetPeasPreview,
    category: 'Estancia infantil',
    review:
      'Queríamos una página sencilla para que los papás nos encontraran fácil, vieran la estancia y nos contactaran por WhatsApp. Quedó limpia, clara y lista para recibir informes.',
  },
]

export function SatisfiedClients() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="clientes"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-background"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="Clientes satisfechos"
          subtitle="Algunos sitios que hemos creado. Puedes visitarlos y ver el resultado."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-unit-lg">
          {clients.map((client) => (
            <article
              key={client.name}
              className="bg-surface-container-lowest rounded-2xl border border-surface-container-highest overflow-hidden shadow-ambient flex flex-col"
            >
              {client.placeholder || !client.url || !client.preview ? (
                <div className="border-b border-surface-container-highest bg-surface-container-low">
                  <div className="h-8 bg-surface-container border-b border-surface-container-highest flex items-center px-3 gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-error-container" />
                    <span className="w-2 h-2 rounded-full bg-secondary-container" />
                    <span className="w-2 h-2 rounded-full bg-tertiary-container" />
                    <span className="ml-2 text-[10px] text-on-surface-variant truncate">
                      próximamente
                    </span>
                  </div>
                  <div className="w-full aspect-[16/10] flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-primary-fixed to-surface-container-high text-on-surface-variant">
                    <Icon name="language" className="text-4xl text-primary-container opacity-60" />
                    <p className="text-sm font-medium">Vista previa próximamente</p>
                  </div>
                </div>
              ) : (
                <a
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-surface-container-highest bg-surface-container-low"
                >
                  <div className="h-8 bg-surface-container border-b border-surface-container-highest flex items-center px-3 gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-error-container" />
                    <span className="w-2 h-2 rounded-full bg-secondary-container" />
                    <span className="w-2 h-2 rounded-full bg-tertiary-container" />
                    <span className="ml-2 text-[10px] text-on-surface-variant truncate">
                      {client.url.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                    </span>
                  </div>
                  <img
                    src={client.preview}
                    alt={`Vista previa de ${client.name}`}
                    className="w-full aspect-[16/10] object-cover object-top"
                  />
                </a>
              )}

              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    {client.category}
                  </p>
                  <h3 className="font-bold text-xl text-on-background">
                    {client.name}
                  </h3>
                </div>

                <blockquote className="text-on-surface-variant text-sm leading-relaxed flex-1">
                  “{client.review}”
                </blockquote>

                {client.placeholder || !client.url ? (
                  <span className="inline-flex items-center gap-2 text-on-surface-variant font-button-text text-button-text w-fit opacity-70">
                    Próximamente
                  </span>
                ) : (
                  <a
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary-container font-button-text text-button-text w-fit"
                  >
                    Ver sitio
                    <Icon name="open_in_new" className="text-sm" />
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
