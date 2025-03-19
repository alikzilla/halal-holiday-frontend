import { Body2, Container, Heading2, Title1 } from "@/components/common";

const OtherHolidays = () => {
  const holidays = [
    {
      id: 1,
      title: "5-star halal-friendly resorts in Antalya",
      image:
        "https://s3-alpha-sig.figma.com/img/2e2c/40e0/f8533be84bbf9a6612ebed8f4e6cfa3d?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kRNFfco2oea94ZZZVH3eRePhMZAivOn8G1Upv9ltZe-6eG0fgyV2F3XIudovztwzMBJLx3KQlgBq1NqVxg4ZJkLqtpPgDZkHlbJKdunX94hg1qae1r9GLMiY1Nt6ye86OQsIwX0PYYG740z2rBCCrTzyGnVcfiPpczq3LzjDcOUv35NEAN-DzfAEWVhPsRouSq4q9Hj5U0PYoGjvCMPkUEPmNOgdDNVc~op6gm53tEuTMpRg5i1hjSCayuYR5cV4w-5-6738Ft9xmw5Us-If7BBS8G0udt25R1-GKI7tuD9iZwEiJUNx5YpNYwdu4J0jsx4~gO6M-JIqR3TJQfRo6A__",
    },
    {
      id: 2,
      title: "Halal-friendly resorts in Antalya with no alcohol",
      image:
        "https://s3-alpha-sig.figma.com/img/f81c/d6cb/03e43ce110857b7bdba5d1fc045f8cdd?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=JW7uEjPCzzOfsy91bOg3fFiJaZj2q~eojgR79raHkrh4flcd3DVk~i0zqPGvmnVPOhS2Y0W0sikE5~SMCHLE4X~xoYvyQW9q0lHdaPTNimyrfW7MLAtMOkzQoVaKiD4EG~9qMRwdWTMkv9zeWnVsTXRIntgcZaUazRdl8i5IQ0-hwO6ukFXIPS0fZfPS0zHs~GE4yTj7zGtxWW1kd70pUmj9I8I4hSxukddBADg6bmIFARvr8R9Sek05K1gaMqHuWC-gVLaOGhHO36n~Aar9UTX2urThVDhpOiA3Fk~eLJxwc8Gce76Ymealo0GyxBO50ZB0GxstxjvnPTuobzgUNw__",
    },
    {
      id: 3,
      title: "Halal-friendly hotels and city breaks",
      image:
        "https://s3-alpha-sig.figma.com/img/2d73/e06c/1558be5da89474cc2480e7781483e7c0?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=sOS7jbn9Do4Lu5jIWzjK~qIM-2oSxgmoFqQ8z02KWcNjmxD5QAf0KoTS~lBBOltNvNMcFuRKNJTqz2iPMnN-TH2AhZ5Y~lLAWqmJdJR9fJzLmKhJLABUJJ3NsQy14TEquAeSfyIR0Qd7H9OFdrgxwdC-z80rh-8DqQf5T3OprcmBAKlGYWpuXQUciCFPXkMTHyxb2ExLDN2mZSQgIY4HGeOZlRGvN0Q6s5boLZSEgaWNl33ZZer5VhPiEM~Mjt5~gEIcySU~~9NBWCN0yp5dOoCMGyNKxP--KsyEVlZffBHW9Be3VvV6Ws7qglkliWURl0Bj68AlBVZUzQw~B8Fx9w__",
    },
    {
      id: 4,
      title: "Halal-friendly resorts in Alanya",
      image:
        "https://s3-alpha-sig.figma.com/img/1040/7b52/1c56beaff2e64a6c2d9b19cc67f23104?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=O0H5U1lKGZDh7MbOS1SiE31BVs3QUC7kTEU9ulYcV3U4Upk7~ZBVgUqsxufxtTBEv5ehAIsVUVi4WXxpRwESuor7vyeoJ-Rz0vx4OdBllAny2dgQcuOkXzvIaJhdwPml5SfmLxhq7eCxMcHfQKFxtRnJwuvSODcM-hPjObiG1rnCXGpHBqf9WPTBd-xnyNWFtA7WZuABrAOylUYv1tJ7uAHpMiDSwuztNuq1COkc5~yhZBdXK5uhNK9ZdISUv1yjMq93wenWCyc8Nbz5OLWSTCFGo8duW3JEmWnwFmCx8SNQwrrfvyEvsjTaVJ1kWBL1K0RUcEHv3iseAgXdFzvr6w__",
    },
    {
      id: 5,
      title: "Luxury hotels with halal-friendly features",
      image:
        "https://s3-alpha-sig.figma.com/img/73e1/6788/9907072e398c531c23d2e4925bfe0f28?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=bPznARcLsHNETJ70qNUSKz7~hmPyTk5GI4rhdME~ITGz9vsmXjsdE7pgP6X0bf20y8P4CKZxpv9EayCd1f0mcwDt-Hdf31bwzIpptUK6wMMXD7v4356nafqiLfLD6O~9z9ua43bFDMYHf38vxsfpfVQ-tC2gG30HBG2N2peBT~wn1ATQxyvKQXU2e3mPzqqAw~mHz108WHKDaQ-FvJx8PkdxgM6dSlKoDymOn0X15XZY~IDyJRnZV0Z~u7~Vo2ePAwfafDQv9oA9xAHqbORRFzZX1qQqKmD0zHWvSRO491kX4RNNc68Da24PXiZrFtzwsIY5zyvpuF9a0MwRSnObgg__",
    },
    {
      id: 6,
      title: "Halal-friendly resorts with women-only beach",
      image:
        "https://s3-alpha-sig.figma.com/img/875a/1fa0/739f2283b1a866a57494066eef4484d8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=RIwtLI61dA5T33SqgiRmu824-wqvabQwUmdLhDd9MKD6PgqekyzWSWqceTWO1neF~abgMHkBJghAwjscQCSr9MoauavUzgQrYD1JVeObs4IOmXlNf4H4YvMet305tTZqKZQvv45UXTwh8p2f~KNQHuE1j5EqllxJaj3muC9T3FP0te4tmpIhjFOQqowHaVyhN~w~YKjIqpD1oQEc5upjL9NWCILuPpGiyCJBoYKOWgrdlkil5W7d~b~GdUgXJHCSaoOC-GrOifYkws8h~bpoG7WiHvihWsGAXmUOIRsW6Hn7AFhHV9D4KLkizbjSOvQH9E5axGriHGrhbU1KQIksWQ__",
    },
    {
      id: 7,
      title: "Halal-friendly hotels in Turkey with private family pools",
      image:
        "https://s3-alpha-sig.figma.com/img/9085/c03c/0b230edd74457ede97ab2e74bc4d72cc?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Dp2wzz~089kI4o1gJvfzk0cCDTYtqyZy0g4b4R0PmV7L~HMibveAV8K-XFURO5btwYZOoZ~Rkb1doBtMg9SQUOYeBFzQ5rsoHbust4hpAoWndhNfsB0pP9ZPb19Bozt2ldo8JmRRpZCxgYnnvmNrd94cxR4sJSfzIRykrCnJVlyEJteYogMp8VVrtbiZ~N9UvqrfK~MN0SExFjgKWmOB7cc97Tl0Pxdmw0Aomlt1w3Cqrt87OQWdRHkUCXA9vxcOfACb6H8GDilAU9K7EyOkXWhuah2A6YBn2sxCDiAzLVILpC-BNm7H1YvsMMWKxw7Hh9EekDwKhAbhBGDgylBQoQ__",
    },
    {
      id: 8,
      title: "Cheap Muslim-friendly hotels",
      image:
        "https://s3-alpha-sig.figma.com/img/d59c/75b4/6a2ecc7747138101387d05df46f59894?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=GchT-54f9vle3CI3KcTjINrnqT8mH8umwInnIvMyfuiexKbTyAI32viOE7zdYkeiiFfiFbIPX-SqyRtXe0dQHyR39iT1cZNwy-kRAZEwc0QVvmGVJrvehrru5d1Xb96VMFR49QGEk1FYnuVhzFhEIT2N4u0dZ8sMcupwr7L6BzfK~rNYtAimq6mpLlqZpBIWnyk5fgsTqN0MWFz1K1FXfbHlX~J1yZ49u0J~bzfQjUG~~Y79t2-OBZ3BGA6VBXR-H5DcOWCUFGjsgCCp88Qa-gPh7xqJuvX-fHXQNymyZAR1RY3b79emHhaLlYXcpOxf6hMhxTaiSeftIgP9Ut~94A__",
    },
    {
      id: 9,
      title: "Villas with private secluded pool",
      image:
        "https://s3-alpha-sig.figma.com/img/962f/cf2f/2b6d54e2de003e268071638e1c9815ca?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=LfsxMoadYIUOR~dfpTVYmOqNfKLraAlABaOoc63OfEkCBVkZF2iuy7jVWA93Jq2OgmKUKvNDtx1Sy8HlRKkv6jUDFXCgParRky8iKhnk-3PvuocU8EhAzf-4uum8frb~7OZUSms4cv9fBWAH-MFcjKQX5aljF1gkdRT4HRuDl1PS-27HfdFVn8KjAou4HR~eiQ3dznXX9i4UdV2Jw51HKKcJDbAVlqXVZFcoqIJHhDZt7W2PuHLwgXwthpT3ovMb1eBwvyV5g7EHsPAdri7cr1tOQC4BUXXeUfeybZ7i2QuKcFB7a3pVml1XtjuUhfrugnn949M6x~81uW2mbME9Pw__",
    },
    {
      id: 10,
      title: "Halal-friendly hotels in Antalya with ladies-only beach",
      image:
        "https://s3-alpha-sig.figma.com/img/7517/b760/6ca258171630ce3189a6d03790e0d605?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NggLxPj14fquDlScXkfwVconptk7WFykqj2tKnbztDB3h4RFcMgkq02VTKEDiLQ3JpS4M1Tiy8vKLY4zv2lWs6xf3j4K87YSMJwWKeKGnVC4uEfziFFH7wKybz1wYxV20eiezMrc3LWXDDehHSoGzxjxB91M8sTwcPvo5~Fi-llaGJtXTXyjwZ5t9h6EZw3pyfgdnWO2cnttbydLrodclDi3smsMUbRtrrieqj6EvGG3C-ENWapEos3WUgymub92wlv1Z98elCsoHrtZg-MnkkiF94Iue-Ct3dnI270SgL8UCSa3qe9MS5g03va-1OtQyOpIqXHhCmmiPNVIyc~8jA__",
    },
    {
      id: 11,
      title: "5-star halal-friendly resorts in Bodrum",
      image:
        "https://s3-alpha-sig.figma.com/img/2584/d463/a14c90e5ce1d403641e85f37268ac8b7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Mz-ZTK5BrSzGs6QwpH5UznmGeGrPFNZaSSfwati4jWj7WzyKgq~Uan1K3tCzfb8870e9Igs47i-l9ycgDd7OFXiF8bGrDbI5l0rrMX2foGhlGVnR8jmUE2vJt8qluyZDMUKZcssuK02kCvtlx~MqvLL0iIKnweLM9VE9-F82Z0GocqsD61H7BC4VFyBDQ0aZUQ1fYri2wDAfH8l502~dxcTuTM-FjClMKl3WhyOZSFoMDZbB8dyiAx8cxirQfA6GHC2rTEBgRSJeL87f2t7BFlNntaoYxc1qxBiw-ca8ebv3YynuXtwbN-7Id2IRfkPE1O7CZTeqfMq4t4VlI-4a-g__",
    },
    {
      id: 12,
      title: "Ladies-only spa breaks in the UK",
      image:
        "https://s3-alpha-sig.figma.com/img/2ad0/2e0a/c04d25b44a781b79c05fcb2b567c5df9?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=feU-6BGlvCInZGhqzrMR7RBNOS53pK8Ce0C~0RY3uq44Th7MjcxIF50lZUWhhyQvxK-250Gbs2u8TJpnuVhYMhi2KSih~Sc~KIenCUhGid3Qyoo6UfLB45dgM2jlHq~9waMeecO195tLyIMZFE5~Y6YegIkP9GbAYPH-8Z4fK9ynL8qBzDCJ7iZpUpX7MW3thaIf9tSyLVVStlDr8mvDp8sVFbAuFsdmr~5rUvNHXi-0DtNnmgn69tKiHFZJNEWbNn7MO3AT-7MiQpoz7L~wGr7lGIcGTki0KBoaypEgUiCUx6M1ftQvHJz7OdWfmZCuA-rxHLaFwQNfSE4MsaYS9g__",
    },
    {
      id: 13,
      title: "All-inclusive halal hotels in Antalya",
      image:
        "https://s3-alpha-sig.figma.com/img/b952/29c5/e4c16540c6e5ae119f6e8b849d1b199a?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=E-F03tvxMEcxNrLcVxbRseKeb2ndCNvIIkmnkFEUn8HYIVq4RbYEFD2Acu6JtuBoCfeQW6y36P5t9AHvKuOOV4Dv7W-H8sKI9Z~mzBaiQwL8e0ufr6OY4FE7XQeUMORpoZ3aP6-8Q8btz~ylD5qy79lCGDTRRvmY9m6W2M0mxTcouy30oxjEjYykfhLRUoqbx8jw4bMiGdrCCrDNKJMGGocjTz1HyFAwOCFJZ6OnvREM~RZ1fHzILMtcrlzcxhy1HfDXCq~tFW38hXXGYJEORyrLEmwx3dVojZ3FpetAyAry-~b78XL8h7AFsuN6S~QzTQsz74MSdDVJeLZddefFNw__",
    },
    {
      id: 14,
      title: "Muslim-friendly hotels with ladies-only pool",
      image:
        "https://s3-alpha-sig.figma.com/img/a106/aab5/51723f79f4bf5696394707a677a520e7?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=kNM79ZExT2eLiXvp6OegoDcCcNMDA6VsOhc~gLLrpLUF4MzZqzTJ3yR3ez~XAcSUyv6gkIVP-XTGzEVoZdjw7s6~4L8vhF8Yhq0lKsxpxqPb81Ws7tGcBvVwGI~CZoPkk2B9l~FOdRXuNYbk0hgakriNxU8t~J6ZkxtorNOUx-H4YYTt2oCOg4FLgxy0DDlS8V9W3FVOGtJqSn3uzgBkbIpiliRrc0MGB8lLHeu4ncq9rzcgbWeD1RsiCa6gqxcoiSODfHZv6TIiAcSJQaINyS-u-k0CdmdKeqLXjsjQsPbyLU9wg5mwKTlUYehjyBH-f~gdxONhzZE2QnoPKI2cSg__",
    },
    {
      id: 15,
      title: "Muslim-friendly resorts suitable for honeymoon",
      image:
        "https://s3-alpha-sig.figma.com/img/e35c/419c/3d041faa4f764937addeaffc10657cf8?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eBPk8NVOSYZlbnIKUZRYT83s~Klkn4um11YqqeaWx9tHH6OctUG3E0OFlaHUF-kpPYqMc~fxNfCIyFFcCBCqBD5N9CmK0xYlejFg36RocO~-yzV6LZPtrrC~cB3DUqqFHJnuxtRPk2XA9ZTaiix8U~MvcHfonl0iJIiqpsIhXTXYxawETDuZhMFKi0MKZ88aITYtUVJ9-MA74SMPFeCElJ6WZ5-EIzWDlXkMJDTLc1wG49fGjUzCt-2jga6k48siOUqGgZUxKQrKPxK89OaG4fCyV1v4M8Nn9ByQpzgrs7Ko-kCviFNB5LzjW~dcYuOZLgAa5llXGBAC01RRdB-7mA__",
    },
    {
      id: 16,
      title: "Muslim-friendly resorts suitable for honeymoon",
      image:
        "https://s3-alpha-sig.figma.com/img/34b3/259f/cb84a728a8d14b66d938b32d0e0f96ef?Expires=1742774400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=VUZH43luME-4DUHfcMh91u8MGd~dOmt7sxXO4gzQ7vn7I-3-I4Ao2Qvup3aGLrowvxY2qc7TwRlqLAlp4t9XvL2vn6a3CsRTW46oUewEpYKhF2Oz0lvEQokn1TeP8kvHquN7kfHlsbPQUvP0qYqdtsOqLdMl-eqIHN68GpEkK0-x5yf325MaUypaUBf--LkTS8-hDbozdTABuTlKC5nkhYJK0SuBIeEicXlxZHzJFVVsc9RmEVZOeLApWqk-gKWU3SgK2VfWej0GVNaG-xc5VgSUO~M4oY3jIxLlFF-Nx76SvQuhmqF~uhS6b-3OtLlGZcxyzkLQef02mQSEPAiA1Q__",
    },
  ];

  return (
    <section className="w-full py-[30px]">
      <Container>
        <section className="w-full flex flex-col items-center gap-[32px]">
          <div className="text-center">
            <Heading2 className="text-[#222222]">
              Discover other holiday options
            </Heading2>
            <Body2 className="text-[#ADADAD] mt-2">
              Find your next adventure in our curated travel plots
            </Body2>
          </div>

          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {holidays.map((holiday) => (
              <div
                key={holiday.id}
                className="relative h-[160px] rounded-lg overflow-hidden"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${holiday.image}')` }}
                ></div>
                <div className="absolute z-[1] bottom-0 left-0 w-full h-1/3 backdrop-blur-lg mask-gradient rounded-lg"></div>

                <div className="absolute z-2 inset-0 bg-black/30 flex items-end p-4">
                  <Title1 className="w-[230px] text-white">
                    {holiday.title}
                  </Title1>
                </div>
              </div>
            ))}
          </div>
        </section>
      </Container>
    </section>
  );
};

export default OtherHolidays;
