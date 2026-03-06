import { Phone, Mail, Instagram, Clock, MapPin, LucideIcon } from 'lucide-react'

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
  { icon: MapPin, color: '#2E9E7A', label: 'Ubicación', value: 'Ing. Maschwitz: Cordoba 945, depto 5' },
  { icon: Clock, color: '#F5C842', label: 'Horarios de atención', value: 'Lun–Vie: 8:00 a 20:00 hs y Sábados' },
]

const MAP_LOCATIONS: MapLocation[] = [
  {
    city: 'Belén de Escobar',
    embedUrl: 'https://www.google.com/maps?q=Cesar%20Diaz%201118%2C%20Bel%C3%A9n%20de%20Escobar%2C%20Buenos%20Aires&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cesar%20Diaz%201118%2C%20Bel%C3%A9n%20de%20Escobar%2C%20Buenos%20Aires',
  },
  {
    city: 'Maschwitz',
    embedUrl: 'https://www.google.com/maps?q=Cordoba%20945%2C%20Ingeniero%20Maschwitz%2C%20Buenos%20Aires&output=embed',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Cordoba%20945%2C%20Ingeniero%20Maschwitz%2C%20Buenos%20Aires',
  },
]

export default function Contacto() {

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
            Escribinos por WhatsApp o email y coordinamos tu consulta.
          </p>
        </div>
      </section>

      {/* ─── CONTENT ─── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-2xl mx-auto space-y-6 text-center">
            <h2 style={{ color: '#5A6B7B' }} className="text-2xl font-semibold">
              Información de contacto
            </h2>

            <div className="mx-auto w-fit space-y-6 text-left">
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
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: '#5A6B7B' }}
                        className="font-medium"
                      >
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
              href="https://wa.me/5491140575607?text=Hola%2C%20quisiera%20pedir%20un%20turno"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25D366' }}
              className="inline-flex items-center gap-3 text-white font-semibold px-5 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md mt-4"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Escribir por WhatsApp
            </a>
          </div>
        </div>
      </section>

      <section style={{ backgroundColor: '#f9fbfc' }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <h2 style={{ color: '#5A6B7B' }} className="text-2xl font-semibold text-center mb-8">
            Ubicaciones en Google Maps
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {MAP_LOCATIONS.map(({ city, embedUrl, mapsUrl }) => (
              <article
                key={city}
                style={{ border: '1.5px solid #e8f0f4', borderRadius: 16, backgroundColor: 'white' }}
                className="p-4 shadow-sm"
              >
                <h3 style={{ color: '#5A6B7B' }} className="font-semibold mb-3">
                  {city}
                </h3>
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
