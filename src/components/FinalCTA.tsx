import { Icon } from './Icon'
import { useReveal } from '../hooks/useReveal'
import { WHATSAPP_DISPLAY, WHATSAPP_URL } from '../lib/contact'

export function FinalCTA() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="contacto"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-primary-container"
    >
      <div className="max-w-2xl mx-auto text-center text-white">
        <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 leading-tight">
          ¿Listo para empezar?
        </h2>
        <p className="font-body-lg text-body-lg text-white/85 mb-8">
          Escríbenos por WhatsApp y te ayudamos con tu página.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-[#22C55E] text-white px-8 py-4 rounded-xl font-button-text text-button-text hover:opacity-90 hover:-translate-y-1 transition-all"
        >
          <Icon name="chat" fill />
          WhatsApp {WHATSAPP_DISPLAY}
        </a>
      </div>
    </section>
  )
}
