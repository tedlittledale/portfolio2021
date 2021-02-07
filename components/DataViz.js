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

const DataViz = ({ bgc }) => {
  return (
    <Wrapper>
      <Carousel bgc={bgc}>
        <Item>
          <BGWrap>
            <Image
              alt="Freedom Calculator"
              src="/Screenshot_2021-01-26_at_19.38.28_ouuy8y.png"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>
              <a href="https://countdown.tedspace.me/">Freedom Calculator</a>
            </h2>
            <p>
              A tool that uses up to data vaccination data to guestimate how
              long it will be before the UK reaches herd immunity.
            </p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Mountains"
              src="/Screenshot_2021-01-19_at_10.22.23_dwsbss.png"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>Covid Timeline</h2>
            <p>
              A timeline visualisation showing the relationship between covid
              case rates and local restriction tiers in the lead up to the
              January 2021 lockdown.
            </p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Mountains"
              src="/Screenshot 2021-02-07 at 11.14.46.png"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content>
            <h2>
              <a href="https://heartrates.tedspace.me/">Animal Heartrates</a>
            </h2>
            <p>
              A submission for the Reddit r/dataisbeautiful DataViz Battle for
              the month of August 2019: Visualize heart rates, masses, and
              longevity of select mammals
            </p>
          </Content>
        </Item>
      </Carousel>
    </Wrapper>
  );
};

export default DataViz;
