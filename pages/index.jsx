import { useState } from "react";
import Head from "next/head";
import Header from "../components/Header/Header";
import ShipNation from "../components/ShipNation/ShipNation";
import Ships from "../components/Ships/Ships";

export default function Home() {
  const [nation, setNation] = useState(null);

  return (
    <>
      <Head>
        <title>Azur-Wiki</title>
      </Head>
      <Header />
      <ShipNation nation={nation} setNation={setNation} />
      {nation && <Ships nation={nation} setNation={setNation} />}
    </>
  );
}
