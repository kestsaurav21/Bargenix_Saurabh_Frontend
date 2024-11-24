import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Pricing from './pages/Pricing'
import Features from './pages/Features'
import Contact from './pages/Contact'

function App() {

  return (
    <>
    <BrowserRouter>
     <NavBar />
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/features' element={<Features />} />
          <Route path='/contact' element={<Contact />} />
      </Routes>
     <Footer />
     </BrowserRouter>
    </>
  )
}

export default App
