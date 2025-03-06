import {
  Body1,
  Container,
  Heading2,
  Heading4,
  Heading6,
  Title1,
} from "@/components/common";
import Image from "next/image";
import Link from "next/link";
import Button from "../button/button";

const Footer = () => {
  return (
    <footer className="bg-[var(--background)] py-[60px]">
      <Container>
        <section className="flex items-center justify-between gap-6">
          <div className="flex flex-col items-start justify-start gap-8">
            <Image src={"logo.svg"} alt="logo" width={175} height={25} />

            <div className="flex flex-col items-start gap-2">
              <Heading2 className="lg:max-w-[400px]">
                Explore the World, One Journey at a Time.
              </Heading2>
              <Body1 className="text-[#769190] lg:max-w-[400px]">
                Would you like a different tone or focus, such as adventure,
                relaxation, or cultural experiences?
              </Body1>
            </div>

            <div className="flex items-center justify-start gap-2">
              <Link
                href={"#"}
                target="_blank"
                className="w-[60px] h-[60px] bg-[#214D4C] border border-[1px] border-[#2D5554] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]"
              >
                <Image
                  src={"/assets/icons/instagram.svg"}
                  alt="instagram"
                  width={24}
                  height={24}
                />
              </Link>

              <Link
                href={"#"}
                target="_blank"
                className="w-[60px] h-[60px] bg-[#214D4C] border border-[1px] border-[#2D5554] rounded-full flex items-center justify-center transition-all duration-300 hover:bg-[var(--primary-hover)] active:bg-[var(--primary-active)]"
              >
                <Image
                  src={"/assets/icons/facebook.svg"}
                  alt="facebook"
                  width={24}
                  height={24}
                />
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-start gap-[72px]">
            <nav className="flex items-start justify-start gap-[60px]">
              <div className="flex flex-col items-start gap-4">
                <Heading4 className="cursor-pointer">About Us</Heading4>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Our Story
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Mission & Vision
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Careers
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Blog
                </Title1>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Heading4 className="cursor-pointer">Customer Support</Heading4>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  FAQs
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Contact Us
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Travel Insurance
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Cancellation Policy
                </Title1>
              </div>
              <div className="flex flex-col items-start gap-4">
                <Heading4 className="cursor-pointer">Legal</Heading4>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Terms & Conditions
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Privacy Policy
                </Title1>
                <Title1 className="text-[#769190] cursor-pointer transition-all duration-300 hover:text-white">
                  Cookie Policy
                </Title1>
              </div>
            </nav>

            <div className="flex flex-col items-start gap-2">
              <Heading6>Subscribe our newsletter</Heading6>
              <div className="relative w-full max-w-[800px]">
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full py-3 pl-4 pr-[300px] border border-[#2D5554] rounded-[12px] bg-transparent text-white focus:outline-none focus:border-[#214D4C]"
                />
                <Button
                  type="tertiary"
                  className="absolute right-1 top-1 bottom-1 px-6"
                >
                  Sign up
                </Button>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;
