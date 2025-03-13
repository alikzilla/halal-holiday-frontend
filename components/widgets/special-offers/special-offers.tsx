import { Body2, Container, Heading2, Heading6 } from "@/components/common";
import { Button } from "@/components/ui";
import Image from "next/image";

const SpecialOffers = () => {
  return (
    <section className="w-full py-[30px]">
      <Container>
        <section className="w-full flex flex-col gap-8">
          <div className="flex flex-col items-start gap-[6px]">
            <Heading2 className="text-[#266462] inline-flex gap-[14px]">
              Special offers
              <Image
                src={"/assets/icons/rhombs.svg"}
                alt="rhombs"
                width={40}
                height={40}
              />
            </Heading2>
            <Body2 className="text-[#ADADAD]">
              Find your next adventure in our curated travel picks
            </Body2>
          </div>

          <div className="w-full flex flex-col gap-4">
            <div className="w-full flex items-center gap-4">
              <div
                className="relative z-1 w-full h-full flex flex-col items-start gap-[130px] bg-cover bg-center rounded-xl px-[40px] py-[30px]"
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/ffaa/d961/f4ec11234581cced7e9b604eed027e17?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dH2XGYNoASAQWw2kWoj4v3ZwGnSlxFBLRbeRS73EG1wCUoiZB3mlyba9veBR4WntNP9DmUZkF~ISyYb~euWj-NaXDAu58A1JvfeCasT~FN9QvJ1arCTGRBKXCBis-uPlflhuxbcEgIFlKcx2AmO3JTeT8AW~nVfghUbabJCDD4Gk34nQjD1untRzQZYlP8sKVXbpWnoXCa~B~bu~L9~jE60HytYcWBdk7cUCf0Z86Q1CmfA7pKZynGokCAjzUQ84SwvmyhKapJHPeSanwhDTd4LW0phPHeYQ1ddUyiJjIVsDFMIfQZzgHeUxWtfq~N~O2lYYuXqQVxVr1ahRlUvXWw__')`,
                }}
              >
                <div className="absolute z-[-1] inset-0 bg-[#222222]/60 rounded-xl"></div>

                <Heading2 className="w-[300px]">
                  Stay Longer, Save More
                </Heading2>

                <div className="w-full flex items-end justify-between">
                  <Body2 className="w-[330px]">
                    Enjoy an extended vacation with our exclusive deal! Book a
                    stay of 5 nights or more and get up to 20% off your total
                    booking. Experience luxury and savings together!
                  </Body2>
                  <Button type="tertiary">See offer</Button>
                </div>
              </div>

              <div
                className="relative z-1 w-full h-full flex flex-col items-start gap-[130px] bg-cover bg-center rounded-xl px-[40px] py-[30px]"
                style={{
                  backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5443/0e41/e092ceb7443d3c8ecbc0dacc05386219?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cz55ItKyS8YLqVPYRo6o3ZwKbemR9NwxBCKCXeXakby28q8uPiMCxgzuv8y3PIc9rdCfNQ86u6kJjkHoPyceD5RIb33iHT5cQTgmwo8bHRYtcYZ8Cv4QU7jCXAbHKgVTlMXHJX7T7pcF-3VK-Vra43xBVvYYAvQMcWtJtQ-0X~nk-9AliWMFSdiZCELPG9Qeq7Bq2JEeT~sz~VbjVCnCBIezqbL-y2uleVjIo7tw5Y2Y73n~JVZbS3XV4zbB99ZBQaRBErhDa7XfrXUuBF~JnhWKWB-UMcEdEZVwbEfNKey2XmWfvIs6EMl62AZdJCBLu5dlCj9ZnUWQEywzsQvexQ__')`,
                }}
              >
                <div className="absolute z-[-1] inset-0 bg-[#222222]/60 rounded-xl"></div>

                <Heading2 className="w-[300px]">
                  Free Breakfast & Transfer
                </Heading2>

                <div className="w-full flex items-end justify-between">
                  <Body2 className="w-[330px]">
                    Start your mornings right! Book now and enjoy a delicious
                    complimentary breakfast along with a free airport transfer
                    for a hassle-free arrival and departure.
                  </Body2>
                  <Button type="white">See offer</Button>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center gap-4">
              <div className="flex-1 inline-flex items-center justify-center gap-3 bg-[#F9F9F9] rounded-xl p-6">
                <Image
                  src={"/assets/icons/star-fall-green.svg"}
                  alt="star-fall"
                  width={28}
                  height={28}
                />
                <Heading6 className="font-semibold text-[#266462]">
                  Weekend Getaways: Up to 20% Off!
                </Heading6>
              </div>
              <div className="flex-1 inline-flex items-center justify-center gap-3 bg-[#F9F9F9] rounded-xl p-6">
                <Image
                  src={"/assets/icons/star-green.svg"}
                  alt="star-fall"
                  width={28}
                  height={28}
                />
                <Heading6 className="font-semibold text-[#266462]">
                  Early Bird Discounts – Save Big!{" "}
                </Heading6>
              </div>
              <div className="flex-1 inline-flex items-center justify-center gap-3 bg-[#F9F9F9] rounded-xl p-6">
                <Image
                  src={"/assets/icons/half-heart-green.svg"}
                  alt="star-fall"
                  width={28}
                  height={28}
                />
                <Heading6 className="font-semibold text-[#266462]">
                  Last-Minute Escapes: Limited Deals!{" "}
                </Heading6>
              </div>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default SpecialOffers;
