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
      className="relative z-2 w-full h-screen flex items-center justify-center bg-cover bg-center pt-[128px] pb-[40px]"
      style={{
        backgroundImage: `url('/assets/backgrounds/${background_image}.jpg')`,
      }}
    >
      <div className="absolute z-2 inset-0 bg-[#222222]/60"></div>

      <Container>
        <section className="w-full relative z-49 flex flex-col gap-8">
          <div className="w-full flex flex-col gap-3 items-center text-center">
            <HeroBadge text="Your travel buddy" />
            <Heading1 className="max-w-[800px]">{title}</Heading1>
            <Body2 className="max-w-[600px] h-[70px] font-normal">{subtitle}</Body2>

            <Button type="primary" className="mt-1">
              {button_text}
            </Button>
          </div>

          <SearchBar />
        </section>
      </Container>
    </div>
  );
};

export default Hero;
