import React, { useState, useEffect } from "react"
import Popup from "@/component/ui/popup"
import Header from "@/component/widget/header"
import Navbar from "@/component/widget/navbar"
import Pagination from "@/component/ui/pagination"
import Skils from "@/pages/section/skils"
import Awards from "@/pages/section/awards"
import Portofolio from "@/pages/section/portofolio"
import { motion, AnimatePresence } from "framer-motion"

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
  icon: "ribbon",
  component: Awards,
  routes: "/showcase/awards"
 },
]

const Showcase = ({ data }) => {
  const [popupData, setPopupData] = useState(null);
  
  const handlePopup = ({ data, index }) => {
    if (popupData) {
      setPopupData(null);
    } else {
      setPopupData({ data, index });
    }
  };
  
  
  const ComponentPages = {
    skills: Skils,
    awards: Awards,
    portofolio: Portofolio
  };
  
  const ViewedPages = ComponentPages[data];
  
  return (
    <>
      {popupData && (
        <Popup
          data={popupData.data}
          index={popupData.index}
          handler={handlePopup}
        />
      )}
      <div className="showcase-pages">
        <Header />
        <Pagination data={pagination} />
        <Navbar pages="showcase" />
        <AnimatePresence mode="wait">
          <motion.section
            key={data}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, x: "-100%" }}
            transition={{ duration: 0.5 }}
          >
            <ViewedPages
              handler={handlePopup}
              data={{
                title: "Skills",
                icons: ["school", "briefcase"]
              }}
            />
          </motion.section>
        </AnimatePresence>
      </div>
    </>
  );
};


export default Showcase;