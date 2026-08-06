import { SectionHeading } from './SectionHeading'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    quote:
      'En dos semanas ya estábamos recibiendo citas desde Google.',
    name: 'Ana R.',
    business: 'Clínica dental',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBHYYRID1rB2yU3V3_4J1Dp6J3HIVRP9HJHZLLWb45zyBWWWi4G9MYHvlLuwAz5Wu_4jMK6mLcXyhOoOJ_FZSf6_0Rh7eKYCql0V6BcSy0UbNjjEdt5FkcE1M84aA6EQStCjRGuehMcxP0JNKtSaUcQE6GWi4bydEaXx3pXMoJN9IZ4-sOERyAPnP4Gz72-dsesnFFTOMl0qFqhQWiU6ALiZFpy2cT1p3IsiACGzD5-AY_RLvP7p-Co',
  },
  {
    quote:
      'La página se ve profesional y el botón de WhatsApp nos cambió el negocio.',
    name: 'Carlos M.',
    business: 'Barbería local',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBjuT4sZQe1c7L-njZWZZmL40Lm4UiWT8X3SDW9Usua2u2JD5ZkbyE35xMvFiXf-c9JiwOupp6SVlXiRmozCjC-ohnGgajaXnxpBK-vqrIwa-D11pyfw6wlfXIv6rRD23NuEOluWNhQMFcOlEPJxfpfczoLFJGfw5PJBVpUKRKZj5Yy_vTBOHWwAL9591hDAPua29CbkONhz9juNLu4oCl7t-wTjMIazT1R1rCXGFcwjySdlBQ5-kM4',
  },
  {
    quote:
      'Claros, rápidos y enfocados en resultados. Recomendadísimos.',
    name: 'Luis P.',
    business: 'Gimnasio',
    avatar:
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCEd8HgoKxSBOeOi0kQs8iioShREbYSkjGEHJOBkSK-2LVfdWpRp59SyW6G_b_zK79dM9Vp2faz1WiOTGrmSOAW-fqnETsG40Nz5rYVTONO482l2KI5HprP5Ua0eD8a_2AoD7QgyJ_RgHwOC83FHIH7frWa8QrF0EjHkn_GkiKetOZixUZ5q7FaCS0WjUwD9sps2zMUfSMv7KUMm-KCwgChkPkK18rXF7lDcmoLbvvt4UVEXC-O1iKg',
  },
]

export function Testimonials() {
  const ref = useReveal<HTMLElement>()

  return (
    <section
      id="testimonios"
      ref={ref}
      className="reveal py-unit-xl px-margin-mobile md:px-gutter bg-surface-container-lowest"
    >
      <div className="max-w-container-max mx-auto">
        <SectionHeading
          title="Lo que dicen nuestros clientes"
          subtitle="Negocios locales que ya reciben más mensajes, citas y llamadas."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-unit-md">
          {testimonials.map((t) => (
            <blockquote
              key={t.name}
              className="bg-background p-8 rounded-2xl border border-surface-container-highest shadow-ambient"
            >
              <p className="text-on-surface mb-6 text-lg leading-relaxed">
                “{t.quote}”
              </p>
              <footer className="flex items-center gap-3">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-surface-container-lowest"
                />
                <div>
                  <cite className="not-italic font-semibold text-on-background">
                    {t.name}
                  </cite>
                  <p className="text-sm text-on-surface-variant">{t.business}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
