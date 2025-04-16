import { Body2, Container, Heading2 } from "@/components/common";
import { Button } from "@/components/ui";

const CustomTour = () => {
  return (
    <section className="py-6 md:py-[30px] px-4 md:px-0">
      <Container>
        <div
          className="relative h-[250px] sm:h-[300px] md:h-[330px] flex items-center justify-center bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: "url('/assets/backgrounds/custom-tour.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#222222]/60 rounded-xl"></div>
          <div className="relative flex flex-col items-center justify-center gap-2 px-4 sm:px-6 md:px-8 w-full">
            <Heading2 className="w-full md:w-[700px] text-center text-2xl sm:text-3xl md:text-4xl">
              Sign Up Now & Unlock Exclusive Discounts!
            </Heading2>
            <Body2 className="w-full md:w-[600px] text-center mb-4 text-sm sm:text-base">
              Join our community today and enjoy special offers, exclusive
              deals, and early access to promotions. Don&apos;t miss out—sign up
              and start saving!
            </Body2>
            <Button
              type="tertiary"
              className="w-full sm:w-auto px-6 py-2 sm:py-3"
            >
              Sign up
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomTour;
