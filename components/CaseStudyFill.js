import React from "react";
import styled, { keyframes, css } from "styled-components";
import { withProp } from "styled-tools";
import { media } from "../utils/media";

const Wrapper = styled.div`
  height: 100%;
  overflow: hidden;
  position: relative;
  background: white;
  ${withProp(
    ["stackOrder"],
    (stackOrder) => `
        z-index:${100 + stackOrder};
    `
  )};
  section > div,
  section > div > div {
    height: 100%;
    display: grid;
    align-items: start;

    justify-content: center;
    grid: 100% / 1fr;
  }
  section > div:first-child {
    min-height: 100vh;
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
    ${withProp(
      ["stackOrder"],
      (stackOrder) => `
          z-index: ${51 + stackOrder};
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

  section {
    height: 100%;
    position: relative;
    ${withProp(["hasChildren", "stackOrder"], (hasChildren, stackOrder) => {
      if (hasChildren) {
        return css`
          display: grid;
          grid: ${stackOrder % 1 !== 0 ? "1fr / 2fr 1fr" : "1fr / 1fr 2fr"};
          > div:nth-child(2) {
            order: ${stackOrder % 1 !== 0 ? 2 : 1};
          }
          > div:last-child {
            z-index: ${52 + stackOrder};
            order: ${stackOrder % 1 !== 0 ? 1 : 2};
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
  position: relative;
  ${withProp(
    ["stackOrder"],
    (stackOrder) => `
  justify-content: ${stackOrder % 1 === 0 ? "end" : "start"};`
  )};
  h2 {
    margin-top: 25px;
    ${withProp(
      ["bgc"],
      (bgc) => `
          color: ${bgc};
        `
    )};

    ${withProp(["titleLength"], (titleLength) => {
      const size = 60 / Math.max(1, titleLength / 15);
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
      const size = 30 / Math.max(1, titleLength / 15);
      return `font-size:${size}px`;
    })};

line-height: inherit;
  
    `}
  }
`;

const Content = styled.div`
  padding: 25px 30px;
  ${media.phablet`
    
    ${withProp(
      ["stackOrder"],
      (stackOrder) => `
  ${
    stackOrder % 2 !== 0
      ? "padding: 25px 0 30px 30px;"
      : "padding: 25px 30px 30px 0px;"
  };`
    )};
  `}
  > div {
    padding: 10px 0;
    background: white;
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
  id,
  imgsrc,
  title,
  islast = false
}) => {
  const hasChildren = !!children;
  const titleLength = title.length;
  return (
    <Wrapper
      {...{
        ready: true,
        bgc,
        next,
        pagePercent,
        isCurrent,
        stackOrder,
        hasChildren,
        titleLength,
        id
      }}
    >
      <section>
        <div></div>
        <div>
          <div>
            <Title
              bgc={bgc}
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
