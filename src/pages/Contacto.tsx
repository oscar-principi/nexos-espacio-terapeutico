import { useState } from 'react'
import { Phone, Mail, Instagram, Clock, MapPin, LucideIcon, Send, CheckCircle } from 'lucide-react'

interface ContactItem {
  icon: LucideIcon
  color: string
  label: string
  value: string
  href?: string
}

interface MapLocation {
  city: string
  embedUrl: string
  mapsUrl: string
}

interface FormData {
  nombre: string
  edad: string
  motivo: string
}

const CONTACT_ITEMS: ContactItem[] = [
  { icon: Phone, color: '#4DC9B0', label: 'Teléfono / WhatsApp', value: '(011) 15 4057 5607' },
  { icon: Mail, color: '#4A7BC4', label: 'Email', value: 'espacionexos@gmail.com' },
  {
    icon: Instagram,
    color: '#E8525A',
    label: 'Instagram',
    value: '@nexosespacioterapeutico',
    href: 'https://www.instagram.com/nexosespacioterapeutico/',
  },
  { icon: MapPin, color: '#2E9E7A', label: 'Ubicación', value: 'Belén de Escobar: Cesar Diaz 1118, depto 1' },
  { icon: Clock, color: '#F5C842', label: 'Horarios de atención', value: 'Lun–Vie: 8:00 a 20:00 hs y Sábados' },
]

const MAP_LOCATIONS: MapLocation[] = [
  {
    city: 'Belén de Escobar',
    embedUrl: 'https://www.google.com/maps?q=Cesar%20Diaz%201118%2C%20Bel%C3%A9n%20de%20Escobar%2C%20Buenos%20Aires&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cesar%20Diaz%201118%2C%20Bel%C3%A9n%20de%20Escobar%2C%20Buenos%20Aires',
  },
]


export default function Contacto() {
  const [form, setForm] = useState<FormData>({ nombre: '', edad: '', motivo: '' })
  const [errors, setErrors] = useState<Partial<FormData>>({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const validate = (): boolean => {
    const e: Partial<FormData> = {}
    if (!form.nombre.trim()) e.nombre = 'Por favor ingresá tu nombre.'
    if (!form.edad.trim() || isNaN(Number(form.edad)) || Number(form.edad) < 1)
      e.edad = 'Ingresá una edad válida.'
    if (!form.motivo) e.motivo = 'Seleccioná un motivo de consulta.'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = () => {
    if (!validate()) return
    const msg = encodeURIComponent(
      `Hola! Quiero solicitar un turno en Nexos Espacio Terapéutico.\n\n` +
      `Nombre: ${form.nombre}\nEdad: ${form.edad}\nMotivo: ${form.motivo}`
    )
    window.open(`https://wa.me/5491140575607?text=${msg}`, '_blank')
    setSubmitted(true)
  }

  const inputBase = (field: string): React.CSSProperties => ({
    width: '100%',
    border: `1.5px solid ${errors[field as keyof FormData] ? '#E8525A' : focused === field ? '#4DC9B0' : '#dde8ed'}`,
    borderRadius: 12,
    padding: '12px 16px',
    fontFamily: "'Nunito', sans-serif",
    fontSize: 15,
    color: '#5A6B7B',
    outline: 'none',
    backgroundColor: focused === field ? 'rgba(77,201,176,0.03)' : 'white',
    transition: 'all 0.2s ease',
  })

  const labelStyle: React.CSSProperties = {
    display: 'block',
    color: '#7a8f9e',
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: 6,
    fontFamily: "'Nunito', sans-serif",
  }

  const errorStyle: React.CSSProperties = {
    color: '#E8525A',
    fontSize: 12,
    marginTop: 4,
    fontFamily: "'Nunito', sans-serif",
  }

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ─── HEADER ─── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #f0fdf8 0%, #e8f8f4 60%, #f5f9ff 100%)',
          paddingTop: '120px',
        }}
        className="pb-16"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span
            style={{ color: '#4DC9B0', letterSpacing: '0.22em' }}
            className="text-xs uppercase font-semibold"
          >
            ✦ Contacto
          </span>
          <h1 style={{ color: '#5A6B7B' }} className="text-5xl font-light mt-3 mb-4">
            Demos el primer
            <br />
            <span style={{ color: '#4DC9B0', fontWeight: 600 }}>paso juntos</span>
          </h1>
          <p style={{ color: '#7a8f9e' }} className="text-lg max-w-xl mx-auto">
            Escribinos por WhatsApp, completá el formulario, o envianos un email y coordinamos tu consulta.
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-14 items-start">

            {/* ── Información de contacto ── */}
            <div>
              <h2 style={{ color: '#5A6B7B' }} className="text-2xl font-semibold mb-8">
                Información de contacto
              </h2>

              <div className="space-y-6 mb-8">
                {CONTACT_ITEMS.map(({ icon: Icon, color, label, value, href }) => (
                  <div key={`${label}-${value}`} className="flex items-center gap-4">
                    <div
                      style={{ backgroundColor: `${color}15`, color, minWidth: 44, height: 44 }}
                      className="rounded-xl flex items-center justify-center"
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p style={{ color: '#8fa7b5' }} className="text-xs uppercase tracking-wider mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: '#5A6B7B' }} className="font-medium">
                          {value}
                        </a>
                      ) : (
                        <p style={{ color: '#5A6B7B' }} className="font-medium">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/5491140575607?text=Hola%2C%20quisiera%20solicitar%20un%20turno%20en%20Nexos%20Espacio%20Terap%C3%A9utico."
                target="_blank"
                rel="noopener noreferrer"
                style={{ backgroundColor: '#25D366' }}
                className="inline-flex items-center gap-3 text-white font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                </svg>
                Solicitar por WhatsApp
              </a>
            </div>

            {/* ── Formulario ── */}
            <div
              style={{ border: '1.5px solid #e8f0f4', borderRadius: 24 }}
              className="p-8 bg-white shadow-sm"
            >
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-10 gap-4">
                  <CheckCircle size={52} style={{ color: '#4DC9B0' }} />
                  <h3 style={{ color: '#5A6B7B' }} className="text-2xl font-semibold">
                    ¡Gracias, {form.nombre}!
                  </h3>
                  <p style={{ color: '#7a8f9e' }} className="leading-relaxed">
                    Tu consulta fue enviada por WhatsApp. Te vamos a responder a la brevedad para coordinar tu turno.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ nombre: '', edad: '', motivo: '' }) }}
                    style={{ color: '#4DC9B0', border: '1.5px solid #4DC9B0' }}
                    className="mt-2 px-6 py-2 rounded-full text-sm font-semibold hover:bg-[#4DC9B0] hover:text-white transition-all"
                  >
                    Nueva consulta
                  </button>
                </div>
              ) : (
                <>
                  <h2 style={{ color: '#5A6B7B' }} className="text-2xl font-semibold mb-2">
                    Formulario de contacto
                  </h2>
                  <p style={{ color: '#8fa7b5' }} className="text-sm mb-8 leading-relaxed">
                    Completá tus datos y te contactamos.
                  </p>

                  <div className="space-y-5">

                    {/* Nombre */}
                    <div>
                      <label style={labelStyle}>Nombre completo</label>
                      <input
                        type="text"
                        placeholder="Ej: María González"
                        value={form.nombre}
                        onChange={e => setForm({ ...form, nombre: e.target.value })}
                        onFocus={() => setFocused('nombre')}
                        onBlur={() => setFocused(null)}
                        style={inputBase('nombre')}
                      />
                      {errors.nombre && <p style={errorStyle}>{errors.nombre}</p>}
                    </div>

                    {/* Edad */}
                    <div>
                      <label style={labelStyle}>Edad</label>
                      <input
                        type="number"
                        placeholder="Ej: 32"
                        min={1}
                        max={120}
                        value={form.edad}
                        onChange={e => setForm({ ...form, edad: e.target.value })}
                        onFocus={() => setFocused('edad')}
                        onBlur={() => setFocused(null)}
                        style={inputBase('edad')}
                      />
                      {errors.edad && <p style={errorStyle}>{errors.edad}</p>}
                    </div>

                    {/* Motivo */}
                    <div>
                      <label style={labelStyle}>Motivo de consulta</label>
                      <textarea
                        rows={4}
                        placeholder="Contanos brevemente qué te trae a consulta…"
                        value={form.motivo}
                        onChange={e => setForm({ ...form, motivo: e.target.value })}
                        onFocus={() => setFocused('motivo')}
                        onBlur={() => setFocused(null)}
                        style={{ ...inputBase('motivo'), resize: 'none' }}
                      />
                      {errors.motivo && <p style={errorStyle}>{errors.motivo}</p>}
                    </div>

                    {/* Submit */}
                    <button
                      onClick={handleSubmit}
                      style={{ backgroundColor: '#4DC9B0', fontFamily: "'Nunito', sans-serif" }}
                      className="w-full flex items-center justify-center gap-2 text-white font-semibold py-3.5 rounded-full hover:opacity-90 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 mt-2"
                    >
                      <Send size={17} />
                      Enviar consulta
                    </button>

                    <p style={{ color: '#b0c4ce', fontFamily: "'Nunito', sans-serif" }} className="text-xs text-center">
                      Al enviar, se abrirá WhatsApp con tu información cargada.
                    </p>
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* ─── MAPA ─── */}
      <section style={{ backgroundColor: '#f9fbfc' }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 style={{ color: '#5A6B7B' }} className="text-2xl font-semibold text-center mb-8">
            Ubicaciones en Google Maps
          </h2>
          <div className="grid md:grid-cols-1 gap-6">
            {MAP_LOCATIONS.map(({ city, embedUrl, mapsUrl }) => (
              <article
                key={city}
                style={{ border: '1.5px solid #e8f0f4', borderRadius: 16, backgroundColor: 'white' }}
                className="p-4 shadow-sm"
              >
                <h3 style={{ color: '#5A6B7B' }} className="font-semibold mb-3">{city}</h3>
                <div className="overflow-hidden rounded-xl">
                  <iframe
                    title={`Mapa de ${city}`}
                    src={embedUrl}
                    width="100%"
                    height="280"
                    style={{ border: 0 }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#4DC9B0' }}
                  className="inline-block mt-3 text-sm font-semibold hover:opacity-80 transition-opacity"
                >
                  Abrir en Google Maps
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}