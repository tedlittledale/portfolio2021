import Head from "next/head";
import { useRouter } from "next/router";

function MyPage() {
  const router = useRouter();
  const { myParam } = router.query;
  return (
    <>
      <Head>
        <title>My Page</title>
        <meta property="og:title" content="My Page" />
        <meta property="og:description" content="This is my page." />
        <meta property="og:image" content="https://example.com/my-image.jpg" />
        <meta property="og:url" content="https://example.com/my-page" />
      </Head>
      <h1>Welcome to my page!</h1>
      <p>This is some content on my page.</p>
    </>
  );
}

export default MyPage;
