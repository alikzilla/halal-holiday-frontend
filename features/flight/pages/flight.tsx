import { MainLayout as Layout } from "@/components/common";
import {
  DownloadApp,
  Hero,
  InsightsStories,
  OtherHolidays,
  PopularWithTravellers,
  SignUp,
  SpecialOffers,
  TopPicks,
  TrustedCompanies,
} from "@/components/widgets";

const Hotel = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Fly to Incredible Destinations with Ease and Comfort"
        subtitle="Relax in style with world-class amenities and exceptional comfort. Whether you're seeking adventure or serenity, we provide the perfect getaway for every traveler."
        button_text="Discover Features"
        background_image="flight-hero"
      />
      <TrustedCompanies variant="home" />
      <SpecialOffers />
      {/* Popular flights of the day */}
      <TopPicks />
      <DownloadApp />
      <InsightsStories />
      <PopularWithTravellers />
      <OtherHolidays />
      <SignUp />
    </Layout>
  );
};

export default Hotel;
