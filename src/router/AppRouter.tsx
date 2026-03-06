import { HashRouter, Routes, Route, useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsappButton from '../components/ui/WhatsappButton'
import Home from '../pages/Home'
import QuienesSomos from '../pages/QuienesSomos'
import Contacto from '../pages/Contacto'

function AnimatedRoutes() {
  const location = useLocation()

  return (
    <div
      className="route-transition"
      key={`${location.pathname}${location.search}`}
    >
      <Routes location={location}>
        <Route index element={<Home />} />
        <Route path="quienes-somos" element={<QuienesSomos />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  )
}

export default function AppRouter() {
  return (
    <HashRouter>
      <div className="app-shell">
        <Navbar />
        <main>
          <AnimatedRoutes />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </HashRouter>
  )
}
