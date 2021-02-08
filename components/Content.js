import React from "react";
import styled from "styled-components";
import { prop } from "styled-tools";
import { media } from "../utils/media";

const Wrapper = styled.div`
  padding: 20px;
  background: hsla(210, 36%, 98%, 0.9);
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
  p {
    line-height: 22px;
    margin-bottom: 10px;
  }
  a {
    text-decoration: underline;
    text-decoration-color: ${prop("bgc")};
    text-decoration-skip-ink: auto;
    text-decoration-thickness: 4px;
  }
  h2 a {
    text-decoration-thickness: 5px;
  }
`;

const Content = ({ bgc, children }) => {
  return <Wrapper bgc={bgc}>{children}</Wrapper>;
};

export default Content;
