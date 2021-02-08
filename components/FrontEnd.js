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

const FrontEnd = ({ bgc }) => {
  return (
    <Wrapper>
      <Carousel bgc={bgc}>
        <Item>
          <BGWrap>
            <Image
              alt="Mountains"
              src="/ibm_ix_logo.png.2018-07-26-15-51-20.png"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>
              <a
                href="https://www.ibm.com/services/ibmix"
                target="_blank"
                rel="noopener"
              >
                iX IBM
              </a>
            </h2>
            <p>
              Acting as Front End Lead I worked with the tech lead to design and
              implement the front end architecture for a complex data dashboard
              for EY. This brought together all the data EY needed to ​
              <a
                href="https://www.ibm.com/blogs/watson/2020/09/ey-is-transforming-the-transaction-diligence-process-with-watson/"
                target="_blank"
                rel="noopener"
              >
                perform due diligence into one tool​.
              </a>
            </p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="Mountains"
              src="/844a04800d5695da_800x800ar.jpg"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>
              <a
                href="https://en.wikipedia.org/wiki/LBi"
                target="_blank"
                rel="noopener"
              >
                LBi
              </a>
            </h2>
            <p>
              Senior Interface Devloper on sites for blue chip clients including
              BT, Barclays, Comparethemarkets and the Webby award nominated{" "}
              <a
                href="https://cargocollective.com/chesstheo/Electrolux-Art-Home"
                target="_blank"
                rel="noopener"
              >
                Electrolux Art Home
              </a>{" "}
              website.
            </p>
          </Content>
        </Item>
        <Item>
          <BGWrap>
            <Image
              alt="CSS Tricks Logo"
              src="/css-tricks-e1394062740966.png"
              layout="fill"
              objectFit="cover"
              quality={100}
            />
          </BGWrap>
          <Content bgc={bgc}>
            <h2>CSS Tricks</h2>
            <p>
              I've been published in CSS Tricks, the No.1 website by traffic for
              front end development.
            </p>
            <p>
              <a
                href="https://css-tricks.com/making-a-chart-try-using-mobx-state-tree-to-power-the-data/"
                target="_blank"
                rel="noopener"
              >
                My article
              </a>{" "}
              details how you can use a stack of d3, mob-state-tree and React to
              power complex data visualisations.
            </p>
          </Content>
        </Item>
      </Carousel>
    </Wrapper>
  );
};

export default FrontEnd;
