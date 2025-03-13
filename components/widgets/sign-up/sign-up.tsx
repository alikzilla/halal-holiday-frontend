import { Body2, Container, Heading2 } from "@/components/common";
import { Button } from "@/components/ui";

const CustomTour = () => {
  return (
    <section className="py-[30px]">
      <Container>
        <div
          className="relative h-[330px] flex items-center justify-center bg-cover bg-center rounded-xl"
          style={{
            backgroundImage: "url('/assets/backgrounds/custom-tour.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#222222]/60 rounded-xl"></div>
          <div className="relative flex flex-col items-center justify-center gap-2">
            <Heading2 className="w-[700px] text-center">
              Sign Up Now & Unlock Exclusive Discounts!
            </Heading2>
            <Body2 className="w-[600px] text-center mb-4">
              Join our community today and enjoy special offers, exclusive
              deals, and early access to promotions. Don’t miss out—sign up and
              start saving!
            </Body2>
            <Button type="tertiary">Sign up</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CustomTour;
