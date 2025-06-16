import { getImage } from "@/utils/getImage"
import Fire from "@/component/animate/fire"
import React, { useState, useEffect, useRef } from "react"

const LeanguageOption = () => {
  return (
   <div className="box-option">
    <div
     className="items-option"
     onClick={() => alert("hello indonesia")}>
      <div id='lang' className='box'>
       <img className='image' src={getImage('indonesia')} />
      </div>
      <p className="info">Indonesia</p>
    </div>
    <div 
     className="items-option"
     onClick={() => alert("hello usa")}>
      <div id='lang' className='box'>
       <img className='image' src={getImage('usa')} />
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
       <img className='image' src={getImage('usa')} />
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
      <img 
       className='image' 
       src={getImage('avatar')} 
       onContextMenu={(e) => e.preventDefault()} />
      <Fire />
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