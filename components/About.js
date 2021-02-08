import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

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

const ThemedLink = styled.a`
  text-decoration: underline;
  text-decoration-color: ${prop("themecolor")};
  text-decoration-skip-ink: auto;
  text-decoration-thickness: 4px;
`;

const About = () => {
  return (
    <Wrapper>
      <p>
        I'm Ted, I've got almost two decades of experience working as a{" "}
        <ThemedLink href="#creative" themecolor="#06d6a0">
          Creative Technologist
        </ThemedLink>
        ,{" "}
        <ThemedLink href="#frontend" themecolor="#118ab2">
          Front End developer
        </ThemedLink>
        ,{" "}
        <ThemedLink href="#dataviz" themecolor="#ef476f">
          Data Visualisation tinkerer
        </ThemedLink>
        , and a{" "}
        <ThemedLink href="#startups" themecolor="#FAC216">
          successful startup founder
        </ThemedLink>
      </p>
    </Wrapper>
  );
};

export default About;
