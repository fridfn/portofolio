import React from "react"
import Header from "@/component/header"
import Navbar from "@/component/widget/navbar"
import Pagination from "@/component/ui/pagination"
import Updates from "@/component/widget/section/updates"
import Contact from "@/component/widget/section/contact"

const datas = {
 title: "Skills",
 icons: ["school", "briefcase"]
}

const pagination = [
 {
  icon: "build",
  component: Updates,
  routes: "/other/updates"
 },
 {
  icon: "folder-open",
  component: Contact,
  routes: "/other/contact"
 },
]

const Other = ({ data }) => {
  
  const ComponentPages = {
   "updates": pagination[0].component,
   "contact": pagination[1].component,
  }
  const ViewedPages = ComponentPages[data];
  
  return (
   <div className="other-pages">
    <Header />
    <Pagination data={pagination} />
    <Navbar pages="other" />
    <ViewedPages />
   </div>
  )
}

export default Other;