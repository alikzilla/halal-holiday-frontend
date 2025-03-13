import { MainLayout as Layout } from "@/components/common";
import {
  Hero,
  SpecialOffers,
  TrustedCompanies,
  SignUp,
  BestServices,
  UnforgettableAdventures,
  PopularDestination,
  DownloadApp,
  TopPicks,
  TopCities,
  PopularWithTravellers,
  OtherHolidays,
  InsightsStories,
} from "@/components/widgets";

const Homepage = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Discover Unforgettable Experiences and Adventures"
        subtitle="Explore millions of destinations worldwide. Discover unique stays, great deals, and seamless booking for your next adventure."
        button_text="Discover Features"
        background_image="home-hero"
      />
      <TrustedCompanies />
      <SpecialOffers />
      <BestServices />
      <UnforgettableAdventures />
      <PopularDestination />
      <DownloadApp />
      <TopPicks />
      {/* explore turkeys */}
      {/* top countries */}
      <TopCities />
      <InsightsStories />
      <PopularWithTravellers />
      <OtherHolidays />
      <SignUp />
    </Layout>
  );
};

export default Homepage;
