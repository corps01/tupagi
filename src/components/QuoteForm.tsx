import { useState, type FormEvent } from 'react'
import { Icon } from './Icon'

type QuoteFormProps = {
  id?: string
  compact?: boolean
}

export function QuoteForm({ id = 'cotizar', compact = false }: QuoteFormProps) {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div
        id={id}
        className="rounded-2xl border border-surface-container-highest bg-surface-container-lowest p-8 text-center shadow-ambient"
      >
        <Icon name="check_circle" fill className="text-4xl text-[#22C55E] mb-3" />
        <h3 className="font-bold text-lg mb-2">¡Gracias por tu mensaje!</h3>
        <p className="text-on-surface-variant text-sm">
          Te contactaremos pronto por WhatsApp para agendar tu llamada.
        </p>
      </div>
    )
  }

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      className={`rounded-2xl border border-surface-container-highest bg-surface-container-lowest shadow-ambient ${
        compact ? 'p-6' : 'p-8'
      }`}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-on-surface">Nombre</span>
          <input
            required
            name="nombre"
            type="text"
            placeholder="Tu nombre"
            className="rounded-xl border border-surface-container-highest bg-surface-container-low px-4 py-3 outline-none focus:border-primary-container focus:shadow-glow transition-shadow"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm">
          <span className="font-medium text-on-surface">Negocio</span>
          <input
            required
            name="negocio"
            type="text"
            placeholder="Nombre de tu negocio"
            className="rounded-xl border border-surface-container-highest bg-surface-container-low px-4 py-3 outline-none focus:border-primary-container focus:shadow-glow transition-shadow"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-on-surface">WhatsApp</span>
          <input
            required
            name="whatsapp"
            type="tel"
            placeholder="55 1234 5678"
            className="rounded-xl border border-surface-container-highest bg-surface-container-low px-4 py-3 outline-none focus:border-primary-container focus:shadow-glow transition-shadow"
          />
        </label>
        <label className="flex flex-col gap-1.5 text-sm sm:col-span-2">
          <span className="font-medium text-on-surface">Mensaje</span>
          <textarea
            required
            name="mensaje"
            rows={compact ? 3 : 4}
            placeholder="Cuéntanos qué necesitas..."
            className="rounded-xl border border-surface-container-highest bg-surface-container-low px-4 py-3 outline-none focus:border-primary-container focus:shadow-glow transition-shadow resize-none"
          />
        </label>
      </div>
      <button
        type="submit"
        className="mt-5 w-full bg-primary-container text-white px-6 py-4 rounded-xl font-button-text text-button-text hover:opacity-90 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
      >
        Enviar cotización
        <Icon name="send" className="text-sm" />
      </button>
    </form>
  )
}
