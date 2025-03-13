import { Body2, Container, Heading2 } from "@/components/common";
import Image from "next/image";

const DownloadApp = () => {
  return (
    <section className="py-[30px]">
      <Container>
        <div
          className="relative flex items-center justify-center bg-cover bg-center rounded-xl pt-[56px] px-[60px]"
          style={{
            backgroundImage: "url('/assets/backgrounds/custom-tour.jpg')",
          }}
        >
          <div className="absolute inset-0 bg-[#222222]/60 rounded-xl"></div>
          <div className="w-full flex items-center justify-between">
            <div className="relative flex flex-col items-start justify-center gap-2">
              <Heading2 className="w-[700px] text-start">
                Your Travel Companion Anywhere
              </Heading2>
              <Body2 className="w-[600px] text-start mb-4">
                Plan, book, and manage your trips on the go. Download our app
                for exclusive deals, personalized recommendations, and seamless
                travel experiences—right at your fingertips
              </Body2>
              <div className="flex items-center gap-2">
                <Image
                  src={"/assets/companies/playmarket.svg"}
                  alt="playmarket"
                  width={135}
                  height={40}
                />
                <Image
                  src={"/assets/companies/appstore.svg"}
                  alt="appstore"
                  width={120}
                  height={40}
                />
              </div>
            </div>

            <div className="relative z-[3]">
              <svg
                width="454"
                height="355"
                viewBox="0 0 454 355"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="160"
                  y="0.371582"
                  width="294"
                  height="670"
                  rx="12"
                  fill="#F9F9F9"
                />
                <rect
                  y="94.3716"
                  width="294"
                  height="670"
                  rx="12"
                  fill="#D6D6D6"
                />
              </svg>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default DownloadApp;
