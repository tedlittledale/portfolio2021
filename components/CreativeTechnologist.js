import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";
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

const CreativeTechnologist = ({ bgc }) => {
  return (
    <Wrapper>
      <Carousel bgc={bgc}>
        <Item>
          <BGWrap>
            <Image
              alt="Twitter"
              src="/nathan-dumlao-4FHF4kCnj8A-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>Twitter</h2>
            <p>
              I spent three years working as a Senior Creative Technologist
              within{" "}
              <a
                href="https://blog.twitter.com/en_us/topics/product/2019/Twitter-next.html"
                target="_blank"
                rel="noopener"
              >
                Twitter Next
              </a>{" "}
              (Twitter's in house brand creative team).
            </p>
            <p>
              One of my principal responsibilities was to rapidly build
              prototypes to road test solutions before pitching to brands. In
              addition I acted as technical project manager for campaigns that
              made to production.
            </p>
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
          <Content bgc={bgc}>
            <h2>
              <a
                href="https://marketing.twitter.com/en_gb/success-stories/how-cadbury-brought-the-good-news-with-the-launch-of-orange-twirl-on-twitter"
                target="_blank"
                rel="noopener"
              >
                #TwirlOrange
              </a>
            </h2>
            <p>
              I worked closely with VCCP on a world first, a Twitter only
              presale for limited edition Twirl Orange bars.{" "}
            </p>
            <p>
              Acting as technical lead I helped execute a campaign that involved
              a combination of live streaming video and the Twitter api to
              deliver a unique experience that could only have been executed on
              Twitter.
            </p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Prototyping"
              src="/florian-olivo-4hbJ-eymZ1o-unsplash.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>Rapid prototyping</h2>
            <p>
              Getting something built quickly that you can actually interact
              with is the best way both to test and iterate creative ideas but
              is also the best way to sell an idea to a client. I've developed a{" "}
              <a
                href="https://github.com/tedlittledale/prototyping-boilerplate"
                target="_blank"
                rel="noopener"
              >
                reliable stack
              </a>{" "}
              that allows me to get prototypes out the door quickly that are
              also able to scale if the idea then needs developing into a full
              solution.
            </p>
          </Content>
        </Item>
      </Carousel>
    </Wrapper>
  );
};

export default CreativeTechnologist;
