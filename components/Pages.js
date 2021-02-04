import React, { useEffect, useState } from "react";
import styled from "styled-components";

import AnimatedFill from "./AnimatedFill";

const Wrapper = styled("div")`
  display: grid;
  grid: 100vh 100vh 100vh 100vh / 1fr;
  > div {
    height: 100%;
  }
  h2 {
    color: white;
    font-size: 90px;
    display: inline-block;
  }
`;

const Pages = ({ children }) => {
  const [pageHeight, setPageHeight] = useState(0);
  const [documentHeight, setDocumentHeight] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [pagePercent, setPagePercent] = useState(0);
  console.log({ currentPage, pagePercent });
  useEffect(() => {
    const updateHeight = () => {
      setDocumentHeight(document.documentElement.scrollHeight);
      setPageHeight(window.innerHeight);
    };
    setDocumentHeight(document.documentElement.scrollHeight);
    setPageHeight(window.innerHeight);
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
        stackOrder={4}
        ready={true}
        bgc="#ef476f"
        next="#ffd166"
        isCurrent={currentPage === 0}
        pagePercent={currentPage >= 1 ? 100 : pagePercent}
      >
        <div>
          <div className="bar"></div>
          <div className="fill"></div>
          <div>
            <h2>One</h2>
          </div>
        </div>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={3}
        ready={currentPage >= 1}
        bgc="#ffd166"
        next="#06d6a0"
        isCurrent={currentPage === 1}
        pagePercent={
          currentPage >= 2 ? 100 : currentPage === 1 ? pagePercent : 0
        }
      >
        <div>
          <div className="bar"></div>
          <div className="fill"></div>
          <div>
            <h2>Two</h2>
          </div>
        </div>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={2}
        ready={currentPage >= 2}
        bgc="#06d6a0"
        next="#118ab2"
        isCurrent={currentPage === 2}
        pagePercent={
          currentPage >= 3 ? 100 : currentPage === 2 ? pagePercent : 0
        }
      >
        <div>
          <div className="bar"></div>
          <div className="fill"></div>
          <div>
            <h2>Three</h2>
          </div>
        </div>
      </AnimatedFill>
      <AnimatedFill
        stackOrder={1}
        ready={currentPage >= 3}
        bgc="#118ab2"
        next="#ffd166"
        isCurrent={currentPage === 3}
        pagePercent={0}
      >
        <div>
          <div className="bar"></div>
          <div className="fill"></div>
          <div>
            <h2>Four</h2>
          </div>
        </div>
      </AnimatedFill>
    </Wrapper>
  );
};

export default Pages;
