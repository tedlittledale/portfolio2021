import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { media } from "../utils/media";

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

const Startups = ({ bgc }) => {
  return (
    <Wrapper>
      <Carousel bgc={bgc}>
        <Item>
          <BGWrap>
            <Image
              alt="Scout"
              src="/scout.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>Hi, Scout here.</h2>
            <p>
              I am dog and best friend of Ted. I got my paws on his CMS when he
              was making cup of tea because I think this site is ok, but it just
              needs more dog.
            </p>
            <p>This is picture of me with three balls and stick.</p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Dog with Turnip"
              src="/turnip.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>Turnip</h2>
            <p>
              This is picture of me with a turnip. It was a good turnip when I
              forgot my balls.
            </p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Dog in Rome"
              src="/rome.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>Rome</h2>
            <p>
              This is picture of me outside very old building in Rome. Rome is a
              boring place for an adventure pup like me but I think I look good
              in this picture so I added it. What do you think?
            </p>
          </Content>
        </Item>
      </Carousel>
    </Wrapper>
  );
};

export default Startups;
