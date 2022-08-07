import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header";
import ShipNation from "../components/ShipNation";
import Ships from "../components/Ships";

export default function Home() {
  const [nation, setNation] = useState(null);

  return (
    <div>
      <Head>
        <title>Azur-Wiki</title>
      </Head>
      <Header />
      <ShipNation nation={nation} setNation={setNation} />
      {nation && <Ships nation={nation} setNation={setNation} />}
    </div>
  );
}
