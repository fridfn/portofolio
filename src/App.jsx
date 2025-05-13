import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css'
import "@/styles/app.css"
import "@/styles/pseudo.css"
import 'swiper/css/pagination'
import Home from "@/pages/home"
import { useState } from "react"
import NotFound from "@/NotFound"
import Other from "@/pages/other"
import History from "@/pages/history"
import Showcase from "@/pages/showcase"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  AOS.init({ mirror: false, once: true, duration: "600" });
  return (
   <>
     <Router>
      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/home" element={<Home />} />
       <Route path="/history/education" element={<History data="education"/>} />
       <Route path="/history/experience" element={<History data="experience" />} />
       <Route path="/showcase/skills" element={<Showcase data="skills" />} />
       <Route path="/showcase/portofolio" element={<Showcase data="portofolio" />} />
       <Route path="/showcase/awards" element={<Showcase data="awards" />} />
       <Route path="/other/updates" element={<Other data="updates" />} />
       <Route path="/other/contact" element={<Other data="contact" />} />
       <Route path="*" element={<NotFound />} />
      </Routes>
     </Router>
   </>
  )
}

export default App;
