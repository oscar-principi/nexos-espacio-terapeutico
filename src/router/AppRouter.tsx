import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsappButton from '../components/ui/WhatsappButton'
import Home from '../pages/Home'
import QuienesSomos from '../pages/QuienesSomos'
import Contacto from '../pages/Contacto'

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  )
}
