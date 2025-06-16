import React from "react"
import metadata from "@/metadata"

const Avatar = ({ name }) => {
  const getImage = metadata.images[name];
  
  return (
   <div className='box'>
    <img 
     src={getImage}
     alt='avatar' className='image'
     onContextMenu={(e) => e.preventDefault()}
    />
   </div>
  )
}

export default Avatar;