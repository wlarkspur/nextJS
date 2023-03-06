import Head from "next/head";

export default function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Next Movies</title>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  );
}
