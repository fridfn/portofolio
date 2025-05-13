import React from "react"
import Header from "@/component/header"
import Navbar from "@/component/widget/navbar"
import Homes from "@/component/widget/section/home"

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