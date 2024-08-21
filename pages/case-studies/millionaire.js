import React from "react";
import Head from "next/head";
import { getSnapshot } from "mobx-state-tree";
import CaseStudy from "../../components/CaseStudy";
import client from "../../utils/sanityClient";
import { initializeStore } from "../../store";
import { getTweet } from "react-tweet/api";
import { EmbeddedTweet, TweetSkeleton } from "react-tweet";

const Home = ({ data }) => {
  console.log({ data });
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
      <CaseStudy
        data={data}
        colors={["#331748", "white", "#331748", "white"]}
      />
    </>
  );
};

export default Home;

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export async function getStaticProps() {
  const store = initializeStore();
  //fetch case study with the hash that matches this page
  const pageHash = "millionaire";
  const data = await client.fetch(
    `*[_type == 'caseStudy' && caseStudyHash == $caseStudyHash]{ _id, caseStudyTitle, caseStudyHash, caseStudySections }`,
    { caseStudyHash: pageHash }
  );
  console.log("data 0", data[0]);
  const sectionsWithTweets = await Promise.all(
    data[0].caseStudySections.map(async (section) => {
      const updatedCaseStudySectionBody = await Promise.all(
        section.caseStudySectionBody.map(async (body) => {
          if (
            body.markDefs?.[0]?._type === "link" &&
            body.markDefs[0].href.startsWith("https://x.com")
          ) {
            const tweetId = body.markDefs[0].href.split("/").pop();

            const tweet = await getTweet(tweetId);

            return {
              ...body,
              _type: "tweet",
              tweetData: JSON.stringify(tweet)
            };
          }
          return body;
        })
      );
      console.log("updatedCaseStudySectionBody", updatedCaseStudySectionBody);
      // section.caseStudySectionBody = section.caseStudySectionBody.map(
      //   async (body) => {
      //     console.log("here", { body: JSON.stringify(body) });
      //     if (
      //       body.markDefs?.[0]?._type === "link" &&
      //       body.markDefs[0].href.startsWith("https://x.com")
      //     ) {
      //       const tweetId = body.markDefs[0].href.split("/").pop();

      //       const tweet = await getTweet(tweetId);

      //       return {
      //         ...body,
      //         _type: "tweet",
      //         tweetData: JSON.stringify(tweet)
      //       };
      //     }
      //     return body;
      //   }
      // );

      return {
        ...section,
        caseStudySectionBody: updatedCaseStudySectionBody
      };
    })
  );

  const dataWithTweets = {
    ...data[0],
    caseStudySections: sectionsWithTweets
  };

  return {
    props: { initialState: getSnapshot(store), data: [dataWithTweets] }
  };
}
