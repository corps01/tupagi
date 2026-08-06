import { Icon } from './Icon'

const items = [
  { icon: 'storefront', label: 'Google Business', color: 'text-[#4285F4]' },
  { icon: 'chat', label: 'WhatsApp', color: 'text-[#25D366]' },
  { icon: 'star', label: 'Google Reviews', color: 'text-[#F4B400]' },
  { icon: 'search', label: 'SEO', color: 'text-primary' },
  { icon: 'cloud', label: 'Hosting incluido', color: 'text-secondary' },
  { icon: 'language', label: 'Dominio incluido', color: 'text-primary-container' },
]

export function TrustBar() {
  return (
    <section className="py-unit-md border-y border-surface-container-highest bg-surface-container-lowest">
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-gutter">
        <p className="text-center font-label-caps text-label-caps text-on-surface-variant mb-6">
          Todo listo para que empieces a recibir clientes desde el primer día.
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          {items.map((item) => (
            <div key={item.label} className="flex items-center gap-2">
              <Icon name={item.icon} fill className={item.color} />
              <span className="font-bold">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
