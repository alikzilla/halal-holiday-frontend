"use client";

import React from "react";
import Image from "next/image";
import { Body2, Container, Heading2, Heading4 } from "@/components/common";
import { Button } from "@/components/ui";

const PopularDestinations = () => {
  const destinations = [
    {
      id: 1,
      name: "Hagia Sophia",
      location: "Istanbul, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/0b19/3a60/228e101e0558e70f303ab50a3bde757a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MZcMit5vdD~OuiT1EnN5YJACSniCynV2kii-nEPxiCK~Xc7eA3lmPe16jWg4iBuD~p0UbD711iFrPLHUrXd1RWDxruVRuVsx~sFyn8SiXr8sLDDMSIiS3RpzVXK8VD1r3lWFNzTvAmX0znmnojGEDFgviSRef~5Ubfc2tvpMn6gIk~L2KwCulNVdzQtCk3eYtlK-XxQGa9otOuYL91q3dLciDsfsHl6aGa3HN9lsHjkXcFERDSJ2YGZbnw3ajyvBn5qvlnV1STcTdr8j3cWppmDfe7PCTxPs1VNb86EzBNg2ikaQwfwOza0HXQBQv0bE0mioZ6i0bLIG084iLk-KZg__",
      rating: 4.5, // Add rating field
    },
    {
      id: 2,
      name: "Cappadocia",
      location: "Nezefahi Province, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/4ae5/f259/54e1b3d4d7eda8e315ac590863845f95?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pVagRHxgj~OuUgptK2TBr-SVUn5wHzhzP8h~OOb-wNguxVVCrU14IOHw~mL7y1KTeDPT6tlCexuJhp0HqGikWpC48Wx5zzAThE04tIM5-tvAxM48X2AG4TgCdgoYfcjJULYluT~8kYhbOAL2zq7gRXAs4KsHE5toQ5Xg36vjfG65KJuMww-M~RW3XJgY~~Wx~i4pAu0vU2U7BlXNWgnPvqxQ2CxEKTKD~IIlBOUw0KdWjywyFncN6c6u-i-YEIUlUS59PjTWWrFtHs2iSPSva4QaUXz-u80432oo-QHBA5OZt9SIFWcUjJcgp6PHNrdJW-CppU4YZPITunddHUnIQQ__",
      rating: 4.7,
    },
    {
      id: 3,
      name: "Ephesus Ancient City",
      location: "Izmir Province, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/6474/b19c/96b570306b6285243f2a1323c976d649?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cKw~7S93Ku-aICGxm3~FqidwipcQzkzgYTA3kUdFiaE0LTyIfORZ1gfScgOepRT7gDqZtuVdEzAebye1J5B1Xh~UiOPoMeSKZOj67r-BSsmstrXt6ozF3ffPhI7hE4bSe0LJZKm1HXMix~DtQo97CvoL-q5-IYOg7O7BX2vom-rW6z~gYpvLChcXw0KFyoG7kBpVUHgYO-ctsUGytMYTbkaU-eyr6MQ5IZa2OoxWbfc5S9ppKIcaU8i1qpV4Io5wPZaKy0cu0mhevX53~loXZKTcqt114OP5ZwDDFT1ht6bYvKQpF6aA7ojA3xz4ki9jOuKWW0WAaMxturg04V4QnA__",
      rating: 4.3,
    },
    {
      id: 4,
      name: "Pamukkale",
      location: "Denizli Province, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/4816/5774/768a89a43a8e457dbb4d11b1e9dbfe9f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tRnPF1l~kgctDMT8zkeE1ahir-KwrQm8gPCXpHJhWrqpWhLz~4jmwLo36pEEK0eHzR7GCbV1B2YBTix9O39RoEWoSfLMcayDyAw0bmHh~5nzf6BMz79~q3hInBfyv3L-WGeqqQphxrg8BB56b1DcAIeg4MjL0QzrNdozYznIJ7zrHxcN0kgQAvgK1WZ-j3-rjvqkR6dPMpAWjfaxXuHWNHQSkeVABFydoGFjvNcOOsSKx8aOmaJs7ILTlFGG1xz1OodJ9G-lmXFWEjOiin1y9AwCjUROpUrNxQnv4EcTaGlCfb6hUKR9XnaQlImUEtVxsp42hqgVVXoN~wS10lT9FQ__",
      rating: 4.6,
    },
    {
      id: 5,
      name: "Topkapi Palace",
      location: "Istanbul, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/0b19/3a60/228e101e0558e70f303ab50a3bde757a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MZcMit5vdD~OuiT1EnN5YJACSniCynV2kii-nEPxiCK~Xc7eA3lmPe16jWg4iBuD~p0UbD711iFrPLHUrXd1RWDxruVRuVsx~sFyn8SiXr8sLDDMSIiS3RpzVXK8VD1r3lWFNzTvAmX0znmnojGEDFgviSRef~5Ubfc2tvpMn6gIk~L2KwCulNVdzQtCk3eYtlK-XxQGa9otOuYL91q3dLciDsfsHl6aGa3HN9lsHjkXcFERDSJ2YGZbnw3ajyvBn5qvlnV1STcTdr8j3cWppmDfe7PCTxPs1VNb86EzBNg2ikaQwfwOza0HXQBQv0bE0mioZ6i0bLIG084iLk-KZg__",
      rating: 4.8,
    },
    {
      id: 6,
      name: "Sultan Ahmed Mosque",
      location: "Istanbul, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/41a6/9d28/7e50930fa95aaccbedc410f51bbc6c8c?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=J2plaMJb5YYLmxhEgg1oG8PFRk3FhTd1lJnq3L55LGyc0qfD2ytn71Xab7iQ8p-rEyY3CgOQd~TsnuPHm9CFak7LTV51RczcIIb8cLvjW4JzQMCzApEeO2hnmlYktZ4AWrliIlTs-u6JeJqxj18QYs81-YRQJGdT7qem9~Y7s9YYUh6k-87B~smA8kaoXFuxhlTcM2RJ6xCMG~FlQ0LV2NuL97kZGR-cnTlvStKsyjYmgYlZewq7pKv1U3KRlR7ryhuJNP8z1MOyz-6UXvUFs1mu0J2KDyp1qqllrcWDoB4BVUO9FL3k8zCASY5oq358tHMdhdAE61MM2Ot~122K1A__",
      rating: 4.4,
    },
    {
      id: 7,
      name: "Antalya Old Town",
      location: "Antalya, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/9bbd/2e39/6bfeb54c33b003c0a3b962644d2c7fd2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZfJNCrS-Y2aWJZMu0PfKa4FIY1pfsUyApB4z8XqtBT9~rGEnoefoojvl3tPgnV4usrsnvlbhLXJiDLNbYi6JEAf3d-5oVikN4oolvogh2FVZSfiSUGfAMt9mjlJm85DUxToaeMx4V6vB8LVWxj~mDYLN-LRUknEDTJQIinZ3mcBPrm~eyi1ES1jg~lVm9TOcvKCxNo~~6hKxYk1MutWjQJ0b5GFZWMC0UZ7Xp8D5~POHWD4Z-kDqrkLExG3n1fG40s524s8c7YNfFGTMv9AwOPkniEhYOVEAbeP3ANOYHNW4uAfZp1xkXlYeqv-Ot9IsrZLf6h8gkOwiZeTWocsaqw__",
      rating: 4.2,
    },
    {
      id: 8,
      name: "Mount Ararat",
      location: "Igdir Province, Turkey",
      image:
        "https://s3-alpha-sig.figma.com/img/48e5/bf61/31bae3fd2ebb6a66c8ae34d72d500be8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gcRXZLQM-T-vXmUKIgFk4r9NERdQWayHjFYCwKmuJAibfyDkWBM0WyVR9lU3~3G5kYKoMPTzin3oHfpcDqJZ-g-oZqPBzCR7ATNEDpILpM2iFuha3nciaQOoOtKeTH2QTXmb7r7SQZ3iVBBnjNLbf4I2EXIOdgeMBjuDegBzqgBzXjI~~zlJyRy3xfNm9gPQJF-Je85lOK927bK6Vl0uwQm8mL6mumYwx~oOOTfFaOvaqTwAI1nucNoBVDGUQFhWh5RQGAeAVL9OjG33q~iRZ4G5kc1oZ6BiCO3d1Ebl1UP8jfdL6aRY6QDCo9hvzpymUgy8XP~kdPccsMJyzQm-ng__",
      rating: 4.9,
    },
  ];

  return (
    <section className="w-full py-[30px]">
      <Container>
        <section className="w-full flex flex-col items-center gap-8">
          <div className="w-full flex flex-col items-start">
            <Heading2 className="text-[#266462]">Popular destinations</Heading2>
            <Body2 className="text-[#ADADAD]">
              Uncover new destinations and adventures waiting just for you.
              Start your journey today!
            </Body2>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="flex flex-col items-start gap-[22px] overflow-hidden relative"
              >
                {/* Rating Badge */}
                <div className="absolute flex items-center gap-[3px] top-2 right-2 bg-white/20 text-white font-bold px-3 py-1 rounded-full text-sm z-10 backdrop-blur-xl">
                  <Image
                    src={"/assets/icons/star-yellow.svg"}
                    alt="star"
                    width={18}
                    height={18}
                  />{" "}
                  {destination.rating}
                </div>

                {/* Image with Tint */}
                <div className="w-full h-48 relative rounded-xl overflow-hidden">
                  <Image
                    src={destination.image}
                    alt={destination.name}
                    width={100}
                    height={100}
                    className="w-full h-full object-cover"
                  />
                  {/* Tint Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                </div>

                {/* Destination Details */}
                <div className="flex flex-col items-start gap-2">
                  <Heading4 className="text-[#222222]">
                    {destination.name}
                  </Heading4>
                  <Body2 className="inline-flex items-center text-[#ADADAD]">
                    <Image
                      src={"/assets/icons/location-grey.svg"}
                      alt="location"
                      width={20}
                      height={20}
                    />{" "}
                    {destination.location}
                  </Body2>
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

export default PopularDestinations;
