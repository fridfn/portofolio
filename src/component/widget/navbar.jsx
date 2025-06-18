import React, { useState, useEffect, useRef } from "react"
import { Link } from "react-router-dom"
import EachUtils from "@/utils/EachUtils"

const Navbar = ({ pages }) => {
  const ListNavbar = [
   {title: "home", icons: "home", path: "/home/introduction"},
   {title: "history", icons: "time", path: "/history/education"},
   {title: "showcase", icons: "image", path: "/showcase/skills"},
   {title: "other", icons: "medical", path: "/other/updates"}
  ]
  
  return (
   <div className="navbar">
    <EachUtils
      of={ListNavbar}
      render={(value, index) => (
       <Link
        key={index}
        to={value.path}
        className={`items ${pages === value.title ? "active" : ""}`}>
        <p className="title">{value.title}</p>
        <ion-icon name={value.icons} className="icon"></ion-icon>
       </Link>
    )}/>
   </div>
  )
}

export default Navbar;