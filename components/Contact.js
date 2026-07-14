import React from "react";
import styled from "styled-components";

import { media } from "../utils/media";

const Wrapper = styled.div`
  padding: 50px 50px;
  li {
    font-size: 25px;
    line-height: 60px;
    margin-bottom: 20px;
    ${media.phablet`
    font-size: 22px;
    line-height: 45px;
    margin-bottom: 40px;
    
  `}
  }
  ${media.phablet`
    padding: 20px 30px;
  
  `}
  a {
    display: grid;
    grid: 1fr / 80px 1fr;
    ${media.phablet`
    grid: 64px 1fr / 1fr;
    justify-items:center;
    
  `}
  }
`;

const Contact = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <a href="mailto:ted@tedspace.me" target="_blank" rel="noopener">
            {" "}
            <svg viewBox="0 0 64 64" width="64" height="64">
              <circle cx="32" cy="32" r="31" fill="#7f7f7f"></circle>
              <path
                d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
                fill="white"
              ></path>
            </svg>
            <span>ted@tedspace.me</span>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/tedlittledale/"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 64 64" width="64" height="64">
              <circle cx="32" cy="32" r="31" fill="#007fb1"></circle>
              <path
                d="M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"
                fill="white"
              ></path>
            </svg>
            <span>LinkedIn</span>
          </a>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Contact;
