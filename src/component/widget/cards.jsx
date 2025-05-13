import React from "react"
import Avatar from "@/component/ui/avatar"
import BubbleSelected from "@/component/ui/bubbleSelected"
import EachUtils from "@/utils/EachUtils"

const Cards = ({ data, index }) => {
  const { icons, title, description } = data;
  const setEffect = index > 3;
  return (
   <div 
    className="cards"
    data-aos-delay={index * 1500}
    data-aos-duration={index * 1000}
    data-aos={setEffect ? "zoom-in-down" : ""}>
    <ion-icon className="icon" name={icons}></ion-icon>
    <div className="cards-info">
     <p className="title">{title}</p>
     <p className="description">{description}</p>
    </div>
   </div>
  )
}

export const CardsExperience = ({ data }) => {
  return (
   <div className="cards-experience">
    <div className="experience-header-title">
     <p className="title">
      Senior Frontend Developer Company
     </p>
     <span>
      <div>
       <ion-icon name="business"></ion-icon>
       <p className="description">Google Studio</p>
      </div>
      <div className="date">
       <p className="date-experience">Oct 2023 ➔ Jan 2025</p>
      </div>
     </span>
     <Avatar name="avatar" />
    </div>
    <div className="experience-description">
     <p className="description">excepteur excepteur qui mollit nostrud adipisicing aliqua proident exercitation labore aliqua laborum amet quis sunt veniam ut labore aute Lorem</p>
     <ul className="list-experience">
      <li className="description items-list">Machine Learning</li>
      <li className="description items-list">Natural Leanguage Processing (NLP)</li>
      <li className="description items-list">Neural Networks</li>
     </ul>
     <p className="description">excepteur excepteur qui mollit nostrud adipisicing aliqua proident exercitation labore aliqua laborum amet quis sunt veniam ut labore aute Lorem</p>
     <div className="list">
      <EachUtils
       of={["1", "2", "3"]}
       render={(value, index) => (
        <BubbleSelected key={index} />
       )}/>
     </div>
    </div>
   </div>
  )
}

export default Cards;