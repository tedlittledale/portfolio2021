import React from "react";
import styled from "styled-components";

import AnimatedFill from "./AnimatedFill";
import About from "./About";
import CarouselSection from "./CarouselSection";

const Content = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  h1 {
    height: 100%;
  }
  img {
    height: 100%;
  }
`;

const Section = ({
  bgc,
  nextColor,
  currentPage,
  sectionIndex,
  stackOrder,
  sectionData
}) => {
  const { sectionbody, carouselItems, sectionTitle, sectionHash } = sectionData;
  return (
    <AnimatedFill
      stackOrder={stackOrder}
      ready={currentPage >= sectionIndex}
      bgc={bgc}
      next={nextColor}
      isCurrent={currentPage === sectionIndex}
      title={sectionTitle}
      id={sectionHash}
    >
      <Content>
        {sectionbody && <About themeColor={bgc} sectionBody={sectionbody} />}
        {carouselItems && (
          <CarouselSection
            sectionIndex={sectionIndex}
            bgc={bgc}
            carouselItems={carouselItems}
          />
        )}
      </Content>
    </AnimatedFill>
  );
};

export default Section;
