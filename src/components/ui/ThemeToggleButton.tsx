import { Palette } from 'lucide-react'
import { useTheme } from '../../context/ThemeContext'

export default function ThemeToggleButton() {
  const { cycleTheme } = useTheme()

  return (
    <button
      type="button"
      onClick={cycleTheme}
      aria-label="Cambiar colores"
      style={{ color: 'var(--color-primary)', border: '1.5px solid var(--color-primary)' }}
      className="w-9 h-9 rounded-full flex items-center justify-center hover:opacity-80 transition-opacity shrink-0 cursor-pointer"
    >
      <Palette size={18} />
    </button>
  )
}
