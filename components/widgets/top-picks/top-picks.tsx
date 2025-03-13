import Image from "next/image";
import { Body2, Container, Heading2, Heading4 } from "@/components/common";
import { Button } from "@/components/ui";

const TopPicks = () => {
  const stays = [
    {
      id: 1,
      name: "The Ritz-Carlton",
      location: "Istanbul, Turkey",
      beds: "1 King Bed",
      price: "$450.00",
      image:
        "https://s3-alpha-sig.figma.com/img/0b19/3a60/228e101e0558e70f303ab50a3bde757a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=MZcMit5vdD~OuiT1EnN5YJACSniCynV2kii-nEPxiCK~Xc7eA3lmPe16jWg4iBuD~p0UbD711iFrPLHUrXd1RWDxruVRuVsx~sFyn8SiXr8sLDDMSIiS3RpzVXK8VD1r3lWFNzTvAmX0znmnojGEDFgviSRef~5Ubfc2tvpMn6gIk~L2KwCulNVdzQtCk3eYtlK-XxQGa9otOuYL91q3dLciDsfsHl6aGa3HN9lsHjkXcFERDSJ2YGZbnw3ajyvBn5qvlnV1STcTdr8j3cWppmDfe7PCTxPs1VNb86EzBNg2ikaQwfwOza0HXQBQv0bE0mioZ6i0bLIG084iLk-KZg__",
    },
    {
      id: 2,
      name: "Kempinski Hotel Barbaros Bay",
      location: "Bodrum, Turkey",
      beds: "2 Queen Beds",
      price: "$350.00",
      image:
        "https://s3-alpha-sig.figma.com/img/4ae5/f259/54e1b3d4d7eda8e315ac590863845f95?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=pVagRHxgj~OuUgptK2TBr-SVUn5wHzhzP8h~OOb-wNguxVVCrU14IOHw~mL7y1KTeDPT6tlCexuJhp0HqGikWpC48Wx5zzAThE04tIM5-tvAxM48X2AG4TgCdgoYfcjJULYluT~8kYhbOAL2zq7gRXAs4KsHE5toQ5Xg36vjfG65KJuMww-M~RW3XJgY~~Wx~i4pAu0vU2U7BlXNWgnPvqxQ2CxEKTKD~IIlBOUw0KdWjywyFncN6c6u-i-YEIUlUS59PjTWWrFtHs2iSPSva4QaUXz-u80432oo-QHBA5OZt9SIFWcUjJcgp6PHNrdJW-CppU4YZPITunddHUnIQQ__",
    },
    {
      id: 3,
      name: "Ciragan Palace Kempinski",
      location: "Istanbul, Turkey",
      beds: "1 King Bed",
      price: "$700.00",
      image:
        "https://s3-alpha-sig.figma.com/img/6474/b19c/96b570306b6285243f2a1323c976d649?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cKw~7S93Ku-aICGxm3~FqidwipcQzkzgYTA3kUdFiaE0LTyIfORZ1gfScgOepRT7gDqZtuVdEzAebye1J5B1Xh~UiOPoMeSKZOj67r-BSsmstrXt6ozF3ffPhI7hE4bSe0LJZKm1HXMix~DtQo97CvoL-q5-IYOg7O7BX2vom-rW6z~gYpvLChcXw0KFyoG7kBpVUHgYO-ctsUGytMYTbkaU-eyr6MQ5IZa2OoxWbfc5S9ppKIcaU8i1qpV4Io5wPZaKy0cu0mhevX53~loXZKTcqt114OP5ZwDDFT1ht6bYvKQpF6aA7ojA3xz4ki9jOuKWW0WAaMxturg04V4QnA__",
    },
    {
      id: 4,
      name: "Four Seasons Hotel",
      location: "Bosphorus, Istanbul, Turkey",
      beds: "1 King Bed, 1 Sofa Bed",
      price: "$600.00",
      image:
        "https://s3-alpha-sig.figma.com/img/4816/5774/768a89a43a8e457dbb4d11b1e9dbfe9f?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=tRnPF1l~kgctDMT8zkeE1ahir-KwrQm8gPCXpHJhWrqpWhLz~4jmwLo36pEEK0eHzR7GCbV1B2YBTix9O39RoEWoSfLMcayDyAw0bmHh~5nzf6BMz79~q3hInBfyv3L-WGeqqQphxrg8BB56b1DcAIeg4MjL0QzrNdozYznIJ7zrHxcN0kgQAvgK1WZ-j3-rjvqkR6dPMpAWjfaxXuHWNHQSkeVABFydoGFjvNcOOsSKx8aOmaJs7ILTlFGG1xz1OodJ9G-lmXFWEjOiin1y9AwCjUROpUrNxQnv4EcTaGlCfb6hUKR9XnaQlImUEtVxsp42hqgVVXoN~wS10lT9FQ__",
    },
    {
      id: 5,
      name: "Radisson Blu Resort",
      location: "Antalya, Turkey",
      beds: "2 Single Beds, 1 Sofa Bed",
      price: "$200.00",
      image:
        "https://s3-alpha-sig.figma.com/img/9bbd/2e39/6bfeb54c33b003c0a3b962644d2c7fd2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZfJNCrS-Y2aWJZMu0PfKa4FIY1pfsUyApB4z8XqtBT9~rGEnoefoojvl3tPgnV4usrsnvlbhLXJiDLNbYi6JEAf3d-5oVikN4oolvogh2FVZSfiSUGfAMt9mjlJm85DUxToaeMx4V6vB8LVWxj~mDYLN-LRUknEDTJQIinZ3mcBPrm~eyi1ES1jg~lVm9TOcvKCxNo~~6hKxYk1MutWjQJ0b5GFZWMC0UZ7Xp8D5~POHWD4Z-kDqrkLExG3n1fG40s524s8c7YNfFGTMv9AwOPkniEhYOVEAbeP3ANOYHNW4uAfZp1xkXlYeqv-Ot9IsrZLf6h8gkOwiZeTWocsaqw__",
    },
    {
      id: 6,
      name: "Swissotel The Bosphorus",
      location: "Istanbul, Turkey",
      beds: "1 Queen Bed, 1 Sofa Bed",
      price: "$400.00",
      image:
        "https://s3-alpha-sig.figma.com/img/48e5/bf61/31bae3fd2ebb6a66c8ae34d72d500be8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gcRXZLQM-T-vXmUKIgFk4r9NERdQWayHjFYCwKmuJAibfyDkWBM0WyVR9lU3~3G5kYKoMPTzin3oHfpcDqJZ-g-oZqPBzCR7ATNEDpILpM2iFuha3nciaQOoOtKeTH2QTXmb7r7SQZ3iVBBnjNLbf4I2EXIOdgeMBjuDegBzqgBzXjI~~zlJyRy3xfNm9gPQJF-Je85lOK927bK6Vl0uwQm8mL6mumYwx~oOOTfFaOvaqTwAI1nucNoBVDGUQFhWh5RQGAeAVL9OjG33q~iRZ4G5kc1oZ6BiCO3d1Ebl1UP8jfdL6aRY6QDCo9hvzpymUgy8XP~kdPccsMJyzQm-ng__",
    },
    {
      id: 7,
      name: "Radisson Blu Resort",
      location: "Antalya, Turkey",
      beds: "2 Single Beds, 1 Sofa Bed",
      price: "$200.00",
      image:
        "https://s3-alpha-sig.figma.com/img/9bbd/2e39/6bfeb54c33b003c0a3b962644d2c7fd2?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ZfJNCrS-Y2aWJZMu0PfKa4FIY1pfsUyApB4z8XqtBT9~rGEnoefoojvl3tPgnV4usrsnvlbhLXJiDLNbYi6JEAf3d-5oVikN4oolvogh2FVZSfiSUGfAMt9mjlJm85DUxToaeMx4V6vB8LVWxj~mDYLN-LRUknEDTJQIinZ3mcBPrm~eyi1ES1jg~lVm9TOcvKCxNo~~6hKxYk1MutWjQJ0b5GFZWMC0UZ7Xp8D5~POHWD4Z-kDqrkLExG3n1fG40s524s8c7YNfFGTMv9AwOPkniEhYOVEAbeP3ANOYHNW4uAfZp1xkXlYeqv-Ot9IsrZLf6h8gkOwiZeTWocsaqw__",
    },
    {
      id: 8,
      name: "Swissotel The Bosphorus",
      location: "Istanbul, Turkey",
      beds: "1 Queen Bed, 1 Sofa Bed",
      price: "$400.00",
      image:
        "https://s3-alpha-sig.figma.com/img/48e5/bf61/31bae3fd2ebb6a66c8ae34d72d500be8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=gcRXZLQM-T-vXmUKIgFk4r9NERdQWayHjFYCwKmuJAibfyDkWBM0WyVR9lU3~3G5kYKoMPTzin3oHfpcDqJZ-g-oZqPBzCR7ATNEDpILpM2iFuha3nciaQOoOtKeTH2QTXmb7r7SQZ3iVBBnjNLbf4I2EXIOdgeMBjuDegBzqgBzXjI~~zlJyRy3xfNm9gPQJF-Je85lOK927bK6Vl0uwQm8mL6mumYwx~oOOTfFaOvaqTwAI1nucNoBVDGUQFhWh5RQGAeAVL9OjG33q~iRZ4G5kc1oZ6BiCO3d1Ebl1UP8jfdL6aRY6QDCo9hvzpymUgy8XP~kdPccsMJyzQm-ng__",
    },
  ];

  return (
    <section className="w-full py-[30px]">
      <Container>
        <section className="w-full flex flex-col items-center gap-8">
          <div className="w-full flex flex-col items-start">
            <Heading2 className="text-[#266462]">
              Top Picks for Your Stay in Turkey
            </Heading2>
            <Body2 className="text-[#ADADAD]">
              Discover luxury stays in Turkey with stunning views, excellent
              service, and unforgettable experiences.
            </Body2>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {stays.map((stay) => (
              <div
                key={stay.id}
                className="flex flex-col items-start gap-[22px] overflow-hidden border border-[1px] border-[#F2F2F2] p-2 rounded-xl shadow-sm"
              >
                <Image
                  src={stay.image}
                  alt={stay.name}
                  width={100}
                  height={100}
                  className="w-full h-48 object-cover rounded-xl"
                />
                <div className="flex flex-col items-start gap-2 p-2">
                  <Heading4 className="text-[#222222]">{stay.name}</Heading4>
                  <Body2 className="inline-flex items-center text-[#ADADAD]">
                    <Image
                      src={"/assets/icons/location-grey.svg"}
                      alt="location"
                      width={20}
                      height={20}
                    />{" "}
                    {stay.location}
                  </Body2>
                  <Body2 className="text-black py-2 px-3 bg-[#F9F9F9] rounded-[30px]">
                    {stay.beds}
                  </Body2>
                  <div>
                    <p>from</p>
                    <Heading4 className="text-[#266462]">{stay.price}</Heading4>
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

export default TopPicks;
