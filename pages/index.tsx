import Head from "next/head";
import useSWR from "swr";
import "twin.macro";

import { Bike } from "types/index";

export default function Home({ bike }: Bike) {
  console.log(bike.components);
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>

      <ul>
        <li>{bike.api_url}</li>
        {bike.components &&
          bike.components.map((component) => <li>{component.description}</li>)}
        <li>{bike.description}</li>
        <li>{bike.frame_colors}</li>
        <li>{bike.frame_material_slug}</li>
        <li>{bike.frame_model}</li>
        <li>{bike.frame_size}</li>
        <li>{bike.front_gear_type_slug}</li>
      </ul>
    </main>
  );
}

export async function getStaticProps() {
  let LHT = await fetch(
    "https://bikeindex.org:443/api/v3/bikes/596555"
  ).then((res) => res.json());
  const bike = LHT.bike;
  return { props: { bike } };
}
