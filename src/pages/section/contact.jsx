import React from "react"
import metadata from "@/metadata"
import Forms from "@/component/ui/forms"
import EachUtils from "@/utils/EachUtils"
import UseListing from "@/utils/useListing"

export const Socials = ({ data }) => {
  const { name, link, icons, description } = data
  return (
   <div className="social-media">
    <div className="items">
     <ion-icon className="icon" name={ icons }></ion-icon>
     <div className="wrapper"
      style={{ cursor: 'pointer' }}
      onClick={() => window.open(link, "_blank")}
      >
      <p className="title">{ name }</p>
      <p className="description">{ description }</p>
     </div>
    </div>
   </div>
  )
}

const Contact = ({ data }) => {
  const SOCIAL_MEDIA = metadata.personal.socials;
  return (
   <>
    <div
     className='wrapper-section'
     data-aos="zoom-in-down"
     data-aos-duration="400">
     <span className="greeting">
      <p className='title' id='hightlight'>Contact</p>
     </span>
     <div className="wrapper-content">
      <p className="title">Send me a <span id="hightlight">message</span></p>
      <Forms />
     </div>
     <div className="wrapper-content" id="socials">
      <p className="title">Or If You <span id="hightlight">Prefer</span></p>
      <UseListing data={SOCIAL_MEDIA} type="socials" />
     </div>
    </div>
   </>
  )
}

export default Contact;