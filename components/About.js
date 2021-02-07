import React from "react";
import styled from "styled-components";

import { media } from "../utils/media";

const Wrapper = styled.div`
  padding: 50px 100px;
  p {
    font-size: 30px;
    line-height: 60px;
    ${media.phablet`
    font-size: 25px;
    line-height: 45px;
  
  `}
  }
  ${media.phablet`
    padding: 20px 30px;
  
  `}
`;

const About = () => {
  return (
    <Wrapper>
      <p>
        I'm Ted, I've got almost two decades of experience working as a{" "}
        <a href="#">Creative Technologist</a>,{" "}
        <a href="#">Front End developer</a>,{" "}
        <a href="#">Data Visualisation tinkerer</a>, and a{" "}
        <a href="">successful startup founder</a>
      </p>
    </Wrapper>
  );
};

export default About;
