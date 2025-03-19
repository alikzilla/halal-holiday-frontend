import {
  Body2,
  Container,
  Heading2,
  Heading4,
  Heading6,
} from "@/components/common";

const BestServices = () => {
  return (
    <section className="w-full py-[40px]">
      <Container>
        <section className="flex flex-col items-start gap-8">
          <article className="flex flex-col items-start gap-[6px]">
            <Heading2 className="text-[#266462]">
              Best services for you
            </Heading2>
            <Body2 className="text-[#ADADAD]">
              Uncover new destinations and adventures waiting just for you.
              Start your journey today!
            </Body2>
          </article>

          {/* Grid Layout */}
          <div className="w-full grid grid-cols-4 grid-rows-2 gap-4">
            {/* Hotel */}
            <div
              className="relative z-1 h-[250px] col-span-1 row-span-1 flex flex-col items-start justify-between bg-center bg-cover gap-4 p-5 rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/a511/c2db/8ce2766c1f8cf7b62cea0170875c7bf4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MsBpgllGXa73HS65huPpfMlvtmtocycyGucyilrkHlx-KutCG5-yxSsR-ccLbO6HMguhxKXvbjAPU5KZdfOcsdYWUCQKsJ47gaqGFRpQBcW1PDhsZ045z8wd6m1o7K6xVWIA1B0hCVP2W-1yM7oALFQLeSdGeQzU2sOqRr4EletNHRIKKP~fcucgXFQATIW4EktBX3XLjd4snfPvY~ZptOuAWln36OC6lkKshsl1qznWEdBuHP-redzUiuAOFg7ykPdmxDexBNtDaUX7UJKd8MfsYyLUl2bD3QjVmKflcIbvHIVwCis6P7lVyNuzekYHK6wi9UuGOAPs34ocHFIJuQ__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <div className="text-center py-2 px-3 rounded-lg bg-white">
                <Heading6 className="text-[#222222]">Hotel</Heading6>
              </div>

              <Heading4 className="w-[220px]">Find Your Perfect Stay</Heading4>
            </div>

            {/* Tour */}
            <div
              className="relative z-1 col-span-1 row-span-2 flex flex-col items-start justify-between bg-cover bg-center gap-4 p-5 rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/e07d/f969/b10bd469541b169cf2d1e73b79bdb9f2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=nln~q14uow1gJUGMcfJnmNK7F1KU35MYaVS6T3QTK49N8qU0hN4QiElluar7eQx8iQOJzNsB1yWGkDVkM-e5eWb1UiOfHtrRBsoMhlA-muyok9Tiohndjn1ejEcO897v6SMZnbLw2wWsuhuu8kYBLPrn3j7vafsLreKASiRTvhmQksFC2fmOXb~-UYPAGBRzSpWYlmIzs9pHMR6vEOGaQZRgy1fL-CDI379oQ2MbiziESnJNRC5lvSaCfki74OA2MVTMbFV6tlh~LFGijsSjSZMnMJoinCD1b4CubUKp9aHk-CtS7Tsza88jK1UAE32RmHQQ7lHxxwhMkDSqPbN0eQ__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <div className="text-center py-2 px-3 rounded-lg bg-white">
                <Heading6 className="text-[#222222]">Tour</Heading6>
              </div>

              <Heading4 className="w-[220px]">
                Explore Stunning Destinations
              </Heading4>
            </div>

            {/* Rent a Car */}
            <div
              className="relative z-1 col-span-2 row-span-1 flex flex-col items-start justify-between gap-4 p-5 bg-center bg-cover rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/e062/26c7/e711fac42f1d62574696786b0deb9788?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ffQ0pc5gNe9epe6JzxHcKMFtLx8Y9Yr6XWxWTrK-3Rhxv6cZQbBdjEM5BkeWPIodY1RuCE8xfMSvo4FCXU7rP-3g8n1NhVGz-DLBW-nvWpt-1ZO8Qi4KA34sDyRHjVQtefy8j6u~7UfeULNpHE4xCw2XxqSpJyOZJdalzDbRkgP0iOsdqZE7vUGEEkLuMGmIq4512cw2lNYx1WRN8OLAe6tnLYwaylmgXYF82bd0NH0UlgE79mX33jMTAKXOF1O0rZYvnrPPZzR2QbmhYqUTQ8cx-09XjwqUKrhPdhNyCiMXa4tfE6zo89hbcsuFB6EyRJEH3rzmJvN5GE1yJf1S0A__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <div className="text-center py-2 px-3 rounded-lg bg-white">
                <Heading6 className="text-[#222222]">Rent a Car</Heading6>
              </div>

              <Heading4 className="w-[220px]">Rent the Perfect Ride</Heading4>
            </div>

            {/* Flights */}
            <div
              className="relative z-1 col-span-1 row-span-1 flex flex-col items-start justify-between gap-4 p-5 bg-center bg-cover rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/62b8/2549/e9beee31fcbed5bf9fc84baa0121add7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mvm6pAX~l0fakl3~4YotHr5iwKR6aC7YWxhro5qAe6Lmv9dnBCrX5dEFhpAKnNsAajzyhU1qC8irKmiOtHu7UF2kBIUnJDNP~s0i0gbhl4L5p~1BYqZpPWhlHL7pVFJ0-DGEbYXHXQFAuMTmeQKPW8uz4SJ7LN6EVTz5bN-qVEBCi8eDzQVWq4LIAG9pZzq-h-bQnxdh3HBq~oEd4lz8qdf8dqg71DeKrW34Vsug1AEnWl79Uy56Xu1lWnB7GxyqiUU1uFb5qHjdo7LUX~ngFi9AiEiDrI11wxDyEkWVTweDlDDEwIW~rYLppQM8VuMI2OeeIU-ue6tpZzXmChuLsA__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <div className="text-center py-2 px-3 rounded-lg bg-white">
                <Heading6 className="text-[#222222]">Flights</Heading6>
              </div>

              <Heading4 className="w-[220px]">
                Book Your Next Flight Effortlessly
              </Heading4>
            </div>

            {/* Transfer */}
            <div
              className="relative z-1 col-span-1 row-span-1 flex flex-col items-start justify-between gap-4 p-5 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/344e/b219/5781dbb565a63969b052135b7d0cf4e6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WYS6qSCPCPFtA-sXSX-BCDArk5Sc34rL4RFTKov0gOP3ZTD1TYpg4WJA62aDhrXBLU5wJ1aVtU1Xvov-Ie5sl30Rn4g-paPRLJ7i55G0mSiqfi2H4Y~10rk0YQDmh33hVOTgfg8qmOyLJHDmrAk-zex8EdvechYVZxs9~HPPDXhV0PHDzOteZjwD9W5Uqzjc4caEKT1DgSKk1rgqTczMniNkIs1dZjyFgwwpRxzbsMEQLMgrV~n40hDCilvOtc9ysNLX4VOXG9-B-9iS5fxteiN1w6h~kXpULzrucGpiJ4nxv03Ax4m2Ay4U~1spuihXzvJk7mEZPR7NxMlVjMaIWQ__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <div className="text-center py-2 px-3 rounded-lg bg-white">
                <Heading6 className="text-[#222222]">Transfers</Heading6>
              </div>

              <Heading4 className="w-[220px]">
                Enjoy Hassle-Free Transfers
              </Heading4>
            </div>

            {/* Activities */}
            <div
              className="relative z-1 col-span-1 row-span-1 flex flex-col items-start justify-between gap-4 p-5 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/246e/01f6/9ca50f58e06cd17a30dd555c81952161?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FwUPYlpb89YMGOAW4NPkhSnK~jRKWPG06rRkezlw4vc9oPNXa4HZZMy66qjaWcmA5TTXgEUAMY~gkRS1zZN4wxorOzHnXZb1MOFLRWaPBUVgunyTndPK~f9LdrJstjM0Fqe1UJes~S8YzrXE1yNdWrsS2JJ-reOt2ZCa6dMdUqa2SEJWpznwlLzm3KwrJia0gUnzn-4ohdl4AxsLhTtcw41GWLCmGdtvfHaNPGDRLeOTs2IWYQit4dqRKus0eBmQBJ3m9HTc3soehgrWhgIqHmpn6Eo7U51l6p8UXhMuSUfOOBoxAswZXpuDYMxkQNP3~PqgUGhGEFdDQugR-WsFtQ__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <div className="text-center py-2 px-3 rounded-lg bg-white">
                <Heading6 className="text-[#222222]">Activities</Heading6>
              </div>

              <Heading4 className="w-[220px]">Adventure Awaits</Heading4>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default BestServices;
