import React, { useState, useEffect, useRef } from "react"
import profilePict from "@/assets/profile_pict.jpg"
import flag_indonesia from "@/assets/flag/indonesia.svg"
import flag_usa from "@/assets/flag/united-states.svg"

const LeanguageOption = () => {
  return (
   <div className="box-option" onClick={() => alert("hello indonesia")}>
    <div className="items-option">
      <div id='lang' className='box'>
       <img className='image' src={flag_indonesia} />
      </div>
      <p className="info">Indonesia</p>
    </div>
    <div className="items-option">
      <div id='lang' className='box'>
       <img className='image' src={flag_usa} />
      </div>
      <p className="info">English</p>
    </div>
   </div>
  )
}

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const optionRef = useRef(null)
  
  useEffect(() => {
   const handleClickOutside = (event) => {
    if (optionRef.current && !optionRef.current.contains(event.target)) {
      setIsOpen(false)
    }
   }
   
   document.addEventListener("touchstart", handleClickOutside)
   
   return () => {
    document.removeEventListener("touchstart", handleClickOutside)
   }
  }, [optionRef])
  
  return (
   <>
    <div className='header'>
     <div className="wrapper-action">
      <div 
        id='lang'
        className='box'
        ref={optionRef}
        onClick={() => setIsOpen((prevState) => !prevState)}>
       <img className='image' src={flag_usa} />
       <ion-icon 
        className='icon' 
        name='caret-down'
        style={{fontSize: "15px"}}>
       </ion-icon>
       {isOpen ? <LeanguageOption /> : null}
      </div>
      <div className='box'>
       <ion-icon name='moon' className='icon'></ion-icon>
      </div>
     </div>
     <div className='box'>
      <img className='image' src={profilePict} />
     </div>
     <div className="wrapper-info">
      <p className="title">Farid<span id='hightlight'>Fathoni N</span></p>
      <p className="description">Frontend Developer</p>
     </div>
    </div>
   </>
  )
}

export default Header;