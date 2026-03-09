import { useState } from 'react'
import { ChevronDown, HelpCircle, LucideIcon } from 'lucide-react'

interface FAQ {
  question: string
  answer: string
  category: string
}

interface Category {
  id: string
  label: string
  color: string
  icon: LucideIcon
}

const CATEGORIES: Category[] = [
  { id: 'todas', label: 'Todas', color: '#4DC9B0', icon: HelpCircle },
]

const FAQS: FAQ[] = [
  {
    category: 'consultas',
    question: '¿Cómo reservar un turno?',
    answer:
      'Podés solicitar un turno de tres formas: enviándonos un mensaje por WhatsApp mediante el botón de WhatsApp en nuestra página, completando el formulario en la seccion contacto, o escribiéndonos un email a espacionexos@gmail.com. En todos los casos te respondemos a la brevedad para coordinar el día y horario que mejor se adapte a tu disponibilidad.',
  },
  {
    category: 'consultas',
    question: '¿Cuánto dura una sesión?',
    answer: 
      'Cada sesión tiene una duración de 45 minutos. Este tiempo está cuidadosamente pensado para crear un espacio de escucha profunda y trabajo terapéutico, sin apresuramientos. La regularidad y el encuadre son parte fundamental del proceso: saber con qué tiempo contás te permite llegar, abrirte y trabajar con mayor confianza.',
  },
  {
    category: 'consultas',
    question: '¿Con qué frecuencia son las sesiones?',
    answer:
      'La frecuencia más común es semanal, especialmente al inicio del proceso. A medida que avanza la terapia, puede espaciarse según las necesidades y objetivos de cada persona. Esto se evalúa junto al/la terapeuta.',
  },
  {
    category: 'consultas',
    question: '¿Atienden de forma presencial y online?',
    answer:
      'Sí, ofrecemos atención tanto de forma presencial en nuestro consultorio de Belén de Escobar (Cesar Díaz 1118, depto 1) como en modalidad virtual por videollamada. Podés elegir la opción que más te resulte cómoda.',
  },
  {
    category: 'terapia',
    question: '¿Cómo sé si necesito hacer terapia?',
    answer:
      'No es necesario estar en crisis para comenzar un proceso terapéutico. Muchas personas eligen la terapia para atravesar momentos de cambio, mejorar sus vínculos, conocerse mejor o simplemente tener un espacio de escucha. Si sentís que algo no está del todo bien, o que querés trabajar en vos mismo/a, eso ya es motivo suficiente.',
  },
  {
    category: 'terapia',
    question: '¿Atienden todas las edades?',
    answer:
      'Sí. Contamos con 8 profesionales especializadas en psicología infantil, adolescencia y adultos. ',
  },
  {
    category: 'practica',
    question: '¿Trabajan con obras sociales o prepagas?',
    answer:
      'Actualmente trabajamos de forma particular. ',
  },
  {
    category: 'practica',
    question: '¿Qué pasa si no puedo asistir a una sesión?',
    answer:
      'Te pedimos que, en lo posible, avises con al menos 24 horas de anticipación para poder reorganizar la agenda y no generar el honorario de la consulta. La política de cancelación y reprogramación se acuerda puntualmente con cada profesional al inicio del proceso.',
  },
]

export default function PreguntasFrecuentes() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

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
            ✦ Preguntas frecuentes
          </span>
          <h1 style={{ color: '#5A6B7B' }} className="text-5xl font-light mt-3 mb-5">
            Respondemos tus
            <br />
            <span style={{ color: '#4DC9B0', fontWeight: 600 }}>dudas más comunes</span>
          </h1>
          <p style={{ color: '#7a8f9e' }} className="text-lg max-w-2xl mx-auto leading-relaxed">
            Si tenés alguna pregunta que no está aquí, no dudes en escribirnos. Estamos para ayudarte.
          </p>
        </div>
      </section>

      {/* ─── FAQ LIST ─── */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">

          {/* Group: Turnos y consultas */}
          <FAQGroup
            title="Turnos y consultas"
            color="#4DC9B0"
            items={FAQS.filter(f => f.category === 'consultas')}
            startIndex={0}
            openIndex={openIndex}
            onToggle={toggle}
          />

          {/* Group: Terapia */}
          <FAQGroup
            title="Sobre la terapia"
            color="#4A7BC4"
            items={FAQS.filter(f => f.category === 'terapia')}
            startIndex={FAQS.filter(f => f.category === 'consultas').length}
            openIndex={openIndex}
            onToggle={toggle}
          />

          {/* Group: Práctica */}
          <FAQGroup
            title="Aspectos prácticos"
            color="#B07CC6"
            items={FAQS.filter(f => f.category === 'practica')}
            startIndex={
              FAQS.filter(f => f.category === 'consultas').length +
              FAQS.filter(f => f.category === 'terapia').length
            }
            openIndex={openIndex}
            onToggle={toggle}
          />

        </div>
      </section>

      {/* ─── CTA ─── */}
      <section style={{ backgroundColor: '#f9fbfc' }} className="py-16">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <div
            style={{ border: '1.5px solid #e8f0f4', backgroundColor: 'white' }}
            className="rounded-3xl p-10"
          >
            <span style={{ fontSize: 40 }}>💬</span>
            <h2 style={{ color: '#5A6B7B' }} className="text-2xl font-light mt-4 mb-3">
              ¿No encontraste lo que buscabas?
            </h2>
            <p style={{ color: '#7a8f9e' }} className="mb-6 leading-relaxed">
              Escribinos directamente y te respondemos con gusto.
            </p>
            <a
              href="https://wa.me/5491140575607?text=Hola%2C%20tengo%20una%20consulta%20sobre%20Nexos%20Espacio%20Terap%C3%A9utico."
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: '#25D366' }}
              className="inline-flex items-center gap-3 text-white font-semibold px-6 py-3 rounded-full hover:opacity-90 transition-opacity shadow-md"
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Consultanos por WhatsApp
            </a>
          </div>
        </div>
      </section>

    </div>
  )
}

/* ─── Sub-component: FAQ Group ─── */
interface FAQGroupProps {
  title: string
  color: string
  items: FAQ[]
  startIndex: number
  openIndex: number | null
  onToggle: (i: number) => void
}

function FAQGroup({ title, color, items, startIndex, openIndex, onToggle }: FAQGroupProps) {
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div style={{ width: 4, height: 24, backgroundColor: color, borderRadius: 4 }} />
        <h2 style={{ color: '#5A6B7B' }} className="text-lg font-semibold">
          {title}
        </h2>
      </div>

      <div className="space-y-3">
        {items.map((faq, i) => {
          const globalIndex = startIndex + i
          const isOpen = openIndex === globalIndex

          return (
            <div
              key={faq.question}
              style={{
                border: `1.5px solid ${isOpen ? color + '55' : '#e8f0f4'}`,
                backgroundColor: isOpen ? `${color}08` : 'white',
                transition: 'all 0.25s ease',
              }}
              className="rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => onToggle(globalIndex)}
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4"
              >
                <span
                  style={{ color: isOpen ? color : '#5A6B7B' }}
                  className="font-semibold text-base leading-snug transition-colors"
                >
                  {faq.question}
                </span>
                <ChevronDown
                  size={20}
                  style={{
                    color,
                    flexShrink: 0,
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.25s ease',
                  }}
                />
              </button>

              <div
                style={{
                  maxHeight: isOpen ? 400 : 0,
                  overflow: 'hidden',
                  transition: 'max-height 0.35s ease',
                }}
              >
                <p
                  style={{ color: '#7a8f9e' }}
                  className="px-6 pb-6 leading-relaxed text-sm"
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}