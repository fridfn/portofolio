import React, { useState, useEffect } from "react"
import EachUtils from "@/utils/EachUtils"
import Cards from "@/component/widget/cards"
import Progress from "@/component/ui/progress"
import Language from "@/component/ui/language"
import InfiniteScroll from "react-infinite-scroll-component"
import CardsProject from "@/component/widget/cardsProject"
import CardsAwards from "@/component/widget/cardsAwards"
import { Socials } from "@/pages/section/contact"

const ComponentList = {
 socials: Socials,
 cards: Cards,
 progress: Progress,
 language: Language,
 awards: CardsAwards,
 project: CardsProject,
}

const UseListing = ({ data, scroll, type, handler }) => {
  const ComponentRender = ComponentList?.[type]
  const items = data;
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 4))
  const [hasMore, setHasMore] = useState(true)
  
  const fetchMoreData = () => {
   const nextItems = items.slice(visibleItems.length, visibleItems.length + 4)
   
   setVisibleItems(prevItems => [...prevItems, ...nextItems])
  }
  
  useEffect(() => {
   setHasMore(data.length !== visibleItems.length ? true : false)
  }, [visibleItems])
  
  return (
   <InfiniteScroll
    hasMore={hasMore}
    next={scroll ? fetchMoreData : null}
    dataLength={visibleItems.length}
    endMessage={
     <p className="cards-info description">
     </p>
    }>
    <EachUtils
     of={visibleItems}
     render={(render, index) => (
      <div 
       key={index}
       style={{ width: "100%" }}
       data-aos-delay={index * 1500}
       data-aos-duration={index * 1000}
       data-aos={index >= items.slice(0, 4).length && "zoom-in-down"}>
        <ComponentRender data={render} index={index} handler={handler} />
      </div>
     )}/>
    {hasMore && (
     <button
      className="button"
      onClick={fetchMoreData}>
       <ion-icon name='caret-down'></ion-icon>
       More
     </button>
     )}
    </InfiniteScroll>
  )
}

export default UseListing;