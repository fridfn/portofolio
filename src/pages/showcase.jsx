import React from "react"
import Header from "@/component/header"
import Navbar from "@/component/widget/navbar"
import Pagination from "@/component/ui/pagination"
import Skils from "@/component/widget/section/skils"
import Awards from "@/component/widget/section/awards"
import Portofolio from "@/component/widget/section/portofolio"

const datas = {
 title: "Skills",
 icons: ["school", "briefcase"]
}

const pagination = [
 {
  icon: "build",
  component: Skils,
  routes: "/showcase/skills"
 },
 {
  icon: "folder-open",
  component: Portofolio,
  routes: "/showcase/portofolio"
 },
 {
  icon:  "medal",
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
    <ViewedPages data={datas} />
   </div>
  )
}

export default Showcase;