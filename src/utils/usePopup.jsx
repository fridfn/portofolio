import React, { useState } from "react"

const UsePopup = () => {
  const [ isOpen, setIsOpen ] = useState(false)
  const [ popupData, setPopupData ]= useState([])
  
  const openPopup = (data, index) => {
   const selectedLink = data[index]
   
   setPopupData({
    ...data,
    selectedLink,
   })
   setIsOpen(true)
  }
  
  const closePopup = () => {
    setPopupData(null)
    setIsOpen(false)
  }
  
  return {
    isOpen,
    popupData,
    openPopup,
    closePopup,
  }
}

export default UsePopup;