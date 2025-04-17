import { Body2, Container, Heading1 } from "@/components/common";
import { Button, HeroBadge, SearchBar } from "@/components/ui";

const Hero = ({
  title,
  subtitle,
  button_text,
  background_image,
}: {
  title: string;
  subtitle: string;
  button_text: string;
  background_image: string;
}) => {
  return (
    <div
      className="relative z-2 w-full min-h-screen flex items-center justify-center bg-cover bg-center pt-[80px] md:pt-[128px] pb-[40px]"
      style={{
        backgroundImage: `url('/assets/backgrounds/${background_image}.jpg')`,
      }}
    >
      <div className="absolute z-2 inset-0 bg-[#222222]/60"></div>

      <Container>
        <section className="w-full relative z-49 flex flex-col gap-6 md:gap-8 px-4 md:px-0">
          <div className="w-full flex flex-col gap-3 md:gap-4 items-center text-center">
            <HeroBadge text="Your travel buddy" />
            <Heading1 className="text-white max-w-[90%] md:max-w-[800px] text-[3xl] md:text-5xl lg:text-6xl">
              {title}
            </Heading1>
            <Body2 className="max-w-[90%] md:max-w-[600px] h-auto md:h-[70px] font-normal text-xs md:text-base">
              {subtitle}
            </Body2>

            <Button
              type="primary"
              className="mt-1 w-full md:w-auto px-6 py-3 md:py-4 text-sm md:text-base"
            >
              {button_text}
            </Button>
          </div>

          <div className="w-full mt-4 md:mt-0">
            <SearchBar />
          </div>
        </section>
      </Container>
    </div>
  );
};

export default Hero;
