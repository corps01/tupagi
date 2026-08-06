import { Icon } from './Icon'

const WHATSAPP_URL =
  'https://wa.me/525500000000?text=Hola%20T%C3%BA%20Pagi%2C%20quiero%20cotizar%20mi%20p%C3%A1gina'

export function WhatsAppFab() {
  return (
    <a
      className="fixed bottom-8 right-8 z-[100] flex items-center justify-center bg-[#22C55E] text-white rounded-full w-16 h-16 shadow-xl hover:scale-110 transition-transform"
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <Icon name="chat" fill className="text-3xl" />
    </a>
  )
}
