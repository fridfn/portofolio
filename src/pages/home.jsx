import React from "react"
import Homes from "@/pages/section/home"
import Personality from "@/pages/section/personality"
import Header from "@/component/widget/header"
import Navbar from "@/component/widget/navbar"
import { motion, AnimatePresence } from "framer-motion"
import Pagination from "@/component/ui/pagination"

const Home = ({ data }) => {
  const pagination = [
   {
    icon: "library",
    component: Homes,
    routes: "/home/introduction"
   },
   {
    icon: "newspaper",
    component: Personality,
    routes: "/home/personality"
   }
  ]
  
  const ComponentPages = {
   introduction: Homes,
   personality: Personality
  }
   const ViewedPages = ComponentPages[data];
  return (
   <>
    <div className='home-pages container'>
     <Header />
     <Navbar pages="home" />
     <Pagination data={pagination} />
     <AnimatePresence mode="wait">
      <motion.section
        key={data}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, x: -100 + "%" }}
        transition={{ duration: 0.5 }}
      >
        <ViewedPages data={{ icons: ["construct", "person"] }} />
      </motion.section>
     </AnimatePresence>
    </div>
   </>
  )
}

export default Home;