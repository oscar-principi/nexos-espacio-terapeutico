import { Award, BookOpen, Heart, Users, LucideIcon } from 'lucide-react'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'

interface TeamMember {
  name: string
  role: string
  color: string
  photo: string
  zoom: number
  focus: string
  shift: string
}

interface Value {
  icon: LucideIcon
  color: string
  label: string
  desc: string
}

interface Stat {
  n: string
  label: string
}

// BASE_URL puede venir con o sin barra final según cómo se pase --base en el build
const BASE = import.meta.env.BASE_URL.endsWith('/')
  ? import.meta.env.BASE_URL
  : `${import.meta.env.BASE_URL}/`

const TEAM: TeamMember[] = [
  {
    name: 'Lic. Natalia Maria',
    role: 'Psicóloga · Socia Fundadora',
    color: '#E8525A',
    photo: `${BASE}profesionales/Natalia.jpeg`,
    zoom: 1.28,
    focus: 'center 40%',
    shift: '0%',
  },
  {
    name: 'Lic. Victoria Perez de San Roman',
    role: 'Psicóloga · Socia Fundadora',
    color: '#4DC9B0',
    photo: `${BASE}profesionales/Victoria.jpeg?v=2`,
    zoom: 1,
    focus: 'center 0%',
    shift: '0%',
  },
  {
    name: 'Lic. Maria Luz Ruiz Campos',
    role: 'Psicóloga · Socia Fundadora',
    color: '#B07CC6',
    photo: `${BASE}profesionales/Luz.jpeg`,
    zoom: 1.2,
    focus: 'center 25%',
    shift: '0%',
  },
]

const VALUES: Value[] = [
  { icon: Heart, color: '#E8525A', label: 'Calidez', desc: 'Cada persona es recibida con empatía y sin juicio.' },
  { icon: Award, color: '#F5C842', label: 'Profesionalismo', desc: 'Formación continua y práctica basada en evidencia.' },
  { icon: BookOpen, color: '#4A7BC4', label: 'Compromiso', desc: 'Acompañamos cada proceso con dedicación y respeto.' },
  { icon: Users, color: '#4DC9B0', label: 'Comunidad', desc: 'Creemos en la red de vínculos como motor de cambio.' },
]

const STATS: Stat[] = [
  { n: '+500', label: 'Pacientes acompañados' },
  { n: '3', label: 'Socias fundadoras' },
  { n: '7+', label: 'Años de experiencia' },
]

export default function QuienesSomos() {
  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ─── HEADER ─── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #f0fdf8 0%, #e8f8f4 60%, #f5f9ff 100%)',
          paddingTop: '120px',
        }}
        className="pb-20"
      >
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span
            style={{ color: '#4DC9B0', letterSpacing: '0.22em' }}
            className="text-xs uppercase font-semibold"
          >
            ✦ Quiénes somos
          </span>
          <h1 style={{ color: '#5A6B7B' }} className="text-5xl font-light mt-3 mb-5">
            Un equipo unido por
            <br />
            <span style={{ color: '#4DC9B0', fontWeight: 600 }}>el cuidado del otro</span>
          </h1>
          <p style={{ color: '#7a8f9e' }} className="text-lg max-w-2xl mx-auto leading-relaxed">
            En Nexos espacio Terapéutico brindamos un espacio clínico de escucha profesional, reflexión y acompañamiento terapéutico

            Nuestro equipo está conformado por profesionales comprometidos con una práctica ética y respetuosa de la singularidad de cada persona.

            Trabajamos promoviendo procesos que permitan elaborar el malestar, fortalecer recursos personales y favorecer cambios que mejoren la calidad de vida.
          </p>
        </div>
      </section>

      {/* ─── HISTORIA ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">
          <Reveal className="relative flex justify-center">
            <div
              style={{
                width: 260,
                height: 260,
                borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(77,201,176,0.15), rgba(77,201,176,0.05))',
                border: '2px solid rgba(77,201,176,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <span style={{ fontSize: 80, lineHeight: 1 }}>🌿</span>
              <div
                style={{
                  position: 'absolute',
                  bottom: 10,
                  right: -10,
                  backgroundColor: 'white',
                  border: '1.5px solid #e8f0f4',
                  borderRadius: 16,
                  padding: '10px 16px',
                  boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
                }}
              >
                <span style={{ color: '#4DC9B0', fontWeight: 700, fontSize: 22 }}>+7</span>
                <p style={{ color: '#7a8f9e', fontSize: 11, margin: 0 }}>años de trayectoria</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <h2 style={{ color: '#5A6B7B' }} className="text-3xl font-light mb-5">
              Nuestra historia
            </h2>
            <p style={{ color: '#7a8f9e' }} className="leading-relaxed mb-4">
              Nexos Espacio Terapéutico surgió en 2019 como un proyecto colaborativo entre 3 profesionales de la salud mental que compartían una misma visión: crear un espacio donde cada persona se sintiera comprendida, acompañada y capaz de transformar su realidad.
            </p>
            <p style={{ color: '#7a8f9e' }} className="leading-relaxed mb-6">
              Con el tiempo fuimos creciendo, incorporando nuevas miradas y especialidades, siempre con la calidez humana como eje central de nuestra práctica.
            </p>
            <div className="flex gap-8">
              {STATS.map(({ n, label }) => (
                <div key={label}>
                  <p style={{ color: '#4DC9B0', fontWeight: 700 }} className="text-2xl">
                    <CountUp value={n} />
                  </p>
                  <p style={{ color: '#8fa7b5' }} className="text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section style={{ backgroundColor: '#f9fbfc' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <h2 style={{ color: '#5A6B7B' }} className="text-3xl font-light">
              Nuestros valores
            </h2>
          </Reveal>
          <Reveal delay={120} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map(({ icon: Icon, color, label, desc }) => (
              <div
                key={label}
                style={{ border: '1.5px solid #e8f0f4', backgroundColor: 'white' }}
                className="p-7 rounded-2xl text-center hover:shadow-lg transition-shadow"
              >
                <div
                  style={{ backgroundColor: `${color}15`, color }}
                  className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ color: '#5A6B7B' }} className="font-semibold mb-2">{label}</h3>
                <p style={{ color: '#8fa7b5' }} className="text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ─── EQUIPO ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <Reveal className="text-center mb-12">
            <span
              style={{ color: '#4DC9B0', letterSpacing: '0.2em' }}
              className="text-xs uppercase font-semibold"
            >
              Las personas detrás de Nexos
            </span>
            <h2 style={{ color: '#5A6B7B' }} className="text-3xl font-light mt-2">
              Socias fundadoras
            </h2>
          </Reveal>

          <Reveal delay={120} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, color, photo, zoom, focus, shift }) => (
              <div
                key={name}
                style={{ border: '1.5px solid #e8f0f4' }}
                className="rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div
                  style={{ backgroundColor: `${color}18`, aspectRatio: '4 / 5', maxWidth: '70%' }}
                  className="photo-shine overflow-hidden mx-auto mt-6 rounded-xl"
                >
                  <img
                    src={photo}
                    alt={name}
                    style={{
                      objectPosition: focus,
                      transform: `translateY(${shift}) scale(${zoom})`,
                      transformOrigin: 'center 30%',
                    }}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6 text-center">
                  <h3 style={{ color: '#5A6B7B' }} className="font-semibold text-xl">{name}</h3>
                  <p style={{ color }} className="text-xs font-medium mt-1">{role}</p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

    </div>
  )
}
