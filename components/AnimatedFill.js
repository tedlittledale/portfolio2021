import React from "react";
import styled, { keyframes, css } from "styled-components";
import { withProp } from "styled-tools";

const slide = keyframes`
	0%  {
        transform:translateY(-100%);
	}
    100%  {
        transform:translateY(0%);
	}
`;

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  > div,
  > div > div {
    position: relative;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid: 100vh / 1fr;
  }
  > div:first-child {
    height: 100vh;
    width: 100%;
    transition: transform 800ms ease-in-out;
    transform: scaleY(0);
    transform-origin: 0 0;
    z-index: 10;
    position: absolute;
    ${withProp(["ready", "bgc"], (ready, bgc) => {
      if (ready) {
        return css`
          background: ${bgc};
          transform: scaleY(1);
        `;
      }
    })};
  }
  > div:last-child {
    /* z-index: 100; */
    justify-content: center;
  }
  > div > div > div {
    position: relative;
    ${withProp(["ready", "bgc", "stackOrder"], (ready, bgc, stackOrder) => {
      if (ready) {
        return css`
          z-index: ${51 + stackOrder};
          /* background: ${bgc};
          opacity: 1; */
        `;
      }
    })};
    display: grid;
    justify-content: center;
  }
  > div > div h2 {
    padding: 0 40px;
    ${withProp(
      ["next"],
      (next) => `
          background: ${next};
        `
    )};
  }
  div.fill {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 50;
    height: 50vh;
    width: 100%;
    opacity: 0;
    transition: opacity 1ms linear 900ms;
    ${withProp(["ready", "bgc", "stackOrder"], (ready, bgc, stackOrder) => {
      if (ready) {
        return css`
          z-index: ${50 + stackOrder};
          background: ${bgc};
          opacity: 1;
        `;
      }
    })};
  }
  div.bar {
    top: 0vh;
    left: 50vw;
    width: 10px;
    right: 0%;
    transition: opacity 1ms linear 900ms;
    height: 50vh;
    opacity: 0;
    ${withProp(
      ["next", "isCurrent", "ready", "stackOrder"],
      (next, isCurrent, ready, stackOrder) => `
          background: ${next};
          position: ${isCurrent ? "fixed" : "absolute"};
          z-index: ${10 + stackOrder};
          
            opacity: ${ready ? 1 : 0};

            top: ${isCurrent ? "0vh" : "50vh"};
        `
    )};
  }
`;

const AnimatedFill = ({
  children,
  ready,
  bgc,
  next,
  pagePercent,
  isCurrent,
  stackOrder
}) => {
  return (
    <Wrapper {...{ ready, bgc, next, pagePercent, isCurrent, stackOrder }}>
      <div></div>
      <div>{children}</div>
    </Wrapper>
  );
};

export default AnimatedFill;
