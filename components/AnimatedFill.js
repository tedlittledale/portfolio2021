import React from "react";
import styled, { keyframes, css } from "styled-components";
import { withProp } from "styled-tools";
import { media } from "../utils/media";

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  background: var(--color-offwhite);
  ${withProp(
    ["stackOrder"],
    (stackOrder) => `
        z-index:${100 + stackOrder};
    `
  )};
  section > div,
  section > div > div {
    position: relative;
    height: 100%;
    display: grid;
    align-items: center;
    justify-content: center;
    grid: 100% / 1fr;
  }
  section > div:first-child {
    height: 100vh;
    width: 100%;
    transition: transform 800ms ease-in-out;
    transform: scaleY(0);
    transform-origin: 0 0;
    z-index: 10;
    position: absolute;
    ${withProp(
      ["bgc"],
      (bgc) => `
          background: ${bgc};
        `
    )};
    ${withProp(["ready", "bgc"], (ready, bgc) => {
      if (ready) {
        return css`
          background: ${bgc};
          transform: scaleY(1);
        `;
      }
    })};
  }
  section > div:last-child {
    /* z-index: 100; */
    justify-content: center;
  }
  section > div > div > div {
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
    ${media.phablet`
    ${withProp(["hasChildren"], (hasChildren) => {
      if (hasChildren) {
        return css`
          display: none;
        `;
      }
    })};
    
  `}
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
      ["next", "isCurrent", "ready", "stackOrder", "hasChildren"],
      (next, isCurrent, ready, stackOrder, hasChildren) => `
          background: ${next};
          position: ${isCurrent ? "fixed" : "absolute"};
          z-index: ${10 + stackOrder};
          
            opacity: ${ready ? 1 : 0};

            top: ${isCurrent ? "0vh" : "50vh"};
            left:${stackOrder % 2 !== 0 ? "16.5vw" : "83.5vw"};
            
        `
    )};
    ${media.phablet`
        ${withProp(["stackOrder", "hasChildren"], (stackOrder, hasChildren) => {
          if (hasChildren) {
            return css`
              left: ${stackOrder % 2 !== 0 ? "2vw" : "96vw"};
            `;
          }
        })};
    `}
  }
  div.mask {
    position: absolute;
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 0 100%, 100% 100%, 100% 0);
    clip: rect(0, auto, auto, 0);
    ${withProp(
      ["ready", "bgc", "stackOrder"],
      (ready, bgc, stackOrder) => `
          z-index: ${49 + stackOrder};
        `
    )};
  }

  section {
    height: 100%;
    ${withProp(["hasChildren", "stackOrder"], (hasChildren, stackOrder) => {
      if (hasChildren) {
        return css`
          display: grid;
          grid: ${stackOrder % 2 === 0 ? "1fr / 2fr 1fr" : "1fr / 1fr 2fr"};
          > div:nth-child(2) {
            order: ${stackOrder % 2 === 0 ? 2 : 1};
          }
          > div:last-child {
            z-index: ${52 + stackOrder};
            order: ${stackOrder % 2 === 0 ? 1 : 2};
          }
        `;
      }
    })};
    ${media.phablet`
        grid: auto 1fr / 1fr;
        align-content:start;
        > div:nth-child(2) {
            order: 1;
          }
          > div:last-child {
            
            order: 2;
          }
    `}
  }
`;

const Title = styled.div`
  display: grid;
  ${withProp(
    ["stackOrder"],
    (stackOrder) => `
  justify-content: ${stackOrder % 2 === 0 ? "end" : "start"};`
  )};
  h2 {
    color: var(--color-offwhite);
    font-size: 90px;
    ${withProp(["titleLength"], (titleLength) => {
      const size = 90 / Math.max(1, titleLength / 15);
      return `font-size:${size}px`;
    })};
    display: inline-block;
    padding: 0 40px;
    ${withProp(
      ["next"],
      (next) => `
          background: ${next};
        `
    )};
    ${media.phablet`
    ${withProp(["titleLength"], (titleLength) => {
      const size = 60 / Math.max(1, titleLength / 15);
      return `font-size:${size}px`;
    })};
  
    `}
  }
`;

const Content = styled.div`
  padding: 30px;
  ${media.phablet`
    
    ${withProp(
      ["stackOrder"],
      (stackOrder) => `
  ${
    stackOrder % 2 !== 0
      ? "padding: 30px 0 30px 30px;"
      : "padding: 30px 30px 30px 0px;"
  };`
    )};
  `}
  > div {
    background: var(--color-offwhite);
    height: 100%;
  }
`;

const AnimatedFill = ({
  children,
  ready,
  bgc,
  next,
  pagePercent,
  isCurrent,
  stackOrder,
  imgsrc,
  title
}) => {
  const hasChildren = !!children;
  const titleLength = title.length;
  return (
    <Wrapper
      {...{
        ready,
        bgc,
        next,
        pagePercent,
        isCurrent,
        stackOrder,
        hasChildren,
        titleLength
      }}
    >
      <section>
        <div></div>
        <div>
          <div>
            <div className="mask">
              <div className="bar"></div>
            </div>
            <div className="fill"></div>
            <Title
              next={next}
              titleLength={titleLength}
              stackOrder={stackOrder}
            >
              <h2>{title}</h2>
            </Title>
          </div>
        </div>
        <Content ready={ready} imgsrc={imgsrc} stackOrder={stackOrder}>
          {children}
        </Content>
      </section>
    </Wrapper>
  );
};

export default AnimatedFill;
