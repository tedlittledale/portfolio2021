import React from "react";
import styled from "styled-components";

import { media } from "../utils/media";

const Wrapper = styled.div`
  padding: 50px 50px;
  li {
    font-size: 25px;
    line-height: 60px;
    ${media.phablet`
    font-size: 22px;
    line-height: 45px;
  
  `}
  }
  ${media.phablet`
    padding: 20px 30px;
  
  `}
`;

const Contact = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a
            href="mailto:ted.littledale@gmail.com"
            target="_blank"
            rel="noopener"
          >
            ted.littledale@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_superted"
            target="_blank"
            rel="noopener"
          >
            @_superted
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Contact;
