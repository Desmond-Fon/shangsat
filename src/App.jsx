import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './pages/home';
import Services from './pages/services';
import Gallery from './pages/gallery';
import Story from './pages/about';
import Nav from './components/Nav';
import Section from './components/Section';
import Footer from './components/Footer';
import Contact from './pages/contact';
import Aside from './components/Aside';


function App() {

  return (
      <div className=''>
        <BrowserRouter>
        <Nav />
        <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Aside />
        <Section />
        <Footer />
        </BrowserRouter>
      </div>
  )
}

export default App
