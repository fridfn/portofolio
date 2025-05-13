import React from "react"
import Avatar from "@/component/ui/avatar"
import { getImage } from "@/utils/getImage"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Navigation, Autoplay } from 'swiper/modules'

const CarouselCards = ({ data }) => {
  const { client, from, comment, avatar } = data;
  return (
   <div className='carousel-box'>
     <div className='bubble'>
       <p className='description'>{comment}</p>
     </div>
     <div className='wrapper'>
      <Avatar name={avatar} />
     <div className='client-info'>
      <p className='title'>{client}</p>
      <p className='info'>{from}</p>
     </div>
    </div>
   </div>
 );
}



export default CarouselCards