import { Heading5, Heading6 } from "@/components/common";
import React from "react";
import Image from "next/image";

const Navbar = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: "personal" | "services" | "checkout";
  setActiveTab: (active: "personal" | "services" | "checkout") => void;
}) => {
  return (
    <div className="lg:w-2/3 flex items-center justify-start gap-[10px] mb-3 py-4">
      {/* Personal Details Step */}
      <div
        className="w-1/3 flex flex-col items-center cursor-pointer"
        onClick={() => setActiveTab("personal")}
      >
        <div className="w-full flex items-center gap-2">
          <Heading6
            className={`w-[25px] h-[25px] rounded-full flex items-center justify-center mb-2 cursor-pointer transition-colors
            ${
              activeTab === "services"
                ? "bg-[#266462] text-[#1D4B4A] border-2 border-[#266462]"
                : activeTab === "personal"
                ? "bg-[#E4ECEC] text-[#1D4B4A] border-1 border-dashed border-[#266462]"
                : activeTab === "checkout"
                ? "bg-[#266462] text-[#1D4B4A] border-2 border-[#266462]"
                : "bg-gray-200 text-black"
            }`}
          >
            {activeTab === "personal" ? (
              "1"
            ) : (
              <Image
                src={"/assets/icons/check-white.svg"}
                alt="check"
                width={20}
                height={20}
              />
            )}
          </Heading6>
          <Heading5 className="font-semibold text-[#222222]">
            Personal details
          </Heading5>
        </div>

        <div
          className={`h-[5px] w-full mt-2 rounded-full ${
            activeTab === "services"
              ? "bg-[#266462]"
              : activeTab === "personal"
              ? "bg-[#93B2B1]"
              : activeTab === "checkout"
              ? "bg-[#266462]"
              : "bg-[#F2F2F2]"
          }`}
        ></div>
      </div>

      {/* Additional Services Step */}
      <div
        className="w-1/3 flex flex-col items-center cursor-pointer"
        onClick={() => setActiveTab("services")}
      >
        <div className="w-full flex items-center gap-2">
          <Heading6
            className={`w-[25px] h-[25px] rounded-full flex items-center justify-center mb-2 cursor-pointer transition-colors
            ${
              activeTab === "services"
                ? "bg-[#E4ECEC] text-[#1D4B4A] border-1 border-dashed border-[#266462]"
                : activeTab === "checkout"
                ? "bg-[#266462] text-[#1D4B4A] border-2 border-[#266462]"
                : "bg-gray-200 text-black"
            }`}
          >
            {activeTab === "services" || activeTab === "personal" ? (
              "2"
            ) : (
              <Image
                src={"/assets/icons/check-white.svg"}
                alt="check"
                width={20}
                height={20}
              />
            )}
          </Heading6>
          <Heading5 className="font-semibold text-[#222222]">
            Additional services
          </Heading5>
        </div>

        <div
          className={`h-[5px] w-full mt-2 rounded-full ${
            activeTab === "services"
              ? "bg-[#93B2B1]"
              : activeTab === "checkout"
              ? "bg-[#266462]"
              : "bg-[#F2F2F2]"
          }`}
        ></div>
      </div>

      {/* Checkout Step */}
      <div
        className="w-1/3 flex flex-col items-center cursor-pointer"
        onClick={() => setActiveTab("checkout")}
      >
        <div className="w-full flex items-center gap-2">
          <Heading6
            className={`w-[25px] h-[25px] rounded-full flex items-center justify-center mb-2 cursor-pointer transition-colors
            ${
              activeTab === "checkout"
                ? "bg-[#E4ECEC] text-[#1D4B4A] border-1 border-dashed border-[#266462]"
                : "bg-gray-200 text-black"
            }`}
          >
            3
          </Heading6>
          <Heading5 className="font-semibold text-[#222222]">Checkout</Heading5>
        </div>

        <div
          className={`h-[5px] w-full mt-2 rounded-full ${
            activeTab === "checkout" ? "bg-[#93B2B1]" : "bg-[#F2F2F2]"
          }`}
        ></div>
      </div>
    </div>
  );
};

export default Navbar;
