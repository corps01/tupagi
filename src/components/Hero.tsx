import { Icon } from './Icon'
import { WHATSAPP_URL } from '../lib/contact'
import heroImg from '../assets/hero.png'

export function Hero() {
  return (
    <section className="relative pt-unit-xl pb-unit-lg px-margin-mobile md:px-gutter overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary-fixed rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-secondary-container rounded-full blur-3xl opacity-40 transform -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-unit-xl items-center">
        <div className="flex flex-col gap-unit-md z-10">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-surface-container-highest px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary" />
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              Páginas web para negocios locales
            </span>
          </div>

          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background leading-tight">
            Una página web clara y profesional para tu negocio.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Diseño, WhatsApp, Google Maps y publicación incluida.
            <span className="block mt-2 font-semibold text-on-background">
              $2,499 MXN
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-unit-sm mt-unit-sm">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-container text-white px-8 py-4 rounded-xl font-button-text text-button-text hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Hablar por WhatsApp
              <Icon name="chat" fill className="text-sm" />
            </a>
            <a
              href="#incluye"
              className="bg-surface-container-lowest text-on-surface border border-surface-container-highest px-8 py-4 rounded-xl font-button-text text-button-text hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Ver qué incluye
            </a>
          </div>
        </div>

        <div className="relative z-10 w-full h-[420px] sm:h-[500px] lg:h-[560px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-md mx-auto group">
            <div className="absolute top-0 left-0 w-full h-64 bg-surface-container-lowest border border-surface-container-highest rounded-xl shadow-2xl overflow-hidden rotate-y-neg-5 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out">
              <div className="h-6 bg-surface-container border-b border-surface-container-highest flex items-center px-3 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-error-container" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
              </div>
              <img
                className="w-full h-[calc(100%-1.5rem)] object-cover object-center"
                src={heroImg}
                alt="Persona trabajando en una laptop"
              />
            </div>

            <div className="absolute -bottom-16 -right-4 sm:-bottom-20 sm:-right-10 w-44 sm:w-48 h-80 sm:h-96 bg-surface-container-lowest border-4 border-surface-container-highest rounded-[2rem] shadow-2xl overflow-hidden rotate-y-10 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out delay-100 flex flex-col">
              <div className="bg-[#128C7E] text-white p-4 flex items-center gap-3">
                <Icon name="arrow_back" fill />
                <div className="flex-1">
                  <h3 className="font-bold text-sm">Mi Negocio</h3>
                  <p className="text-[10px] opacity-80">en línea</p>
                </div>
              </div>
              <div className="flex-1 bg-[#E5DDD5] p-3 flex flex-col gap-2 overflow-hidden relative">
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9IiMwMDAiLz48L3N2Zz4=')",
                  }}
                />
                <div className="bg-white p-2 rounded-lg rounded-tl-none self-start max-w-[80%] text-xs shadow-sm mt-2 relative z-10">
                  Hola, me interesa agendar una cita.
                </div>
                <div className="bg-[#DCF8C6] p-2 rounded-lg rounded-tr-none self-end max-w-[80%] text-xs shadow-sm mt-2 relative z-10">
                  ¡Claro! ¿Qué día te gustaría?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
