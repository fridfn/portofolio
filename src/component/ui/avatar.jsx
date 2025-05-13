import React from "react"
import metadata from "@/metadata"

const Avatar = ({ name }) => {
  const getImage = metadata.images[name];
  
  return (
   <div className='box'>
    <img 
     src={getImage}
     alt='avatar' className='image'
     onClick={(e) => e.preventDefault()}
    />
   </div>
  )
}

export default Avatar;