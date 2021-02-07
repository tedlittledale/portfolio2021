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

const Startups = ({ bgc }) => {
  return (
    <Wrapper>
      <Carousel bgc={bgc}>
        <Item>
          <BGWrap>
            <Image
              alt="SecondSync"
              src="/SecondSync-BARB-integration-image.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>Secondsync</h2>
            <p>
              As co-founder, Product Director and Front End Lead I helped build
              SecondSync from the ground up. In two years we developed our
              social listening platform to become the defacto way Social TV
              audiences were measured across the industry.
            </p>
            <p>
              SecondSync was{" "}
              <a
                href="https://www.theguardian.com/technology/2014/apr/01/twitter-buys-uk-social-tv-firm-secondsync-second-screen-viewing"
                target="_blank"
                rel="noopener"
              >
                acquired by Twitter{" "}
              </a>
              in 2014.
            </p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Poli"
              src="/Poli.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>Poli</h2>
            <p>
              Poli set out to disrupt how opinion polling is conducted, creating
              a platform where polling took place entirely within messenger
              apps, without the need to install an app or visit a website, thus
              removing the friction that has up to now, limited the number of
              people taking part in polls.
            </p>
          </Content>
        </Item>
      </Carousel>
    </Wrapper>
  );
};

export default Startups;
