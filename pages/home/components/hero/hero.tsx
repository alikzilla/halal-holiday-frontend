import { Body2, Heading1 } from "@/components/common";
import { Button, HeroBadge, SearchBar } from "@/components/ui";

const Hero = () => {
  return (
    <div
      className="relative z-1 h-full flex items-center justify-center bg-cover bg-center pt-[128px] pb-[40px]"
      style={{ backgroundImage: "url('/assets/backgrounds/home-hero.jpg')" }}
    >
      <div className="absolute z-2 inset-0 bg-[#222222]/60"></div>

      <section className="relative z-49 flex flex-col gap-8">
        <div className="flex flex-col gap-4 items-center text-center">
          <HeroBadge text="Your travel buddy" />
          <Heading1 className="max-w-[800px]">
            Discover Unforgettable Experiences and Adventures
          </Heading1>
          <Body2 className="max-w-[600px] font-normal">
            Explore millions of destinations worldwide. Discover unique stays,
            great deals, and seamless booking for your next adventure.
          </Body2>

          <Button type="primary" className="mt-4">
            Discover Features
          </Button>
        </div>

        <SearchBar />
      </section>
    </div>
  );
};

export default Hero;
