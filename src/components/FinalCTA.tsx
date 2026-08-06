import { Icon } from './Icon'
import { QuoteForm } from './QuoteForm'
import { useReveal } from '../hooks/useReveal'

const WHATSAPP_URL = 'https://wa.me/525500000000?text=Hola%20T%C3%BA%20Pagi%2C%20quiero%20cotizar%20mi%20p%C3%A1gina'

export function FinalCTA() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="contacto"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-primary-container"
    >
      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-unit-xl items-start">
        <div className="text-white">
          <h2 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg mb-4 leading-tight">
            ¿Listo para tener una página que sí genere clientes?
          </h2>
          <p className="font-body-lg text-body-lg text-white/85 max-w-xl mb-8">
            Agenda una llamada gratuita de 30 minutos y te diremos exactamente
            qué necesita tu negocio para vender más en internet.
          </p>
          <div className="flex flex-col sm:flex-row gap-unit-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#22C55E] text-white px-8 py-4 rounded-xl font-button-text text-button-text hover:opacity-90 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="chat" fill />
              Hablar por WhatsApp
            </a>
            <a
              href="#cotizar"
              className="bg-white text-primary-container px-8 py-4 rounded-xl font-button-text text-button-text hover:bg-primary-fixed hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              <Icon name="event" />
              Agendar llamada
            </a>
          </div>
        </div>

        <QuoteForm />
      </div>
    </section>
  )
}
