import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/home';
import Services from './pages/services';
import Gallery from './pages/gallery';
import About from './pages/about';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';
import Contact from './pages/contact';
import Aside from './components/Aside';
import Pricing from './pages/pricing';


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <div className='overflow-x-hidden'>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
        <Aside />
        <Section />
      </div>
      <Footer />
    </BrowserRouter>
  )
}

export default App
