"use client";

import {
  Body2,
  Container,
  Heading2,
  Heading4,
  Heading6,
} from "@/components/common";
import { Button } from "@/components/ui";
import { useState } from "react";

const AdventuresSection = () => {
  const [activeTab, setActiveTab] = useState("All");

  const tabs = [
    "All",
    "Day Trips",
    "Overnight Adventures",
    "Water Activities",
    "Private Activity",
  ];

  const adventures = [
    {
      id: 1,
      title: "Guided Historical City Tour",
      duration: "2 Days",
      price: "$90",
      type: "Day Trips",
      description: "Explore iconic landmarks with a professional guide.",
      image:
        "https://s3-alpha-sig.figma.com/img/5bad/ae52/61c73e5de0a8d085a084020e6ea448fc?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A38d0br~JEaPqPrUyrABDzvkNr0wptaPcDVQu2fnmow0a0ECNlifM1ofmx~KK2rOtkYqQrkwe53Nmsgk8UalOB-yCrnpV83DXBwPwYLyGmb-8eEtFiQzuYcH8wUYEL6O3unAZlC4h~ejt2HEdXB~ua1OaBuGPNL0-GbcfrIeaQrTyg24zsGCefMcPTLF9blU6KLzQAbD7omvl4F77Q-W2euwnFczKt8HZWxU5If0-N9maDMEwVe8Lxto-mZkQUgES7oyHYZgesGqlUzG1mZiyqtkWHK80cNxHeAcT~Hk9hFaINlv4qZyRdmVdI4WoqV-mD8MvjiJJjEfYb8a1ZUzcw__",
      onSale: true, // Add this field for sale badge
    },
    {
      id: 2,
      title: "Traditional Cooking Class",
      duration: "Half Day / Evening Activity",
      price: "$70",
      type: "Day Trips",
      description: "Learn to cook authentic local dishes with expert chefs.",
      image:
        "https://s3-alpha-sig.figma.com/img/8eee/3340/3442821f458af9d40c2a8afd4d6e51d7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Zp0ry1SgQOAM1HzNmQMObIPEBldY6EyRv5jrcCK29eBQxj2zUFxCFCYg2ZBxjF03q~p35uWEbg0YXgKzg~C5z-EirBTwgARK25A74~eA-4YMQyzSoDyHra6-ZgGhgfHGQncp7535TNSC5wVwiJXXSJH312hLlv3fLGYbQESHfETGJPmO4cbhSq~tJxeSbz0ehrf~24QHftCL0cbwlNyD~LeOV6R0aj-aXkELYnCxXSxeBDMhWxHL2dO8h6UflIGAvejG5UYerW-Wj1i1E0xupSsX~ENgtiXyLrgEd1S~WFIZDWWz1QG8c7Xbv6ROLvOXufs~l8cxcRnucE62xBBR5A__",
      onSale: false,
    },
    {
      id: 3,
      title: "Sunset Yacht Cruise",
      duration: "1 Day / 1 Night",
      price: "$120",
      type: "Overnight Adventures",
      description: "Sail at sunset with live music and refreshments.",
      image:
        "https://s3-alpha-sig.figma.com/img/5fd1/851c/6b7f5acfb80761025c317dbd2cd7b899?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=alOp-BT9~0hqO2fU~S24c5caSxwHXRtGGQyok41AQPdBdCIn8zejKvCCsCpnLZH3LVv7rGzlfZQ0304L6lrnp3qmeqY7UIVnkC3E7NN626tBULaYK1700eVdoz6AhzSaQT0ht7HH~roQHQXugIkR0HAnkdqaRDjfjDuHzBI5-Gw4wV7mzNZgBESEMca8i8Fx6YznObKhWCy09bA6AWhVDFuA5V0aiHVuXgdm4qSjX~8aWC8NKKK8ADam8iGKdj2AbnEUYUPqrSknd2PVtql8I6-xuxESW2f6YdhaeWZvv7efAnu6V2sZNOaOinst5q5GvyZ0TtuhyV5EPTeAagwGJA__",
      onSale: true,
    },
    {
      id: 4,
      title: "Jungle Safari Tour",
      duration: "1 Day / Afternoon Activity",
      price: "$120",
      type: "Overnight Adventures",
      description:
        "Experience wildlife up close with a guided jeep safari through lush jungles.",
      image:
        "https://s3-alpha-sig.figma.com/img/876a/beaa/8e2e6bd7782dcb098b9c974e84fe28d3?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=F9MdEUtTc-0vm-H4qbgOjWeh9Ey5llml~hjtYKizQLcEgFLP7pRPUsCayMS-uPp7P9RDMjopX8bXZkPN4xu5Pm~kZZ-Apo3ij1iGirSEMZd5ofkmsF1xZjsPgh~9pjAYJz-kgUBvRHR3jqztpK5sA4e3Tc8HkiCcAQsK2FEBUAzRTwuwiTRCobyMuULVCr5f97b91ESU2utC~--Nk34OSuvIUpMYhEhAvkRSX2mV8bTV7LvgomxuI2m8j5tQcC1uYjEXx8eYhYte81ETDXuKEolEi0sWOBYXJlY566bGY84RQmefttnRxCuyUDfIA7As7SXdGyvWOb~rWLQ4Pt9vEA__",
      onSale: false,
    },
    {
      id: 5,
      title: "Hot Air Balloon Ride",
      duration: "1 Day / Morning Activity",
      price: "$180",
      type: "Private Activity",
      description:
        "Fleet above stunning landscapes and enjoy panoramic views at sunrise.",
      image:
        "https://s3-alpha-sig.figma.com/img/87f0/c1df/a3968865a6eb033331e251c98369a847?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ifReKlyDUfgMWUcvF7FWpCUy~hk2lIf2Cz5t1z0Dtv2-XzALO3yAy010IwoxZpv46ahk0ow~fyrXYDzfyZUe-nOmi-hxBaSSe75LRCXsEHdcytkv8~gipkwKIaeLfPt~B5WQrMQJZTZXvM4lZ60PLIYFGKJie~iYhchWq4akG1GDW5bDqLiE~r08dGVFeDqlmjbeGcj7U3VIo420KBoG6UtZihIIgox16B~qA4Mib-pym7gQb5P-xTl1MFI~JLE0nTFCrJFDMVnF0f5DFs1RAbAMeFgPSqltt7Mcm61bjlLNiWpVj4QyVRsqhBjk4yC2TEJlaHSHJAmHI2rd1sKyQA__",
      onSale: true,
    },
    {
      id: 6,
      title: "Scuba Diving Adventure",
      duration: "Half Day",
      price: "$150",
      type: "Water Activities",
      description: "Dive into clear waters and discover marine life.",
      image:
        "https://s3-alpha-sig.figma.com/img/0a7a/d171/08e44b3bfb596df35a1a6b28096aa521?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=I2Ge-kmMS00UsKXfj6lBZGwE0TlZzQdxAbEkHMS0hLEuLTZpag8DgpfooT3Yng8FSl2hkf9xESKBiIUweePlO3RABGG1k1X0Y45~NeHMKGs1Jg9fmsKj7ELodxHdk7BuA7DD2PjoB4r2NCgSvOjnVDpdpfi6sJj0c7~pPFK7DtrBu3S7Bcjq8psMWKvhHVhVFaWMr23rwqCtlgS6z5cF-zMIWEL4mtR~etL-u~X3cmDBWEWF-hYtVg6zxIt0o13Jf5jHXucRoISbRWxbwkEphyIpUAOEPoPs~wZrQg~6ZakZbOk63bl679yXAmXugEWvItXm6VLLQHs~ZOGd5xcKmA__",
      onSale: false,
    },
  ];

  const filteredAdventures =
    activeTab === "All"
      ? adventures
      : adventures.filter((adventure) => adventure.type === activeTab);

  return (
    <section
      className="w-full bg-cover bg-center bg-[#266462] py-[30px]"
      style={{ backgroundImage: `url('/assets/backgrounds/adventures.svg')` }}
    >
      <Container>
        <section className="w-full flex flex-col items-center gap-6">
          <div className="w-full text-center">
            <Heading2>Unforgettable Adventures Await</Heading2>
            <Body2 className="text-[#AEC6C5]">
              Discover thrilling experiences and unique activities tailored to
              create lasting memories.
            </Body2>
          </div>

          <div className="w-full flex justify-center gap-2">
            {tabs.map((tab) => (
              <Button
                key={tab}
                type={activeTab === tab ? "white" : "secondary"}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </Button>
            ))}
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredAdventures.map((adventure) => (
              <div
                key={adventure.id}
                className="flex flex-col items-center gap-4 relative"
              >
                {/* Sale Badge */}
                {adventure.onSale && (
                  <div className="absolute top-5 right-5 bg-[#FFE8E8] text-[#FF4747] font-bold px-3 py-2 rounded-lg text-sm z-10">
                    -10%
                  </div>
                )}

                {/* Image with Tint and Blur */}
                <div className="w-full h-[285px] relative rounded-xl overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${adventure.image})` }}
                  ></div>
                  {/* Tint Overlay */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <Heading6 className="text-white">
                      {adventure.duration}
                    </Heading6>
                    <Heading2 className="text-white">
                      {adventure.price}
                    </Heading2>
                  </div>
                </div>

                {/* Title and Description */}
                <Heading4>{adventure.title}</Heading4>
                <Body2>{adventure.description}</Body2>
              </div>
            ))}
          </div>

          <Button type="white">See more</Button>
        </section>
      </Container>
    </section>
  );
};

export default AdventuresSection;
