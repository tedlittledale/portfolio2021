import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px;
  p {
    font-size: 30px;
    line-height: 60px;
  }
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
