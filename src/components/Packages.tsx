import { Icon } from './Icon'
import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'
import { WHATSAPP_URL } from '../lib/contact'

const features = [
  'Diseño a tu medida',
  'Botón de WhatsApp',
  'Google Maps',
  'Galería de fotos',
  'Se ve bien en celular',
  'Hosting y dominio',
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
          title="Precio"
          subtitle="Un solo plan. Sin paquetes confusos."
        />
        <div className="max-w-lg mx-auto">
          <div className="flex flex-col p-8 rounded-2xl border border-primary-container bg-primary-container text-white shadow-ambient">
            <h3 className="font-bold text-xl mb-2">Página web</h3>
            <div className="mb-2">
              <span className="text-4xl font-bold tracking-tight">$2,499</span>
              <span className="ml-1 text-sm text-white/80">MXN</span>
            </div>
            <p className="text-sm mb-6 text-white/80">
              Página profesional lista para publicar.
            </p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm">
                  <Icon
                    name="check_circle"
                    fill
                    className="text-lg shrink-0 text-[#86EFAC]"
                  />
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center px-6 py-3.5 rounded-xl font-button-text text-button-text bg-white text-primary-container hover:bg-primary-fixed transition-all hover:-translate-y-0.5"
            >
              Quiero mi página
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
