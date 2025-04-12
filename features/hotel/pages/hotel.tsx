import { MainLayout as Layout } from "@/components/common";
import {
  DownloadApp,
  Hero,
  InsightsStories,
  OtherHolidays,
  PopularDestination,
  SignUp,
  SpecialOffers,
  TopCities,
  TopPicks,
  TrustedCompanies,
} from "@/components/widgets";

const Hotel = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Stay in Luxury and Comfort at Top-Rated Hotels"
        subtitle="Relax in style with world-class amenities and exceptional comfort. Whether you're seeking adventure or serenity, we provide the perfect getaway for every traveler."
        button_text="Discover Features"
        background_image="hotel-hero"
      />
      <TrustedCompanies variant="hotel" />
      <SpecialOffers />
      {/* Best Offers */}
      <PopularDestination />
      {/* Experience halal friendly */}
      <TopPicks />
      <DownloadApp />
      {/* Top countries */}
      <TopCities />
      <InsightsStories />
      <PopularDestination />
      <OtherHolidays />
      <SignUp />
    </Layout>
  );
};

export default Hotel;
