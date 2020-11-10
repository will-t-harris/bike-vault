export interface Bike {
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
}
