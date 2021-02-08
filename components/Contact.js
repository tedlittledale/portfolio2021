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
          <a
            href="mailto:ted.littledale@gmail.com"
            target="_blank"
            rel="noopener"
          >
            {" "}
            <svg viewBox="0 0 64 64" width="64" height="64">
              <circle cx="32" cy="32" r="31" fill="#7f7f7f"></circle>
              <path
                d="M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"
                fill="white"
              ></path>
            </svg>
            <span>ted.littledale@gmail.com</span>
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/_superted"
            target="_blank"
            rel="noopener"
          >
            <svg viewBox="0 0 64 64" width="64" height="64">
              <circle cx="32" cy="32" r="31" fill="#00aced"></circle>
              <path
                d="M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"
                fill="white"
              ></path>
            </svg>
            <span>@_superted</span>
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
