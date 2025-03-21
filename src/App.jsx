import "@/styles/app.css"
import "@/styles/pseudo.css"
import { useState } from "react"
import Introduction from "@/pages/Introduction"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  
  return (
   <>
     <Router>
      <Routes>
       <Route path="/" element={<Introduction />} />
      </Routes>
     </Router>
   </>
  )
}

export default App;
