import React from "react"
import metadata from "@/metadata"
import EachUtils from "@/utils/EachUtils"
import { Swiper, SwiperSlide } from "swiper/react"
import CarouselCards from  "@/component/widget/carousel"
import Banner from  "@/component/ui/banner"
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import bannerAwards from "@/component/ui/bannerAwards"
import CardsIcons from "@/component/widget/cardsIcons"

const ComponentList = {
 cards: CarouselCards,
 banner: Banner,
 certificate: bannerAwards,
 updates: CardsIcons
}

const UseSwiper = ({ data, type, view, action }) => {
  const ComponentSwiper = ComponentList?.[type]
  return (
   <div>
    <Swiper
      loop={true}
      spaceBetween={50}
      slidesPerView={view}
      autoplay={{ delay: 3000 }}
      pagination={{ clickable: true }}
      modules={[ Pagination, Navigation, Autoplay ]}>
      {data.map((value, index) => (
       <SwiperSlide key={index}>
        <ComponentSwiper data={value} key={index} action={action} index={index} />
       </SwiperSlide>
      ))}
    </Swiper>
   </div>
 );
}

export default UseSwiper;