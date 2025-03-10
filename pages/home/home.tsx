import { MainLayout as Layout } from "@/components/common";
import { Hero, SignUp } from "@/components/widgets";

const Homepage = () => {
  return (
    <Layout isTransparent={true}>
      <Hero
        title="Discover Unforgettable Experiences and Adventures"
        subtitle="Explore millions of destinations worldwide. Discover unique stays, great deals, and seamless booking for your next adventure."
        button_text="Discover Features"
        background_image="home-hero"
      />
      <SignUp />
    </Layout>
  );
};

export default Homepage;
