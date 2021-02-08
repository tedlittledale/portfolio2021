import React, { useState } from "react";
import styled, { css } from "styled-components";
import { withProp } from "styled-tools";
import { remove } from "ramda";
import { media } from "../utils/media";
import ArrowRight from "./ArrowRight";
import ArrowLeft from "./ArrowLeft";

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid: 100% / 40px 1fr 40px;
  ${media.phablet`
    grid: 100% / 1fr;
  `}
  grid-gap: 20px;
  align-items: center;
  button {
    background: none;
    border: none;
    outline: none;
    cursor: pointer;
    &:disabled {
      opacity: 0.5;
    }
    ${media.phablet`
        top:20px;
        position:absolute;
        z-index:100;
        &:first-child{
            left:10px;
        }
        &:last-child{
            left:auto;
            right:10px;
        }
    `}
  }
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
  const [isAnimating, setIsAnimating] = useState(false);
  const incrementCarouse = (increment) => {
    setCarouselPosition(carouselPosition + increment);
    setTimeout(() => setIsAnimating(false), speed - 200);
  };
  let orderedChildren;
  if (children.length === 2) {
    orderedChildren = [...children, ...children];
  } else if (children.length % 2 === 0) {
    orderedChildren = [children[children.length - 1], ...children];
  } else {
    orderedChildren = children;
  }
  const items = orderedChildren.length;
  const itemsOrder = [-1, 0, 1].map(function (i) {
    const mod = (i - carouselPosition) % items;
    return mod >= 0 ? mod + 1 : items + mod + 1;
  });

  return (
    <Wrapper>
      <button
        aria-label="Previous item"
        onClick={(e) => {
          e.preventDefault();
          setIsAnimating(true);
          setAnimate("left");
          setTimeout(() => {
            setAnimate(null);
            incrementCarouse(1);
          }, 1005);
        }}
        disabled={isAnimating}
      >
        <ArrowLeft bg={bgc} />
      </button>
      <CarouselMask>
        <CarouselStrip
          speed={speed}
          animate={animate}
          items={items}
          carouselPosition={carouselPosition}
          itemsOrder={itemsOrder}
        >
          {orderedChildren}
        </CarouselStrip>
      </CarouselMask>
      <button
        aria-label="Next item"
        onClick={(e) => {
          e.preventDefault();
          setIsAnimating(true);
          setAnimate("right");
          setTimeout(() => {
            setAnimate(null);
            incrementCarouse(-1);
          }, 1005);
        }}
        disabled={isAnimating}
      >
        <ArrowRight bg={bgc} />
      </button>
    </Wrapper>
  );
};

export default Carousel;
