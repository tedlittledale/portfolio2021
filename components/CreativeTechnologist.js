import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { media } from "../utils/media";

import Carousel from "./Carousel";

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

const Content = styled.div`
  padding: 20px;
  background: hsla(210, 36%, 98%, 0.7);
  h2 {
    margin-bottom: 10px;
  }
  ul {
    list-style: disc;
    margin-left: 20px;
  }
  li {
    margin-bottom: 10px;
  }
`;

const CreativeTechnologist = ({ bgc }) => {
  return (
    <Wrapper>
      <Carousel bgc={bgc}>
        <Item>
          <BGWrap>
            <Image
              alt="Mountains"
              src="/nathan-dumlao-4FHF4kCnj8A-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>Twitter</h2>
            <ul>
              <li>
                Three years experience as Senior Creative Technologist within
                Twitter Next (Twitter's in house brand creative team).
              </li>
              <li>
                Rapid prototyping to road test solutions before pitching to
                brands.
              </li>
              <li>
                Acted as technical project manager for ideas that brands took
                live.
              </li>
            </ul>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Mountains"
              src="/Cadbury_Twirl.jpg.twimg.1920.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>#TwirlOrange</h2>
            <ul>
              <li>
                Acted as the Twitter Next's Technical lead on a ​presale for
                Twirl Orange​ bars
              </li>
              <li>
                Helped plan and deliver a campaign that trended #1 Worldwide.
              </li>
              <li>
                Utilised a combination of live streaming video and the tweet api
                to deliver a unique experience that could only have been
                executed on Twitter.
              </li>
            </ul>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Mountains"
              src="/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>Rapid prototyping</h2>
            <p>
              Getting something built quickly that you can actually interact
              with is the best way both to test and iterate creative ideas but
              is also the best way to sell an idea to a client. I've developed a
              reliable stack that allows me to get prototypes out the door
              quickly that are also able to scale if the idea then needs
              developing into a full solution.
            </p>
          </Content>
        </Item>
      </Carousel>
    </Wrapper>
  );
};

export default CreativeTechnologist;
