import React from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import { prop } from "styled-tools";
import Image from "next/image";
import { useNextSanityImage } from "next-sanity-image";
import { media } from "../utils/media";
import client from "../utils/sanityClient";

import Carousel from "./Carousel";
import Content from "./Content";

const Wrapper = styled.div`
  padding: 30px;
  ${media.phablet`
    padding: 0px;
  
  `}
  height: 100%;
`;

const Item = styled.div`
  height: 100%;
  display: grid;
  align-content: end;
  padding: 0px 0 40px 0;
  ${media.phablet`
  padding: 0px 0 20px 0;
  
  `}
  h2 {
    font-size: 30px;
  }
`;

const BGWrap = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;

const CarouselSection = ({ bgc, carouselItems }) => {
  console.log({ carouselItems });
  return (
    <Wrapper>
      <Carousel bgc={bgc}>
        {carouselItems.map(({ title: { name, link }, image, body }) => {
          const imageProps = useNextSanityImage(client, image);
          const customProps = { ...imageProps, layout: "fill" };
          console.log({ imageProps });
          delete customProps.width;
          delete customProps.height;
          return (
            <Item>
              <BGWrap>
                <Image
                  //   alt="Twitter"
                  //   src="/nathan-dumlao-4FHF4kCnj8A-unsplash.jpg"
                  //   layout="fill"
                  {...customProps}
                  objectFit="cover"
                  quality={100}
                />
              </BGWrap>
              <Content bgc={bgc}>
                <h2>
                  {link ? (
                    <a href={link} target="_blank" rel="noopener">
                      {name}
                    </a>
                  ) : (
                    name
                  )}
                </h2>
                <BlockContent blocks={body} {...client.config()} />
              </Content>
            </Item>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

export default CarouselSection;
