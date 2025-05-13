import React from "react"
import Header from "@/component/header"
import Navbar from "@/component/widget/navbar"
import Education from "@/component/widget/section/education"
import Experience from "@/component/widget/section/experience"
import Pagination from "@/component/ui/pagination"

const datas = {
 title: "Education",
 icons: ["build", "briefcase"]
}

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
   "education": pagination[0]?.component,
   "experience": pagination[1]?.component
  }
  const ViewedPages = ComponentPages[data];
  return (
   <div className="history-pages">
    <Header />
    <Pagination data={pagination} />
    <Navbar pages="history" />
    <ViewedPages data={datas} />
   </div>
  )
}

export default History;