import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AnimatedFill from "./AnimatedFill";
import About from "./About";
import CreativeTechnologist from "./CreativeTechnologist";
import FrontEnd from "./FrontEnd";
import DataViz from "./DataViz";
import Startups from "./Startups";
import Contact from "./Contact";
import Dog from "./Dog";
import Section from "./Section";

const Wrapper = styled("div")`
  display: grid;
  grid-auto-rows: 100vh;
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

const colors = ["#ef476f", "#FAC216", "#06d6a0", "#118ab2"];

const Pages = ({ data }) => {
  console.log({ data });
  const [pageHeight, setPageHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePercent, setPagePercent] = useState(0);
  const sectionCount = data.length + 2;
  console.log({ currentPage, pagePercent });
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
      setCurrentPage(
        Math.floor((last_known_scroll_position + pageHeight / 2) / pageHeight)
      );
    };
    document.addEventListener("scroll", updateSroll);
    return () => {
      window.removeEventListener("resize", updateHeight);
      document.removeEventListener("scroll", updateSroll);
    };
  }, [pageHeight]);
  return (
    <Wrapper>
      <AnimatedFill
        stackOrder={data.length}
        ready={true}
        bgc={colors[0]}
        next={colors[1]}
        isCurrent={currentPage === 0}
        pagePercent={currentPage >= 1 ? 100 : pagePercent}
        title="Ted Littledale"
      />
      {data.map((sectionData, idx) => (
        <Section
          sectionIndex={idx + 1}
          currentPage={currentPage}
          stackOrder={data.length - idx + 1}
          sectionData={sectionData}
          key={idx}
          bgc={colors[(idx + 1) % 4]}
          nextColor={colors[(idx + 2) % 4]}
        />
      ))}
      <AnimatedFill
        stackOrder={0}
        ready={currentPage >= data.length + 1}
        bgc="#118ab2"
        bgc={colors[(data.length + 1) % 4]}
        next={colors[(data.length + 2) % 4]}
        isCurrent={currentPage === data.length + 1}
        pagePercent={0}
        islast={true}
        title="Contact"
      >
        <Content>
          <Contact />
        </Content>
      </AnimatedFill>
    </Wrapper>
  );
};

export default Pages;
