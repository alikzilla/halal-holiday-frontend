import { Body2, Container, Heading2, Heading4 } from "@/components/common";

const TopCities = () => {
  return (
    <section className="w-full py-[40px]">
      <Container>
        <section className="flex flex-col items-start gap-8">
          <article className="flex flex-col items-start gap-[6px]">
            <Heading2 className="text-[#266462]">Top Cities </Heading2>
            <Body2 className="text-[#ADADAD]">
              Discover luxury stays in Turkey with stunning views, excellent
              service, and unforgettable experiences.
            </Body2>
          </article>

          {/* Grid Layout */}
          <div className="relative z-1 w-full grid grid-cols-4 grid-rows-2 gap-4">
            {/* Hotel */}
            <div
              className="relative z-1 h-[250px] col-span-1 row-span-1 flex flex-col items-start justify-end bg-center bg-cover gap-4 p-5 rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/fc29/73ef/c25f2bece16d4918ffba01af77d3d568?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XPRAo3Embm29NswBb6oodRJbAGqLZy07v2zkxYvDWcRcnE2fEKKN96tZuxCmGHRFyNJheCPdyZ7Im3N5Gx68MKcrtf2fNJpasqE6kmNtoGbnj~k2bRIpkxGYF5NAzsAn8l9~mUl46owJ~4X6e8uEAxrZWq48qvOCDqKwfHLsk8qgaZwWGFl7OeFP1upMkWMtsJ5L7ptM1sSQDB0Gfe0bLR2wsQRBIOjsg2e1DpUGmI4YnAgzmawEYobWWrEcvfA02rpqlRZcXj-szO0Oi3Ad11Q5b26Smu-RZp3mekxtNLy68lQckJrJSXrmFzoF2xXB80avtMG-sg121XeJrmI4Cw__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <Heading4 className="w-[220px]">Istanbul, Turkey</Heading4>
            </div>

            {/* Tour */}
            <div
              className="relative z-1 col-span-1 row-span-2 flex flex-col items-start justify-end bg-cover bg-center gap-4 p-5 rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/1ed4/3a86/360788fb9fbc5601e8e9eb0f81b8b2fa?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=s7~Nk-j-H63P8h2wo3OzcMAzRRgp7oHHV4gFizQ2hy3ltJ8Y8RB8SMJ9iG0ADjAC4t4mfLNeC88Ua3VBqtM6GpwsDhu4r8lpOrrMiKVit3Gj1JEARfjQBPtz8gaKEGAi~tKc3IjvDCI7B3NM0pHvskmHgz688E7j3pe161-g-ExiOz63BPIkDV~r3kTFPlHCVpygD5X-Pw~Q7BzNhFdl0mEoLAO3tkTtXnZAb-tcsv3ZmgZnjULhB-l5Djl3bdu16wxrU1UZIyAVMIrJrvbM5BPPpmLiLMWMhmXhRhzDrK6OhPhDA9xIh9pl0zt-Ukn4u901quw44oPF4a~8daV8ow__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <Heading4 className="w-[220px]">Tokyo, Japan</Heading4>
            </div>

            {/* Rent a Car */}
            <div
              className="relative z-1 col-span-2 row-span-1 flex flex-col items-start justify-end gap-4 p-5 bg-center bg-cover rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/4e40/13f4/f80eaf0ef36041342cbaa31607cadfbe?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hrZorMad50lqqwAq4Gum~0Im-a4F~aTwiC7ByAvAM0Hqbn1LSk8DgdvZmjVSGk3Mc0z3TmF~eFZtLhL3hhu21pCOz-JB5NyzGR41HfY4~YRiqYaAT7aZ9Qh2Evlmpv37KCcxfPeeqicHQOt~OEFw7M8hlYYKtxgZEMAPOCg8y1g7Hb6lk8LhCUR~WtQVaz4QOvqAYtAJdYTJiC1IOF4R8ix9yEi-oNGbuQtSFLIw~nxl0GkDL9Y9olgbbVeTdrrfr09VVnMB8DZT~dnWyO6MtWj~4xQEsPG3Ro7uoOWmPhfoQruXzkoZ0FE-cGbwXRDqFG2pQ51Jfuk0tnf5jjIMNg__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <Heading4 className="w-[220px]">New York, USA</Heading4>
            </div>

            {/* Flights */}
            <div
              className="relative z-1 col-span-1 row-span-1 flex flex-col items-start justify-end gap-4 p-5 bg-center bg-cover rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/ac5c/f8ac/7dcaf994a264a17a94a358836a4ae4e6?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=XXghFXrS7Cdt7~IdRdJNJpcNMFYhHHlKfLoPQIu-J33vFgPPGc~1oPI8TbkNJlFUh2XZvG7uYonOeEXXImfw7avXREV5rFKr3rzStdRAXmKAyJuoOL0fpUnmIxlDL-ZD9EkBqnJsgy-DyKz7tKyT0pdsJjfhT-3KUrQSB-3-OrFcdv4rT3zFEEP6EqIIjYmXlmzLyC8iWQ9wqY0d7Tlpk8gRTU6yYPalelw7KgD7NNKiSp3JDkHB96NAix-lSyIjvqf-L4pkGkGjddmFdgsglJ8UqFiabDoUCrC-0qsi8qOcBwdSYpiZjru9sd0rqSnMbDEm8Ki5i1kNcREK74KTCQ__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <Heading4 className="w-[220px]">Paris, France</Heading4>
            </div>

            {/* Transfer */}
            <div
              className="relative z-1 col-span-1 row-span-1 flex flex-col items-start justify-end gap-4 p-5 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/c6cf/52e8/803165f70b86bf7180a8dbf652772e43?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ADQ3gQySjfvLJskXhkP7yvRYiB-mHNfjfazRZDMt32CX~6s2UrAwFIVxtVIFW~SlKnhVIY3VeG7TewUn4Wnvup1-mrsAMlgWmKSbp2KXyIL--yjTrdgx8NkuDfvl7NHUsesaPKKokFW98u~R3iVX1ZrWi1fEMh5d6qATKpRln7X2Qdaz-NJxndpJU88boi9y8xUAcpZKX9A6iRee8OCgaNLojNHPoZsj5pWZ6eFhpE5MjoVCZL-loIj5uyEtWECbQFkg4UUnAJdwubCZaHtk3siMTt7AR2dXib1KPyPEBo0NnDsy9J0x0H0FLaS9q7vc74Wz59cFS-seMjrIJdTVQg__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <Heading4 className="w-[220px]">Sydney, Australia</Heading4>
            </div>

            {/* Activities */}
            <div
              className="relative z-1 col-span-1 row-span-1 flex flex-col items-start justify-end gap-4 p-5 bg-cover bg-center rounded-lg"
              style={{
                backgroundImage: `url('https://s3-alpha-sig.figma.com/img/5a67/e086/023f067882edd051ec141a9d1572cce4?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=iHyLu93X32-sqoukJOoI3EprwHuQ655kT6-EYG5fuRGCV15Rgi5FMPRv0ntm3fJHIW2CcK7gLaCHbMFWlvHypJZ1wM3QGb9cmxjbMWeYULrE77u76Y2KfuDPcUqnFWznFUFa2OCmyDG-nmDtB5nB7XckzstV9F06oAUD9Ea~gkIO-R57FgfPNC8GAEFRtoEqQWIeUJyMiF~V4R0t4-421a72kO0ys2Xh758OeZ7kLa4vU~X-mDugOf9c33uqc~2WlSX24wWjDgYDSgSFM8nBQWqxyuolOj99ITEwka-hsC3F3TDykbjEEgnxo3aTBw8-TgOmVQ8~fchZXxefxpvf2w__')`,
              }}
            >
              <div className="absolute z-[-1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

              <Heading4 className="w-[220px]">London, UK</Heading4>
            </div>
          </div>
        </section>
      </Container>
    </section>
  );
};

export default TopCities;
