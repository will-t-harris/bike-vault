import Head from "next/head";
import useSWR from "swr";
import "twin.macro";

type Props = {
  bike: {
    api_url: string;
    components: {
      component_group: string;
      component_type: string;
      description: string;
      front: string | null;
      id: number;
      manufacturer_name: string | null;
      model_name: string | null;
      rear: string | null;
      serial_number: number | null;
      year: number | null;
    }[];
    description: string;
    frame_colors: string[];
    frame_material_slug: string;
    frame_model: string;
    frame_size: string;
    front_gear_type_slug: any | null;
    front_tire_narrow: boolean;
    front_wheel_size_iso_bsd: number;
    handlebar_type_slug: string | null;
    id: number;
    is_stock_img: boolean;
    large_img: string;
    location_found: string | null;
    manufacturer_id: number;
    manufacturer_name: string;
    name: string;
    paint_description: string;
    public_images: string[];
    rear_gear_type_slug: any | null;
    rear_tire_narrow: boolean;
    rear_wheel_size_iso_bsd: number;
    registration_created_at: number;
    registration_updated_at: number;
    registry_name: string | null;
    registry_url: string | null;
    serial: string;
    status: string | null;
    stolen: boolean;
    stolen_location: string | null;
    stolen_record: string | null;
    test_bike: boolean;
    thumb: string;
    title: string;
    type_of_cycle: string;
    url: string;
    year: number;
  };
};

export default function Home({ bike }: Props) {
  console.log(bike.components);
  return (
    <main>
      <Head>
        <title>Home</title>
      </Head>

      <h1 tw="text-gray-900 text-2xl">Welcome to the show</h1>
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
