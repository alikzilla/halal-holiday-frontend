import { MainLayout as Layout } from "@/components/common";
import { DownloadApp, Hero, TrustedCompanies } from "@/components/widgets";

const RentCar = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Drive Freely with Reliable and Affordable Rentals"
        subtitle=" Choose from our wide range of rental cars for any journey. Book now for comfort and convenience!"
        button_text="Discover Features"
        background_image="rent-car-hero"
      />
      <TrustedCompanies variant="home" />
      {/* Rent car serices */}
      <DownloadApp />
      {/* Popular car hire */}
      {/* Rent your car */}
    </Layout>
  );
};

export default RentCar;
