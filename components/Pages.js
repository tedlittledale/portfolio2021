import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AnimatedFill from "./AnimatedFill";
import About from "./About";
import CreativeTechnologist from "./CreativeTechnologist";
import FrontEnd from "./FrontEnd";
import DataViz from "./DataViz";
import Startups from "./Startups";
import Contact from "./Contact";

const Wrapper = styled("div")`
  display: grid;
  grid-auto-rows: 100vh;
  > div {
    height: 100%;
  }
`;

const SomeContent = styled.div`
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

const Pages = ({ children }) => {
  const [pageHeight, setPageHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePercent, setPagePercent] = useState(0);
  const sectionCount = 7;
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

      if (!ticking) {
        window.requestAnimationFrame(function () {
          setCurrentPage(
            Math.floor(
              (last_known_scroll_position + pageHeight / 2) / pageHeight
            )
          );
          setPagePercent(
            Math.round(
              (((last_known_scroll_position + documentHeight / 2) %
                pageHeight) /
                pageHeight) *
                100
            ) / 100
          );
          ticking = false;
        });

        ticking = true;
      }
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
        stackOrder={10}
        ready={true}
        bgc="#ef476f"
        next="#FAC216"
        isCurrent={currentPage === 0}
        pagePercent={currentPage >= 1 ? 100 : pagePercent}
        title="Ted Littledale"
      />
      <AnimatedFill
        stackOrder={9}
        ready={currentPage >= 1}
        bgc="#FAC216"
        next="#06d6a0"
        isCurrent={currentPage === 1}
        pagePercent={
          currentPage >= 2 ? 100 : currentPage === 1 ? pagePercent : 0
        }
        title="About"
      >
        <SomeContent>
          <About />
        </SomeContent>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={8}
        ready={currentPage >= 2}
        bgc="#06d6a0"
        next="#118ab2"
        isCurrent={currentPage === 2}
        pagePercent={
          currentPage >= 3 ? 100 : currentPage === 2 ? pagePercent : 0
        }
        title="Creative technologist"
      >
        {" "}
        <SomeContent>
          <CreativeTechnologist bgc="#06d6a0" />
        </SomeContent>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={7}
        ready={currentPage >= 3}
        bgc="#118ab2"
        next="#ef476f"
        isCurrent={currentPage === 3}
        pagePercent={0}
        title="Front End"
      >
        {" "}
        <SomeContent>
          <FrontEnd bgc="#118ab2" />
        </SomeContent>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={6}
        ready={currentPage >= 4}
        bgc="#ef476f"
        next="#FAC216"
        isCurrent={currentPage === 4}
        pagePercent={0}
        title="Data Viz"
      >
        {" "}
        <SomeContent>
          <DataViz bgc="#ef476f" />
        </SomeContent>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={5}
        ready={currentPage >= 5}
        bgc="#FAC216"
        next="#06d6a0"
        isCurrent={currentPage === 5}
        pagePercent={0}
        title="Startups"
      >
        {" "}
        <SomeContent>
          <Startups bgc="#FAC216" />
        </SomeContent>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={4}
        ready={currentPage >= 6}
        bgc="#06d6a0"
        next="#118ab2"
        isCurrent={currentPage === 6}
        pagePercent={0}
        title="Contact"
      >
        {" "}
        <SomeContent>
          <Contact />
        </SomeContent>
      </AnimatedFill>
    </Wrapper>
  );
};

export default Pages;
