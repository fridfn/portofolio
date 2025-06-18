import React from "react"
import Avatar from "@/component/ui/avatar"
import BubbleSelected from "@/component/ui/bubbleSelected"
import EachUtils from "@/utils/EachUtils"

const Cards = ({ data, index }) => {
  const { icons, title, description } = data;
  return (
   <div 
    className="cards">
    <ion-icon className="icon" name={icons}></ion-icon>
    <div className="cards-info">
     <p className="title">{title}</p>
     <p className="description">{description}</p>
    </div>
   </div>
  )
}

export const CardsExperience = ({ data }) => {
  const { title, from, logo, date: { ins, out } = "tidak", achievement, description: { one, sec } = "tidak", stack } = data;
  
  return (
   <div className="cards-experience">
    <div className="experience-header-title">
     <p className="title">{title}</p>
     {from ? (
      <>
       <span>
        <div>
         <ion-icon name="business"></ion-icon>
         <p className="description">{from}</p>
        </div>
        <div className="date">
         <p className="date-experience">{ins} ➔ {out}</p>
        </div>
       </span>
       <Avatar name={logo} />
      </>) :
     (null)}
    </div>
    {from ? (
    <div className="experience-description">
     <p className="description">{one}</p>
     <ul className="list-experience">
      <EachUtils
       of={achievement}
       render={(value, index) => (
        <li key={index} className="description items-list">{value}</li>
      )}/>
     </ul>
     <p className="description">{sec}</p>
     {stack ? (
      <div className="list">
       <EachUtils
        of={["1", "2", "3"]}
        render={(value, index) => (
         <BubbleSelected key={index} />
        )}/>
      </div>) : (null)
     }
    </div>) : (null)}
   </div>
  )
}

export default Cards;