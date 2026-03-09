import { NavLink } from 'react-router-dom'
import { Instagram, Mail, Phone, MapPin } from 'lucide-react'
import type { ElementType } from 'react'

interface FooterLink {
  to: string
  label: string
}

interface ContactItem {
  icon: ElementType
  color: string
  value: string
}

const footerLinks: FooterLink[] = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes Somos' },
  { to: '/contacto', label: 'Contacto' },
]

const contactItems: ContactItem[] = [
  { icon: Phone, color: '#4DC9B0', value: '(011) 15 4057 5607' },
  { icon: Mail, color: '#4DC9B0', value: 'espacionexos@gmail.com' },
  { icon: Instagram, color: '#4DC9B0', value: '@nexosespacioterapeutico' },
  { icon: MapPin, color: '#4DC9B0', value: 'Belén de Escobar: Cesar Diaz 1118, depto 1' },
]

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#5A6B7B' }} className="text-white">
      {/* Wave top */}
      <div style={{ lineHeight: 0 }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ display: 'block', width: '100%', height: '60px' }}>
          <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill="#f9fafb" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Brand */}
        <div>
          <div className="mb-3">
            <span
              style={{ fontFamily: "'Nunito', sans-serif", letterSpacing: '0.08em' }}
              className="text-3xl font-light"
            >
              nex<span style={{ color: '#4DC9B0' }}>o</span>s
            </span>
          </div>
          <p
            style={{ color: '#4DC9B0', fontFamily: "'Nunito', sans-serif", letterSpacing: '0.2em' }}
            className="text-xs uppercase mb-4"
          >
            espacio terapéutico
          </p>
          <p style={{ color: '#c8d6df', fontFamily: "'Nunito', sans-serif" }} className="text-sm leading-relaxed">
            Un espacio de encuentro, acompañamiento y crecimiento personal.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4
            style={{ color: '#4DC9B0', fontFamily: "'Nunito', sans-serif", letterSpacing: '0.15em' }}
            className="text-xs uppercase font-semibold mb-4"
          >
            Navegación
          </h4>
          <ul className="space-y-2">
            {footerLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  style={{ color: '#c8d6df', fontFamily: "'Nunito', sans-serif" }}
                  className="text-sm hover:text-white transition-colors"
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4
            style={{ color: '#4DC9B0', fontFamily: "'Nunito', sans-serif", letterSpacing: '0.15em' }}
            className="text-xs uppercase font-semibold mb-4"
          >
            Contacto
          </h4>
          <ul className="space-y-3">
            {contactItems.map(({ icon: Icon, color, value }) => (
              <li key={value} className="flex items-center gap-2" style={{ color: '#c8d6df', fontFamily: "'Nunito', sans-serif" }}>
                <Icon size={15} style={{ color }} />
                <span className="text-sm">{value}</span>
              </li>
            ))}
          </ul>
          <div className="flex gap-3 mt-5">
            <a
              href="https://www.instagram.com/nexosespacioterapeutico/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: 'rgba(77,201,176,0.2)', color: '#4DC9B0' }}
              className="p-2 rounded-full hover:bg-[#4DC9B0] hover:text-white transition-all"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
            <a
              href="mailto:espacionexos@gmail.com"
              style={{ backgroundColor: 'rgba(77,201,176,0.2)', color: '#4DC9B0' }}
              className="p-2 rounded-full hover:bg-[#4DC9B0] hover:text-white transition-all"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }} className="py-5">
        <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">

          {/* Copyright */}
          <p style={{ color: '#8fa7b5', fontFamily: "'Nunito', sans-serif" }} className="text-xs flex items-center gap-1">
            © {new Date().getFullYear()} Nexos Espacio Terapéutico · Todos los derechos reservados
          </p>

          {/* Créditos de Desarrollo */}
          <div className="flex flex-col items-center gap-1">
            <span style={{ color: '#8fa7b5', fontFamily: "'Nunito', sans-serif", letterSpacing: '0.3em' }} className="text-[9px] uppercase font-medium">
              Desarrollado por
            </span>
            <a
              href="https://rocklab.com.ar"
              target="_blank"
              rel="noopener noreferrer"
              className="group transition-transform hover:scale-105 active:scale-95"
            >
              <div className="text-2xl font-black tracking-tighter leading-none">
                <span style={{ color: '#ef4444' }}>Rock</span>
                <span style={{ color: '#ffffff' }}>Lab</span>
              </div>
              <p style={{ color: '#8fa7b5', letterSpacing: '0.3em', fontFamily: "'Nunito', sans-serif" }}
                className="text-[8px] uppercase mt-0.5 opacity-0 group-hover:opacity-100 transition-opacity text-center">
                Visitar sitio
              </p>
            </a>
          </div>

        </div>
      </div>
    </footer>
  )
}   
