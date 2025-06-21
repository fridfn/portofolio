import React from 'react';
import metadata from "@/metadata";
import styled from 'styled-components';
import Marquee from "react-fast-marquee";
import EachUtils from "@/utils/EachUtils";
import CarouselCards from "@/component/widget/carousel"


const InfiniteScrollCards = ({ data }) => {
  return (
   <StyledWrapper>
     <Marquee speed={30} delay={0.1} direction="right" gradient={true} gradientColor="#1A1A1A" gradientWidth={"5%"} pauseOnHover={false}>
       <EachUtils
         of={data}
         render={(value, index) => (
           <CarouselCards key={index} data={value} />
         )}/>
     </Marquee>
   </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .rfm-marquee-container, .rfm-marquee-container .rfm-marquee {
   overflow: hidden;
  }
  
  .rfm-marquee-container .rfm-marquee {
   display: flex;
   flex-direction: row;
  }
  
  .rfm-marquee-container .rfm-marquee .rfm-initial-child-container .rfm-child, .rfm-marquee-container .rfm-marquee .rfm-child {
   display: flex;
   position: relative;
   flex-direction: row;
   width: max-content;
  }
  
  .rfm-marquee-container .rfm-marquee .bubble {
   width: 250px!important;
   word-break: break-all;
   margin-left: 50px;
  }
`;

export default InfiniteScrollCards;
