import React from "react"
import Header from "@/component/header"
import Navbar from "@/component/widget/navbar"
import Pagination from "@/component/ui/pagination"
import Skils from "@/component/widget/section/skils"
import Awards from "@/component/widget/section/awards"
import Portofolio from "@/component/widget/section/portofolio"
import { motion, AnimatePresence } from "framer-motion"

const datas = {
 title: "Skills",
 icons: ["school", "briefcase"]
}

const pagination = [
 {
  icon: "construct",
  component: Skils,
  routes: "/showcase/skills"
 },
 {
  icon: "folder-open",
  component: Portofolio,
  routes: "/showcase/portofolio"
 },
 {
  icon:  "ribbon",
  component: Awards,
  routes: "/showcase/awards"
 },
]

const Showcase = ({ data }) => {
  
  const ComponentPages = {
   "skills": pagination[0].component,
   "awards": pagination[2].component,
   "portofolio": pagination[1].component,
  }
  const ViewedPages = ComponentPages[data];
  
  return (
   <div className="showcase-pages">
    <Header />
    <Pagination data={pagination} />
    <Navbar pages="showcase" />
    <AnimatePresence mode="wait">
      <motion.section
        key={data}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, x: -100 + "%" }}
        transition={{ duration: 0.5 }}
      >
        <ViewedPages data={datas} />
      </motion.section>
     </AnimatePresence>
   </div>
  )
}

export default Showcase;