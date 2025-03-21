import React from "react"
import TitleDescription from "@/component/ui/titleDescription"

const Section = () => {
  return (
   <div className='wrapper-section'>
    <span className="greeting">
     <p className='title' id='hightlight'>Welcome!</p>
     <p className='info'><ion-icon name="business"></ion-icon>Bekasi
      <span>&#9866;</span>ID<span>•</span><ion-icon name='mail' style={{color: "var(--secondary-hightlight)"}}></ion-icon><span style={{color: "var(--secondary-hightlight)"}}>faridfathonin@gmail.com</span>
     </p>
    </span>
    <TitleDescription icons={false}/>
   </div>
  )
}

export default Section;