import React, { useState } from "react"
import Header from "@/component/header"
import Navbar from "@/component/widget/navbar"
import Pagination from "@/component/ui/pagination"
import Updates from "@/component/widget/section/updates"
import Contact from "@/component/widget/section/contact"
import { motion, AnimatePresence } from "framer-motion"

 const pagination = [
  {
   icon: "logo-rss",
   component: Updates,
   routes: "/other/updates",
  },
  {
   icon: "create-sharp",
   component: Contact,
   routes: "/other/contact",
  },
 ]
 
const Other = ({ data }) => {
  
  const ComponentPages = {
   updates: Updates,
   contact: Contact,
  }
  const ViewedPages = ComponentPages[data];
  
  return (
   <div className="other-pages">
    <Header />
    <Pagination data={pagination} />
    <Navbar pages="other" />
    <AnimatePresence mode="wait">
      <motion.section
        key={data}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 1, x: -100 + "%" }}
        transition={{ duration: 0.5 }}
      >
        <ViewedPages />
      </motion.section>
     </AnimatePresence>
   </div>
  )
}

export default Other;