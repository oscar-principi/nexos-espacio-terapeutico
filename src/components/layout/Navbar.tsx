import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

interface NavItem {
  to: string
  label: string
}

const links: NavItem[] = [
  { to: '/', label: 'Inicio' },
  { to: '/quienes-somos', label: 'Quiénes Somos' },
  { to: '/contacto', label: 'Contacto' },
  { to: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' }
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false)
  const [scrolled, setScrolled] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = (): void => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      style={{
        backgroundColor: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 2px 20px rgba(77,201,176,0.15)' : 'none',
        transition: 'all 0.3s ease',
      }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex flex-col leading-none">
          <span
            style={{ color: '#5A6B7B', fontFamily: "'Nunito', sans-serif", letterSpacing: '0.08em' }}
            className="text-3xl font-light tracking-widest"
          >
            nex
            <span style={{ color: '#4DC9B0' }}>o</span>
            s
          </span>
          <span
            style={{ color: '#4DC9B0', fontFamily: "'Nunito', sans-serif", letterSpacing: '0.25em' }}
            className="text-[10px] font-light uppercase mt-2px"
          >
            espacio terapéutico
          </span>
        </NavLink>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              style={({ isActive }) => ({
                color: isActive ? '#4DC9B0' : '#5A6B7B',
                fontFamily: "'Nunito', sans-serif",
                fontWeight: isActive ? '600' : '400',
                borderBottom: isActive ? '2px solid #4DC9B0' : '2px solid transparent',
                paddingBottom: '2px',
                transition: 'all 0.2s ease',
              })}
              className="text-sm uppercase tracking-widest hover:text-[#4DC9B0] transition-colors"
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            style={{ backgroundColor: '#4DC9B0', fontFamily: "'Nunito', sans-serif" }}
            className="text-white text-sm font-semibold px-5 py-2 rounded-full uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Turnos
          </NavLink>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: '#5A6B7B' }}
          className="md:hidden p-1"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          style={{ backgroundColor: 'rgba(255,255,255,0.98)', borderTop: '1px solid #e8f8f4' }}
          className="md:hidden px-6 pb-6 flex flex-col gap-4"
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              onClick={() => setMenuOpen(false)}
              style={({ isActive }) => ({
                color: isActive ? '#4DC9B0' : '#5A6B7B',
                fontFamily: "'Nunito', sans-serif",
              })}
              className="text-base py-2 border-b border-gray-100"
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contacto"
            onClick={() => setMenuOpen(false)}
            style={{ backgroundColor: '#4DC9B0', fontFamily: "'Nunito', sans-serif" }}
            className="text-white text-center font-semibold px-5 py-3 rounded-full"
          >
            Solicitar Turno
          </NavLink>
        </div>
      )}
    </header>
  )
}
