import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Smile, Heart, Users, Sparkles, ClipboardCheck, Brain, Compass, BookOpen, ChevronDown } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import logoNexos from '../assets/images/logo-nexos.png'

interface Service {
  icon: LucideIcon
  color: string
  title: string
  desc: string
}

interface DotDecoration {
  top?: string
  left?: string
  right?: string
  color: string
  size: number
}

const SERVICES: Service[] = [
  {
    icon: Smile,
    color: '#F5C842',
    title: 'Psicoterapia infantil',
    desc: 'Un espacio seguro y lúdico para acompañar a los más pequeños en su desarrollo emocional.',
  },
  {
    icon: Users,
    color: '#4DC9B0',
    title: 'Psicoterapia para adolescentes',
    desc: 'Acompañamiento especializado durante la adolescencia, etapa de cambios y construcción de identidad.',
  },
  {
    icon: Sparkles,
    color: '#F5C842',
    title: 'Terapia para adultos',
    desc: 'Un espacio personal para explorar, comprender y transformar tus emociones y pensamientos.',
  },
  {
    icon: Heart,
    color: '#E8525A',
    title: 'Terapia de pareja',
    desc: 'Herramientas para fortalecer el vínculo, mejorar la comunicación y crecer juntos.',
  },
  {
    icon: Users,
    color: '#4A7BC4',
    title: 'Terapia de familia',
    desc: 'Acompañamiento sistémico para familias en procesos de cambio y reestructuración.',
  },
  {
    icon: BookOpen,
    color: '#2E9E7A',
    title: 'Orientación a padres',
    desc: 'Guía y herramientas para fortalecer el rol parental y la crianza consciente.',
  },
  {
    icon: ClipboardCheck,
    color: '#B07CC6',
    title: 'Evaluaciones psicológicas',
    desc: 'Evaluaciones integrales para comprender el perfil cognitivo, emocional y conductual.',
  },
  {
    icon: Compass,
    color: '#F5A623',
    title: 'Orientación vocacional',
    desc: 'Descubrí tus fortalezas y construí un camino auténtico hacia tu futuro profesional.',
  },
  {
    icon: Brain,
    color: '#4DC9B0',
    title: 'Estimulación cognitiva',
    desc: 'Programas personalizados para potenciar las funciones cognitivas en niños y adultos.',
  },
]

const DOTS: DotDecoration[] = [
  { top: '18%', left: '52%', color: '#E8525A', size: 18 },
  { top: '10%', right: '18%', color: '#2E9E7A', size: 14 },
  { top: '55%', left: '48%', color: '#F5C842', size: 22 },
  { top: '72%', right: '22%', color: '#B07CC6', size: 16 },
  { top: '68%', left: '60%', color: '#4A7BC4', size: 12 },
]

const STATS: { n: string; label: string }[] = [
  { n: '+500', label: 'Pacientes acompañados' },
  { n: '8', label: 'Profesionales' },
  { n: '10+', label: 'Años de experiencia' },
]

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(24px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 0.8s ease, transform 0.8s ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [])

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif" }}>

      {/* ─── HERO ─── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #f0fdf8 0%, #e8f8f4 50%, #f5f9ff 100%)',
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden',
        }}
        className="flex items-center"
      >
        {DOTS.map((d, i) => (
          <span
            key={i}
            style={{
              position: 'absolute',
              top: d.top,
              left: d.left,
              right: d.right,
              width: d.size * 3,
              height: d.size * 3,
              borderRadius: '50%',
              border: `3px solid ${d.color}`,
              opacity: 0.18,
            }}
          />
        ))}
        <span
          style={{
            position: 'absolute',
            top: '20%',
            right: '8%',
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(77,201,176,0.12) 0%, transparent 70%)',
          }}
        />

        <div ref={heroRef} className="max-w-6xl mx-auto px-6 pt-32 pb-20 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <span
              style={{
                backgroundColor: 'rgba(77,201,176,0.12)',
                color: '#4DC9B0',
                border: '1px solid rgba(77,201,176,0.3)',
                letterSpacing: '0.2em',
              }}
              className="inline-block text-xs uppercase font-semibold px-4 py-1.5 rounded-full mb-6"
            >
              ✦ Espacio terapéutico
            </span>

            <h1
              style={{ color: '#5A6B7B', lineHeight: 1.15 }}
              className="text-5xl md:text-6xl font-light mb-6"
            >
              Un lugar para
              <br />
              <span style={{ color: '#4DC9B0', fontWeight: 600 }}>conectarte</span>
              <br />
              con vos{' '}
              <span className="inline-flex items-end gap-4">
                mismo
                <img
                  src={logoNexos}
                  alt="Logo Nexos"
                  className="md:hidden w-10 h-auto mobile-logo-motion"
                />
              </span>
            </h1>

            <p style={{ color: '#7a8f9e' }} className="text-lg leading-relaxed mb-8 max-w-md">
              En Nexos creemos que cada persona merece un espacio seguro para crecer, sanar y encontrar su propio camino.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/contacto"
                style={{ backgroundColor: '#4DC9B0' }}
                className="inline-flex items-center gap-2 text-white font-semibold px-7 py-3.5 rounded-full hover:opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Solicitar turno <ArrowRight size={18} />
              </Link>
              <Link
                to="/quienes-somos"
                style={{ color: '#5A6B7B', border: '1.5px solid #c8d6df' }}
                className="inline-flex items-center gap-2 font-medium px-7 py-3.5 rounded-full hover:border-[#4DC9B0] hover:text-[#4DC9B0] transition-all"
              >
                Conocenos
              </Link>
            </div>
          </div>

          {/* Logo visual */}
          <div className="hidden md:flex justify-center items-center">
            <img
              src={logoNexos}
              alt="Logo Nexos"
              className="w-360px lg:w-440px h-auto drop-shadow-xl transition-transform duration-1000 ease-in-out hover:rotate-[360deg]"
            />
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 animate-bounce">
          <ChevronDown size={20} style={{ color: '#4DC9B0', opacity: 0.6 }} />
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span
              style={{ color: '#4DC9B0', letterSpacing: '0.2em' }}
              className="text-xs uppercase font-semibold"
            >
              ¿Cómo podemos acompañarte?
            </span>
            <h2 style={{ color: '#5A6B7B' }} className="text-4xl font-light mt-2">
              Nuestros servicios
            </h2>
          </div>

          {/* 3-column grid; last row auto-centers via justify-center on the flex fallback */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(({ icon: Icon, color, title, desc }) => (
              <div
                key={title}
                style={{ border: '1.5px solid #e8f0f4', transition: 'all 0.25s ease' }}
                className="p-7 rounded-2xl hover:shadow-xl hover:-translate-y-1 group cursor-default"
              >
                <div
                  style={{ backgroundColor: `${color}18`, color }}
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                >
                  <Icon size={22} />
                </div>
                <h3 style={{ color: '#5A6B7B' }} className="font-semibold text-base mb-2">
                  {title}
                </h3>
                <p style={{ color: '#8fa7b5' }} className="text-sm leading-relaxed">
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section style={{ backgroundColor: '#f9fbfc' }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            {STATS.map(({ n, label }) => (
              <div key={label}>
                <p style={{ color: '#4DC9B0', fontWeight: 700 }} className="text-4xl">{n}</p>
                <p style={{ color: '#8fa7b5' }} className="text-sm mt-1">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section
        style={{ background: 'linear-gradient(135deg, #4DC9B0 0%, #2E9E7A 100%)' }}
        className="py-20"
      >
        <div className="max-w-3xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl font-light mb-4">
            ¿Listo para dar el primer paso?
          </h2>
          <p style={{ opacity: 0.85 }} className="text-lg mb-8">
            Contactanos y coordinamos una primera consulta sin compromiso.
          </p>
          <Link
            to="/contacto"
            style={{ backgroundColor: 'white', color: '#4DC9B0' }}
            className="inline-flex items-center gap-2 font-bold px-8 py-4 rounded-full hover:scale-105 transition-transform shadow-lg text-base"
          >
            Escribinos ahora <ArrowRight size={18} />
          </Link>
        </div>
      </section>

    </div>
  )
}