import { Award, BookOpen, Heart, Users, LucideIcon } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  specialty: string
  color: string
  initial: string
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

const TEAM: TeamMember[] = [
  {
    name: 'Natalia Maria',
    role: 'Psicóloga · Socia Fundadora',
    specialty: 'Especialidad',
    color: '#E8525A',
    initial: 'N',
  },
  {
    name: 'Victoria Perez de San Roman',
    role: 'Psicóloga · Socia Fundadora',
    specialty: 'Especialidad',
    color: '#4DC9B0',
    initial: 'V',
  },
  {
    name: 'Maria Luz Ruiz Campos',
    role: 'Psicóloga · Socia Fundadora',
    specialty: 'Especialidad',
    color: '#B07CC6',
    initial: 'M',
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
  { n: '10+', label: 'Años de experiencia' },
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
          <div className="relative flex justify-center">
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
                <span style={{ color: '#4DC9B0', fontWeight: 700, fontSize: 22 }}>+10</span>
                <p style={{ color: '#7a8f9e', fontSize: 11, margin: 0 }}>años de trayectoria</p>
              </div>
            </div>
          </div>

          <div>
            <h2 style={{ color: '#5A6B7B' }} className="text-3xl font-light mb-5">
              Nuestra historia
            </h2>
            <p style={{ color: '#7a8f9e' }} className="leading-relaxed mb-4">
              Nexos Espacio Terapéutico surgió en (año) como un proyecto colaborativo entre 3 profesionales de la salud mental que compartían una misma visión: crear un espacio donde cada persona se sintiera comprendida, acompañada y capaz de transformar su realidad.
            </p>
            <p style={{ color: '#7a8f9e' }} className="leading-relaxed mb-6">
              Con el tiempo fuimos creciendo, incorporando nuevas miradas y especialidades, siempre con la calidez humana como eje central de nuestra práctica.
            </p>
            <div className="flex gap-8">
              {STATS.map(({ n, label }) => (
                <div key={label}>
                  <p style={{ color: '#4DC9B0', fontWeight: 700 }} className="text-2xl">{n}</p>
                  <p style={{ color: '#8fa7b5' }} className="text-xs mt-0.5">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── VALORES ─── */}
      <section style={{ backgroundColor: '#f9fbfc' }} className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 style={{ color: '#5A6B7B' }} className="text-3xl font-light">
              Nuestros valores
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </div>
      </section>

      {/* ─── EQUIPO ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <span
              style={{ color: '#4DC9B0', letterSpacing: '0.2em' }}
              className="text-xs uppercase font-semibold"
            >
              Las personas detrás de Nexos
            </span>
            <h2 style={{ color: '#5A6B7B' }} className="text-3xl font-light mt-2">
              Nuestro equipo
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {TEAM.map(({ name, role, specialty, color, initial }) => (
              <div
                key={name}
                style={{ border: '1.5px solid #e8f0f4' }}
                className="rounded-2xl overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 group"
              >
                <div
                  style={{ backgroundColor: `${color}18`, height: 160 }}
                  className="flex items-center justify-center"
                >
                  <div
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      backgroundColor: color,
                      color: 'white',
                      fontSize: 32,
                      fontWeight: 700,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: `0 8px 24px ${color}55`,
                    }}
                  >
                    {initial}
                  </div>
                </div>

                <div className="p-6">
                  <h3 style={{ color: '#5A6B7B' }} className="font-semibold text-base">{name}</h3>
                  <p style={{ color }} className="text-xs font-medium mt-1 mb-2">{role}</p>
                  <p style={{ color: '#8fa7b5' }} className="text-sm">{specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
