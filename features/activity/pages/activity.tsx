import { MainLayout as Layout } from "@/components/common";
import {
  DownloadApp,
  Hero,
  InsightsStories,
  OtherHolidays,
  PopularDestination,
  PopularWithTravellers,
  SignUp,
  SpecialOffers,
  TopCities,
  UnforgettableAdventures,
} from "@/components/widgets";

const Activity = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Drive Freely with Reliable and Affordable Rentals"
        subtitle="From thrilling adventures to tranquil retreats, tailor your perfect experience with us."
        button_text="Discover Features"
        background_image="activity-hero"
      />
      <SpecialOffers />
      <UnforgettableAdventures />
      <PopularDestination />
      <DownloadApp />
      <TopCities />
      <InsightsStories />
      <PopularWithTravellers />
      <OtherHolidays />
      <SignUp />
    </Layout>
  );
};

export default Activity;
