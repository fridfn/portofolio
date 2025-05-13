import React from "react"

const BubbleSelected = ({ data }) => {
  return (
   <>
     <div className="bubble-items">
       <ion-icon name="logo-ionic"></ion-icon>
       <p className="description">{data}</p>
     </div>
   </>
  )
}

export default BubbleSelected;