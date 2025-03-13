import { Body2, Container, Heading2, Heading4 } from "@/components/common";
import { Button } from "@/components/ui";
import Image from "next/image";

const InsightsStories = () => {
  const stories = [
    {
      id: 1,
      title: "Top 10 Hidden Gems to Visit This Year",
      description:
        "Explore off-the-beaten-path destinations across Europe, from quaint villages to stunning natural wonders that remain undiscovered by most tourists.",
      date: "24 December 2024",
      readTime: "5 minutes read",
      image:
        "https://s3-alpha-sig.figma.com/img/a276/4a3e/cbff5059e27be23f8ed7f83bedb7f0a8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lTC9lA1CaSZ~ZOM4zj5d6SldrgBKu5t4a9WbcZwOfZZXvc~ZsyisszxBxK-n7W1axdJqhc-zt5wBGTIsh3ifFdVxRJjGFKMA2WQiSy-Nec-OC5fEIT8Jxtqe68mC6GoaBsHmlUiVPOXxdL19tR2x-1AyAHF0VQjzmqG12SSYpQhKqCMOj5UmAcmylwTkJImgmo0luIDATFNg0I~U3ACzDU4zElCFvdw5gxg25vsSBQNTpu6wtBL7fOcjjrhQb1WYhPniliqEgjAivmD4p~itauzfH3G6dzOLhTxpQiIazS6XurO80aY5vO2t7OvnRzQQPVARQOm9UwCkMmkdk2UQKQ__",
    },
    {
      id: 2,
      title: "Tips for Eco-Friendly Adventures",
      description:
        "Learn how to reduce your carbon footprint while traveling, from eco-friendly accommodations to sustainable activities and transportation options.",
      date: "24 December 2024",
      readTime: "5 minutes read",
      image:
        "https://s3-alpha-sig.figma.com/img/17c3/07ad/f5eef9ed8270320d811f853587f82db6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Z3dqWkUsVXw~C3PXA-E2CZkF63sob5Ke8fSH6Q~Rj6yPRFaAK44ROtjZgFk4~ebiimRAq067bTiUOit2sBk7cvFIuzt7XqYbE39WTwKpNqA0-JNWLZUwBm381pZgRlbgIOUN2zrhzjOoTgaygrel5crtI3KIKjccAMi7NU-W5dHrGetu3t~xEAoPftLwWHVu1Fp1DKmkTy2IhQ-4LyApMHGxnwTbxadeXgNRyG1lGBX6NCTIkSRs-GuO9IL4muc1a1qBhdBRhu03YVujDyItz0S9xOEjz7~oS2vzLsiPxUggNonTjkoYJNEY3OhsOH8EkyYA0uCKwr0z7FYgPpiV6g__",
    },
    {
      id: 3,
      title: "Your Guide to Southeast Asia",
      description:
        "Plan your dream backpacking trip through Southeast Asia with tips on must-see destinations, budget-friendly accommodations, and local food experiences.",
      date: "24 December 2024",
      readTime: "5 minutes read",
      image:
        "https://s3-alpha-sig.figma.com/img/2899/94b0/b323e79a48431ff577dcbc5c24c86a13?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tcwUpy8NTRUIsIrVRP2lkW6aC902LTb46H~Fted3ioXbzUY4Nc6k6-NBERQK8dejU35t3G~rwv7nREX5cA5T51DVdkFo1ZSbdGQnuMGbjblT~IZksg4AbNWue66ZTjXRE0Wq7VCpoX~tzNhSLu7zNLHDgKZx41bbz85HPxx7MaXA9kWrnTXFiCxKsUD6qhK-nQA0Kl58znp3Oz-AxgO4YmcXrlQVVeU1k4RMNEKC0-5ukHtNuHJD1-y-30X~uBWPaVc0F6H-rFCEn9-2ZXq0Mtb-SIxEJwmJiYSRFzFVeLqJHCdTOlwHSoiuK9sWVXoZrnuwYfOHsLxENcFdqaqyLQ__",
    },
  ];

  return (
    <section
      className="w-full bg-cover bg-center bg-[#266462] py-[30px]"
      style={{ backgroundImage: `url('/assets/backgrounds/adventures.svg')` }}
    >
      <Container>
        <section className="w-full flex flex-col items-center gap-8">
          <div className="w-full text-center">
            <Heading2 className="text-white">
              Insights and Stories from Our Travel Experts
            </Heading2>
            <Body2 className="text-[#AEC6C5]">
              Stay updated with the latest travel tips, stories, and expert
              advice to inspire your next adventure.
            </Body2>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((story) => (
              <div
                key={story.id}
                className="flex flex-col items-start gap-4 overflow-hidden"
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  width={420}
                  height={278}
                  className="w-full h-[300px] object-cover rounded-xl"
                />
                <div className="flex flex-col items-start">
                  <Heading4 className="text-white">{story.title}</Heading4>
                  <Body2 className="text-[#F9F9F9] font-medium mt-2">
                    {story.description}
                  </Body2>
                  <div className="flex items-center gap-2 mt-8">
                    <Body2 className="text-white">{story.date}</Body2>
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M15 7.87105L7.5 0.364258L0 7.87105L7.5 15.3778L15 7.87105ZM7.46226 4.11766L3.71226 7.87105L7.5384 11.7007L11.2884 7.94726L7.46226 4.11766Z"
                        fill="#E8B040"
                      />
                    </svg>
                    <Body2 className="text-white">{story.readTime}</Body2>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Button type="white">See more</Button>
        </section>
      </Container>
    </section>
  );
};

export default InsightsStories;
