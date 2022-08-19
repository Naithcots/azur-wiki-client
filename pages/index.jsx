import Head from "next/head";
import ShipNation from "../components/ShipNation/ShipNation";
import Ships from "../components/Ships/Ships";
import useNation from "../hooks/useNation";

export default function Home() {
  const { nation } = useNation();

  return (
    <>
      <Head>
        <title>Azur-Wiki</title>
      </Head>
      <ShipNation />
      {nation && <Ships />}
    </>
  );
}
