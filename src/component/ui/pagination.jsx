import React, { useState } from "react"
import { Link ,useNavigate, useLocation } from "react-router-dom"
import EachUtils from "@/utils/EachUtils"

const Pagination = ({ data }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const activePages = location.state?.pages;
  const [ isActive, setIsActive ] = useState(location.pathname)
  
  const switchPages = ( datas ) => {
   setIsActive(datas.value)
   navigate(datas.routes)
   scrollTo({behavior: 'auto', top: 0})
  }
  
  return (
   <div className="pagination">
    <EachUtils
     of={data}
     render={(value, index) => (
      <div
       key={index}
       onClick={() => switchPages({
        value: value.routes,
        routes: value.routes
       })}
       className={`items ${isActive === value.routes && ("active")}`}>
       <ion-icon className="icon" name={value.icon}></ion-icon>
      </div>
     )}/>
   </div>
  )
}

export default Pagination;