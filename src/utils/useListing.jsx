import React, { useState, useEffect } from "react"
import EachUtils from "@/utils/EachUtils"
import Cards from "@/component/widget/cards"
import Progress from "@/component/ui/progress"
import Language from "@/component/ui/language"
import InfiniteScroll from "react-infinite-scroll-component"
import CardsProject from "@/component/widget/cardsProject"
import CardsAwards from "@/component/widget/cardsAwards"
import { Socials } from "@/component/widget/section/contact"

const ComponentList = {
 cards: Cards,
 socials: Socials,
 progress: Progress,
 language: Language,
 awards: CardsAwards,
 project: CardsProject,
}

const UseListing = ({ component, scroll, type }) => {
  const ComponentRender = ComponentList?.[type]
  const items = component;
  const [visibleItems, setVisibleItems] = useState(items.slice(0, 4))
  const [hasMore, setHasMore] = useState(true)
  
  const fetchMoreData = () => {
   const nextItems = items.slice(visibleItems.length, visibleItems.length + 4)
   
   setVisibleItems(prevItems => [...prevItems, ...nextItems])
  }
  
  useEffect(() => {
   setHasMore(component.length !== visibleItems.length ? true : false)
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
      <ComponentRender data={render} key={index} index={index} />
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