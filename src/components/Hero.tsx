import { Icon } from './Icon'

const avatars = [
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBjuT4sZQe1c7L-njZWZZmL40Lm4UiWT8X3SDW9Usua2u2JD5ZkbyE35xMvFiXf-c9JiwOupp6SVlXiRmozCjC-ohnGgajaXnxpBK-vqrIwa-D11pyfw6wlfXIv6rRD23NuEOluWNhQMFcOlEPJxfpfczoLFJGfw5PJBVpUKRKZj5Yy_vTBOHWwAL9591hDAPua29CbkONhz9juNLu4oCl7t-wTjMIazT1R1rCXGFcwjySdlBQ5-kM4',
    alt: 'Dueño de negocio local',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBHYYRID1rB2yU3V3_4J1Dp6J3HIVRP9HJHZLLWb45zyBWWWi4G9MYHvlLuwAz5Wu_4jMK6mLcXyhOoOJ_FZSf6_0Rh7eKYCql0V6BcSy0UbNjjEdt5FkcE1M84aA6EQStCjRGuehMcxP0JNKtSaUcQE6GWi4bydEaXx3pXMoJN9IZ4-sOERyAPnP4Gz72-dsesnFFTOMl0qFqhQWiU6ALiZFpy2cT1p3IsiACGzD5-AY_RLvP7p-Co',
    alt: 'Emprendedora',
  },
  {
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEd8HgoKxSBOeOi0kQs8iioShREbYSkjGEHJOBkSK-2LVfdWpRp59SyW6G_b_zK79dM9Vp2faz1WiOTGrmSOAW-fqnETsG40Nz5rYVTONO482l2KI5HprP5Ua0eD8a_2AoD7QgyJ_RgHwOC83FHIH7frWa8QrF0EjHkn_GkiKetOZixUZ5q7FaCS0WjUwD9sps2zMUfSMv7KUMm-KCwgChkPkK18rXF7lDcmoLbvvt4UVEXC-O1iKg',
    alt: 'Proveedor de servicios',
  },
]

const laptopImg =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuBqbRzTBtfiyLMtB-yNBnkZbY38jGeKzq12gWaJomtqI7V9Uvgrf0Lsz0TNMP4QwO-JawQJDcDdMVVOqVW96ZydxDT4-QYfaSBheyjaIb4uBcAOcI-tjGgNX0lYodsXPjmK9L426dGzCqfsbj8tArM14QPvqNI3NpO8ehZulU9QDOrbp2lkl9lxCti4NY4ftuwNOrvHFnusuc_y7ZoAZRKR9ERjSOLBuPysoovE-uYedhjeHmeWes58'

export function Hero() {
  return (
    <section className="relative pt-unit-xl pb-unit-lg px-margin-mobile md:px-gutter overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute top-0 right-0 -z-10 w-[800px] h-[800px] bg-primary-fixed rounded-full blur-3xl opacity-30 transform translate-x-1/3 -translate-y-1/4" />
      <div className="absolute bottom-0 left-0 -z-10 w-[600px] h-[600px] bg-secondary-container rounded-full blur-3xl opacity-40 transform -translate-x-1/4 translate-y-1/4" />

      <div className="max-w-container-max mx-auto grid grid-cols-1 lg:grid-cols-2 gap-unit-xl items-center">
        <div className="flex flex-col gap-unit-md z-10">
          <div className="inline-flex items-center gap-2 bg-surface-container-low border border-surface-container-highest px-4 py-2 rounded-full w-fit">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              Agencia web para negocios locales
            </span>
          </div>

          <h1 className="font-display-lg-mobile md:font-display-lg text-display-lg-mobile md:text-display-lg text-on-background leading-tight">
            Tu negocio merece una página que{' '}
            <span className="gradient-text">venda</span>, no solo que se vea
            bonita.
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl">
            Creamos páginas web profesionales para negocios locales que generan
            clientes desde Google, WhatsApp y redes sociales.
          </p>

          <div className="flex flex-col sm:flex-row gap-unit-sm mt-unit-sm">
            <a
              href="#cotizar"
              className="bg-primary-container text-white px-8 py-4 rounded-xl font-button-text text-button-text hover:shadow-lg hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
            >
              Cotizar mi página
              <Icon name="arrow_forward" className="text-sm" />
            </a>
            <a
              href="#ejemplos"
              className="bg-surface-container-lowest text-on-surface border border-surface-container-highest px-8 py-4 rounded-xl font-button-text text-button-text hover:bg-surface-container-low transition-all flex items-center justify-center gap-2 shadow-sm"
            >
              Ver ejemplos
              <Icon name="visibility" className="text-sm" />
            </a>
          </div>

          <div className="flex items-center gap-4 mt-unit-sm text-sm text-on-surface-variant">
            <div className="flex -space-x-2">
              {avatars.map((avatar) => (
                <img
                  key={avatar.alt}
                  className="w-8 h-8 rounded-full border-2 border-surface-container-lowest object-cover"
                  src={avatar.src}
                  alt={avatar.alt}
                />
              ))}
            </div>
            <p>+50 negocios locales ya confían en nosotros</p>
          </div>
        </div>

        <div className="relative z-10 w-full h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000">
          <div className="relative w-full max-w-md mx-auto group">
            <div className="absolute top-0 left-0 w-full h-64 bg-surface-container-lowest border border-surface-container-highest rounded-xl shadow-2xl overflow-hidden rotate-y-neg-5 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out">
              <div className="h-6 bg-surface-container border-b border-surface-container-highest flex items-center px-3 gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-error-container" />
                <div className="w-2.5 h-2.5 rounded-full bg-secondary-container" />
                <div className="w-2.5 h-2.5 rounded-full bg-tertiary-container" />
              </div>
              <img
                className="w-full h-full object-cover"
                src={laptopImg}
                alt="Diseño de página web moderna en laptop"
              />
            </div>

            <div className="absolute -bottom-20 -right-10 w-48 h-96 bg-surface-container-lowest border-4 border-surface-container-highest rounded-[2rem] shadow-2xl overflow-hidden rotate-y-10 group-hover:rotate-y-0 group-hover:rotate-x-0 transition-transform duration-700 ease-out delay-100 flex flex-col">
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
