import React from "react";
import Head from "next/head";

import Resume from "../components/Resume";

const Home = ({ data }) => {
  return (
    <>
      <Head>
        <title>Ted Littledale</title>
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@_superted" />
        <meta property="og:url" content="https://tedspace.me/" />
        <meta property="og:title" content="Ted Littledale" />
        <meta
          property="og:description"
          content="Creative Technologist, Front End developer, Data Visualisation tinkerer, and a successful startup founder."
        />
        <meta
          name="Description"
          content="Creative Technologist, Front End developer, Data Visualisation tinkerer, and a successful startup founder."
        ></meta>
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dc1yk89ve/image/upload/v1612746964/Screenshot_2021-02-08_at_01.15.25_pfixww.png"
        />
        <link rel="icon" href="animated-favicon.gif" type="image/gif"></link>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="theme-color" content="#F0476F" />
      </Head>
      <Resume />
    </>
  );
};

export default Resume;
