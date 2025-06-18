import React, { useState } from "react"
import Header from "@/component/widget/header"
import Navbar from "@/component/widget/navbar"
import { motion, AnimatePresence } from "framer-motion"
import Education from "@/pages/section/education"
import Experience from "@/pages/section/experience"
import Pagination from "@/component/ui/pagination"

const History = ({ data }) => {
  const pagination = [
   {
    icon: "school",
    component: Education,
    routes: "/history/education"
   },
   {
    icon: "briefcase",
    component: Experience,
    routes: "/history/experience"
   }
  ]
  
  const ComponentPages = {
   education: Education,
   experience: Experience
  }
  const ViewedPages = ComponentPages[data];
  
  return (
   <div className="history-pages">
    <Header />
    <Pagination data={pagination} />
    <Navbar pages="history" />
    <AnimatePresence mode="wait">
      <motion.section
        key={data}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, x: -100 + "%" }}
        transition={{ duration: 0.5 }}
      >
        <ViewedPages data={{ title: "Education", icons: ["construct", "briefcase"] }} />
      </motion.section>
     </AnimatePresence>
   </div>
  )
}

export default History;