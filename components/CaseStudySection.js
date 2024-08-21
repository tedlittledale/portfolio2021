import React from "react";
import styled from "styled-components";

import AnimatedFill from "./AnimatedFill";
import CaseStudyFill from "./CaseStudyFill";
import CaseStudyBody from "./CaseStudyBody";
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

const CaseStudySection = ({
  bgc,
  nextColor,
  currentPage,
  sectionIndex,
  stackOrder,
  sectionData
}) => {
  const { caseStudySectionBody, caseStudySectionTitle } = sectionData;

  return (
    <CaseStudyFill
      stackOrder={stackOrder}
      ready={currentPage >= sectionIndex}
      bgc={bgc}
      next={nextColor}
      isCurrent={currentPage === sectionIndex}
      title={caseStudySectionTitle}
      id={caseStudySectionTitle.replace(/\s+/g, "-").toLowerCase()}
    >
      <Content>
        {caseStudySectionBody && (
          <CaseStudyBody
            themeColor={bgc}
            caseStudySectionBody={caseStudySectionBody}
          />
        )}
      </Content>
    </CaseStudyFill>
  );
};

export default CaseStudySection;
