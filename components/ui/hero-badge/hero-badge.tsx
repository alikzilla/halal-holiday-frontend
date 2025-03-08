import { Heading5 } from "@/components/common";
import Image from "next/image";

const HeroBadge = ({ text }: { text: string }) => {
  return (
    <section className="flex inline-flex items-center gap-3 px-4 py-2 rounded-[12px] bg-white/10 backdrop-blur-xl">
      <Image
        src={"/assets/icons/star-fall.svg"}
        alt="star-fall"
        width={18}
        height={18}
      />
      <Heading5 className="text-[#EEC470]">{text}</Heading5>
    </section>
  );
};

export default HeroBadge;
