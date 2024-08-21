import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { compose } from "ramda";
import { observer } from "mobx-react-lite";
import { withPaths } from "../utils/store";

import CaseStudyFill from "./CaseStudyFill";
import Contact from "./Contact";
import CaseStudySection from "./CaseStudySection";

const Wrapper = styled("div")`
  display: grid;

  > div {
    height: 100%;
  }
`;

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

const CaseStudy = ({
  data,
  pageModel,
  colors = ["#ef476f", "#FAC216", "#06d6a0", "#118ab2"]
}) => {
  console.log({ data });
  const { caseStudyTitle, caseStudySections } = data[0];

  const [pageHeight, setPageHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePercent, setPagePercent] = useState(0);
  const sectionCount = data.length + 2;

  useEffect(() => {
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
      setPageHeight(document.documentElement.scrollHeight / sectionCount);
    };

    setDocumentHeight(document.documentElement.scrollHeight);
    setPageHeight(document.documentElement.scrollHeight / sectionCount);
    let last_known_scroll_position = 0;
    let ticking = false;
    document.removeEventListener("scroll", updateSroll);
    const updateSroll = (e) => {
      last_known_scroll_position = window.scrollY;
      const currentSection = Math.floor(
        (last_known_scroll_position + pageHeight / 2) / pageHeight
      );
      setCurrentPage(currentSection);
      pageModel.setCurrentSection(currentSection);
    };
    document.addEventListener("scroll", updateSroll);
    return () => {
      window.removeEventListener("resize", updateHeight);
      document.removeEventListener("scroll", updateSroll);
    };
  }, [pageHeight]);
  return (
    <Wrapper>
      <CaseStudyFill
        stackOrder={data.length}
        ready={true}
        bgc={colors[0]}
        next={colors[1]}
        isCurrent={currentPage === 0}
        pagePercent={currentPage >= 1 ? 100 : pagePercent}
        title={caseStudyTitle}
      />
      {caseStudySections.map((sectionData, idx) => (
        <CaseStudySection
          sectionIndex={idx + 1}
          currentPage={currentPage}
          stackOrder={data.length - idx + 1}
          sectionData={sectionData}
          key={idx}
          bgc={colors[(idx + 1) % 4]}
          nextColor={colors[(idx + 2) % 4]}
        />
      ))}
    </Wrapper>
  );
};

export default compose(withPaths(["pageModel"]), observer)(CaseStudy);
