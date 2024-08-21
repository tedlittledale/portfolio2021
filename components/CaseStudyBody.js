import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { prop } from "styled-tools";

import { EmbeddedTweet } from "react-tweet";
import { media } from "../utils/media";
import urlBuilder from "@sanity/image-url";

import imageUrlBuilder from "@sanity/image-url";

import client from "../utils/sanityClient";
const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}
import { PortableText } from "@portabletext/react";

const SampleImageComponent = ({ value, isInline }) => {
  return (
    <img
      src={urlFor(value).url()}
      alt={value.alt || " "}
      loading="lazy"
      style={{
        // Display alongside text if image appears inside a block text span
        display: isInline ? "inline-block" : "block"

        // Avoid jumping around with aspect-ratio CSS property
      }}
    />
  );
};

const TweetComponent = ({ value }) => {
  console.log({ value });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  if (!isClient) {
    return null;
  }
  const tweetData = JSON.parse(value.tweetData);

  return (
    <div data-theme="light">
      <EmbeddedTweet tweet={tweetData} />
    </div>
  );
};

const myPortableTextComponents = {
  types: {
    image: SampleImageComponent,
    tweet: TweetComponent
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value?.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    }
  }
};

const Wrapper = styled.div`
  padding: 0px 40px;
  p {
    font-size: 20px;
    margin-bottom: 6px;
    ${media.phablet`
    font-size: 16px;
    
  
  `}
  }
  img {
    margin-top: 20px;
    margin-bottom: 20px;
    max-width: 70%;
    height: auto;
    // position center
    margin-left: auto;
    margin-right: auto;
  }
  ul {
    margin: 10px 20px;
    list-style-type: disc;
  }
  li {
    margin: 6px 0;
  }
  ${media.phablet`
    padding: 10px 14px;
  
  `}
`;

const ThemedLink = styled.a`
  text-decoration: underline;
  text-decoration-color: ${prop("themecolor")};
  text-decoration-skip-ink: auto;
  text-decoration-thickness: 4px;
`;

const CaseStudyBody = ({ caseStudySectionBody }) => {
  return (
    <Wrapper>
      <PortableText
        value={caseStudySectionBody}
        components={myPortableTextComponents}
      />
    </Wrapper>
  );
};

export default CaseStudyBody;
