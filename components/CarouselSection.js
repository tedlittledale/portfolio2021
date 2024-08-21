import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import { compose } from "ramda";
import { observer } from "mobx-react-lite";
import { withPaths } from "../utils/store";
import { useNextSanityImage } from "next-sanity-image";
import { media } from "../utils/media";
import useIntersect from "../utils/hooks/useIntersect";
import client from "../utils/sanityClient";

import Carousel from "./Carousel";
import Content from "./Content";
import LazyImage from "./LazyImage";

const urlFor = (source) => {
  return builder.image(source);
};

const builder = imageUrlBuilder(client);

const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { href } = mark;
      return (
        <a href={href} target="_blank" rel="noopener">
          {children}
        </a>
      );
    }
  }
};

const Wrapper = styled.div`
  padding: 30px;
  position: relative;
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

const TrackerDiv = styled("div")`
  width: 100%;
  height: 1px;
  width: 100%;
  background: red;
  position: absolute;
  top: -30px;
  z-index: 10000000000;
`;

const CarouselSection = ({ bgc, carouselItems, pageModel, sectionIndex }) => {
  const { currentSection } = pageModel;

  const carouselRef = useRef(null);

  useEffect(() => {
    if (currentSection + 1 >= sectionIndex) {
      const imgs = Array.from(
        carouselRef.current.getElementsByClassName("lazy")
      );

      imgs.map((i) => {
        i.classList.remove("lazy");
        i.srcset = i.dataset.srcset;
      });
    }
  }, [currentSection]);

  return (
    <Wrapper ref={carouselRef}>
      <Carousel bgc={bgc}>
        {carouselItems.map(({ title: { name, link }, image, body }) => {
          const imageProps = useNextSanityImage(client, image);
          const customProps = { ...imageProps, layout: "fill" };

          delete customProps.width;
          delete customProps.height;
          return (
            <Item>
              <BGWrap>
                <LazyImage
                  alt="Scout"
                  src={urlFor(image).width(1080).auto("format").url()}
                  isLazy
                  layout="fill"
                  srcSet={`${urlFor(image)
                    .width(640)
                    .auto("format")
                    .url()} 640w, ${urlFor(image)
                    .width(750)
                    .auto("format")
                    .url()} 750w, ${urlFor(image)
                    .width(828)
                    .auto("format")
                    .url()} 828w, ${urlFor(image)
                    .width(1080)
                    .auto("format")
                    .url()} 1080w, ${urlFor(image)
                    .width(1200)
                    .auto("format")
                    .url()} 1200w, ${urlFor(image)
                    .width(1920)
                    .auto("format")
                    .url()} 1920w, ${urlFor(image)
                    .width(2048)
                    .auto("format")
                    .url()} 2048w, ${urlFor(image)
                    .width(3840)
                    .auto("format")
                    .url()} 3840w`}
                  style={{
                    minWidth: "100%",
                    maxWidth: "100%",
                    minHeight: "100%;",
                    maxHeight: "100%;",
                    objectFit: "cover"
                  }}
                />
                {/* <LazyLoadImage
                  alt={image.alt}
                  objectFit="cover"
                  src={urlFor(image).url()} // use normal <img> attributes as props
                /> */}
                {/* <Image
                  //   alt="Twitter"
                  //   src="/nathan-dumlao-4FHF4kCnj8A-unsplash.jpg"
                  //   layout="fill"
                  {...customProps}
                  objectFit="cover"
                  quality={100}
                /> */}
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
                <BlockContent
                  serializers={serializers}
                  blocks={body}
                  {...client.config()}
                />
              </Content>
            </Item>
          );
        })}
      </Carousel>
    </Wrapper>
  );
};

export default compose(withPaths(["pageModel"]), observer)(CarouselSection);
