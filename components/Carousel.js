import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withProp } from "styled-tools";

import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid: 100% / 40px 1fr 40px;
  grid-gap: 20px;
  align-items: center;
`;

const CarouselMask = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
`;

const CarouselStrip = styled.div`
  position: absolute;
  display: grid;
  height: 100%;
  ${withProp(
    "items",
    (items) => `
    width:${items * 100}%;
    grid: 1fr / repeat(${items}, 1fr);
  `
  )}
  ${withProp(
    "carouselPosition",
    (carouselPosition) => `
    left:${carouselPosition * 100}%;
  `
  )}
  left:-100%;
  > div {
    width: 100%;
    height: 100%;
    transform: translateX(0);
    ${withProp(["animate", "speed"], (animate, speed) => {
      if (animate === "left") {
        return css`
          transition: transform ${speed}ms ease-in-out;
          transform: translateX(100%);
        `;
      } else if (animate === "right") {
        return css`
          transition: transform ${speed}ms ease-in-out;
          transform: translateX(-100%);
        `;
      }
    })}
    ${withProp("itemsOrder", (itemsOrder) => {
      return css`
        ${itemsOrder.map(
          (order, idx) => `
            &:nth-child(${order}){
                order:${idx + 1}
            }
          `
        )}
      `;
    })}
  }
`;

const CarouselItem = styled.div``;

const Carousel = ({ children, bgc, speed = 800 }) => {
  const [carouselPosition, setCarouselPosition] = useState(0);
  const [animate, setAnimate] = useState(null);
  const incrementCarouse = (increment) => {
    setCarouselPosition(carouselPosition + increment);
  };
  const items = children.length === 2 ? 4 : children.length;
  const itemsOrder = [-1, 0, 1].map(function (i) {
    const mod = (i - carouselPosition) % items;
    return mod >= 0 ? mod + 1 : items + mod + 1;
  });
  console.log({ itemsOrder });

  return (
    <Wrapper>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setAnimate("left");
          setTimeout(() => {
            setAnimate(null);
            incrementCarouse(1);
          }, 1005);
        }}
      >
        <ArrowLeft bg={bgc} />
      </a>
      <CarouselMask>
        <CarouselStrip
          speed={speed}
          animate={animate}
          items={items}
          carouselPosition={carouselPosition}
          itemsOrder={itemsOrder}
        >
          {children.length === 2 ? [...children, ...children] : children}
        </CarouselStrip>
      </CarouselMask>
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setAnimate("right");
          setTimeout(() => {
            setAnimate(null);
            incrementCarouse(-1);
          }, 1005);
        }}
      >
        <ArrowRight bg={bgc} />
      </a>
    </Wrapper>
  );
};

export default Carousel;
