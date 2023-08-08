import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Head from "next/head";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const getRacerDetail = async (racerId) => {
    const { data } = await axios.get(`/racers/${racerId}.json`);
  
    return data;
};
  

export default function RacerDetailPage(props) {
    const {data: serverData} = props;
    const {query: {racerId}} = useRouter();

    const {data} = useQuery(["getRacerDetail", racerId], {
        queryFn: ({queryKey: [_, id]}) => getRacerDetail(id),
        staleTime: 100000
    })
    
    const TITLE = serverData.title;
    const DESCRIPTION = serverData.description;
    const META_PATH = '/meta';
    const RESULT_PATH = '/'
    return (
        <React.Fragment>
        <Head>
            <title>{TITLE}</title>
            <meta name="description" content={DESCRIPTION} />
            <link rel="manifest" href={`${META_PATH}/manifest.json`} />
      <meta
        name="msapplication-TileImage"
        content={`${META_PATH}/ms-icon-144x144.png}`}
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      {/* OPEN GRAPH */}
      <meta property="og:title" content={TITLE} />
      <meta property="og:description" content={DESCRIPTION} />
      <meta property="og:site_name" content={TITLE} />
      <meta property="og:url" content={RESULT_PATH} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${META_PATH}/open_graph.png?v=2`} />
      <meta property="og:locale" content={'ko-KR'} />
      <meta property="og:image:width" content="1114" />
      <meta property="og:image:height" content="630" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={TITLE} />
      <meta name="twitter:description" content={DESCRIPTION} />
      <meta name="twitter:image" content={`${META_PATH}/open_graph.png`} />
        </Head>
        <div>
            <h2>{serverData.title}님의 상세 페이지 입니다.</h2>
            <Link href={"/elice"}>목록 보기</Link>
        </div>
        </React.Fragment>
    )
}

// This gets called on every request
export async function getServerSideProps(ctx) {
    
    const { racerId } = ctx.query
    
  try {
    const {data} = await axios.get(`https://dummyjson.com/products/${racerId}`);

    return { props: { data} }
  } catch (error) {
    // console.error(error)
    return {props: {data: {}}} 
  }
  
}