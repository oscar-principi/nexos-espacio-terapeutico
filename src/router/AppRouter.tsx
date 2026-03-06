import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import WhatsappButton from '../components/ui/WhatsappButton'
import Home from '../pages/Home'
import QuienesSomos from '../pages/QuienesSomos'
import Contacto from '../pages/Contacto'

export default function AppRouter() {
  const basename =
    import.meta.env.BASE_URL !== '/' && import.meta.env.BASE_URL.endsWith('/')
      ? import.meta.env.BASE_URL.slice(0, -1)
      : import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <Navbar />
      <main>
        <Routes>
          <Route index element={<Home />} />
          <Route path="quienes-somos" element={<QuienesSomos />} />
          <Route path="contacto" element={<Contacto />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <WhatsappButton />
    </BrowserRouter>
  )
}
