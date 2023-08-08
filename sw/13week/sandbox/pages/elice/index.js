import React from "react";
import Head from "next/head";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";

const getRacerList = async () => {
  const { data } = await axios.get("/racers/racers.json");

  return data;
};

export default function RacerListPage() {
  const { data: users } = useQuery(["getRacer"], {
    queryFn: ({}) => getRacerList(),
  });

  return (
    <React.Fragment>
      <Head>
        <title>Elice Racer 목록 페이지</title>
      </Head>
      <div>
        <h2>Racer 목록 페이지</h2>
        {users?.map((user, idx) => {
          return (
            <Link
              href={`/elice/${user.racerId}`}
              key={`${user.userName} ${idx}`}
            >
              <h2>{user.userName}</h2>
            </Link>
          );
        })}
      </div>
    </React.Fragment>
  );
}
