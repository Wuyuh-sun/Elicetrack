import React from "react";
import Link from "next/link";
import Head from "next/head";

export default function AboutPage() {
  return (
    <React.Fragment>
      <Head>
        <title>최고야</title>
        <meta name="description" content="" />
      </Head>
      <div>About 상혁</div>
      <Link href={"/"}>Home</Link>
    </React.Fragment>
  );
}
