import { MainLayout as Layout } from "@/components/common";
import { DownloadApp, Hero, SignUp, SpecialOffers } from "@/components/widgets";

const Tour = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Explore Top Tours Around the World"
        subtitle="Discover unforgettable tours tailored to your journey. Book now for adventure and memories!"
        button_text="Discover Features"
        background_image="tour-hero"
      />
      <SpecialOffers />
      {/* Travellers favourites */}
      {/* Muslim friendly */}
      <DownloadApp />
      {/* Must visit */}
      {/* Discover more */}
      <SignUp />
    </Layout>
  );
};

export default Tour;
