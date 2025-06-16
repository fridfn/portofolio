import React from "react"
import Header from "@/component/widget/header"
import Navbar from "@/component/widget/navbar"
import Homes from "@/pages/section/home"

const Home = () => {
  return (
   <>
    <div className='container'>
     <Header />
     <Homes />
     <Navbar pages="home" />
    </div>
   </>
  )
}

export default Home;