"use client";

import React, { Suspense, useState } from "react";
import {
  Body2,
  Container,
  Heading5,
  Heading6,
  MainLayout as Layout,
  Title1,
  Title2,
} from "@/components/common";
import {
  AddServices,
  Breadcrumb,
  Checkout,
  HotelReservationNavbar,
  PersonalInfo,
} from "@/components/ui";
import { GuestData } from "@/types/guest";
import Image from "next/image";

const Reservation = () => {
  const [activeTab, setActiveTab] = useState<
    "personal" | "services" | "checkout"
  >("personal");
  const [formData, setFormData] = useState<GuestData>({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    phone: "",
    cardName: "",
    cardNumber: "",
    expiryDate: "",
    cvc: "",
    saveCard: false,
    payLater: false,
    phonePrefix: "",
    carPickupLocation: "",
    driverOption: "",
    departureAirport: "",
    flightClass: "",
    seatPreference: "",
    transferPickupLocation: "",
    vehicleType: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <Layout isTransparent={false}>
      <Container className="pt-[100px] pb-[80px]">
        <Suspense>
          <Breadcrumb />

          <div className="w-full flex flex-col gap-1">
            {/* Tab Bar - Now inside the main flex container */}
            <HotelReservationNavbar
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />

            <div className="flex items-start">
              <div className="w-2/3 flex flex-col gap-8">
                {/* Tab Content */}
                {activeTab === "personal" && (
                  <PersonalInfo
                    formData={formData}
                    handleChange={handleChange}
                    setActiveTab={setActiveTab}
                  />
                )}

                {activeTab === "services" && (
                  <AddServices
                    formData={formData}
                    handleChange={handleChange}
                    setActiveTab={setActiveTab}
                  />
                )}

                {activeTab === "checkout" && (
                  <Checkout
                    formData={formData}
                    handleChange={handleChange}
                    setActiveTab={setActiveTab}
                  />
                )}
              </div>

              {/* Right Side - Summary */}
              <div className="w-1/3 flex flex-col gap-[10px] pl-6">
                <div className="bg-white p-4 border border-[#F2F2F2] rounded-lg shadow-sm flex flex-col gap-2">
                  <div className="px-3 py-2 border border-[#F2F2F2] flex items-center gap-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
                    <Image
                      src={"/assets/icons/calendar.svg"}
                      alt={"calendar"}
                      width={44}
                      height={44}
                      className="bg-[#F9F9F9] rounded-full p-2"
                    />
                    <div className="flex flex-col">
                      <Heading6 className="text-[#ADADAD]">
                        Check in / Check out
                      </Heading6>
                      <Heading6 className="text-[#4C4C4C]">
                        Tue Mar 4 - Fri 14 Mar
                      </Heading6>
                    </div>
                  </div>
                  <div className="px-3 py-2 border border-[#F2F2F2] flex items-center gap-2 rounded-lg transition-all duration-300 hover:bg-gray-100">
                    <Image
                      src={"/assets/icons/user.svg"}
                      alt={"user"}
                      width={44}
                      height={44}
                      className="bg-[#F9F9F9] rounded-full p-2"
                    />
                    <div className="flex flex-col">
                      <Heading6 className="text-[#ADADAD]">Who</Heading6>
                      <Heading6 className="text-[#4C4C4C]">
                        2 adults, 0 childeren, 1 infants
                      </Heading6>
                    </div>
                  </div>

                  {/* Booking Summary - Only shown in checkout tab */}
                  {activeTab === "checkout" && (
                    <div className="bg-white p-6 rounded-lg shadow-sm mt-6">
                      <div className="flex flex-col gap-4">
                        <div className="flex justify-between">
                          <Title2>Hotel Name</Title2>
                          <Title2>The Ritz London</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Room Type</Title2>
                          <Title2>Deluxe King Room</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Total Length of Stay</Title2>
                          <Title2>£708.00</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Rent a Car</Title2>
                          <Title2>£27.50</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Flights</Title2>
                          <Title2>£20.00</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Transfer</Title2>
                          <Title2>£50.00</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Taxes & Charges</Title2>
                          <Title2>£10.00</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Early Bird Discount</Title2>
                          <Title2>-£75.00</Title2>
                        </div>
                        <div className="flex justify-between">
                          <Title2>Platinum Member Discount</Title2>
                          <Title2>-£37.50</Title2>
                        </div>
                        <div className="flex justify-between font-bold border-t border-[#F2F2F2] pt-4 mt-6">
                          <Title1 className="text-[#222]">Total</Title1>
                          <Title1 className="text-[#222]">£705.50</Title1>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="bg-white p-4 border border-[#F2F2F2] rounded-lg shadow-sm">
                    <Heading5 className="text-[#222222] font-bold mb-4">
                      Important notes
                    </Heading5>
                    <Body2 className="text-[#222222] font-normal mb-4">
                      This property doesn&apos;t offer after-hours check-in.
                      Front desk staff will greet guests on arrival. For more
                      details, please contact the property using the information
                      on the booking confirmation. All guests must present valid
                      passport or government issued photo identification at
                      check-in.
                    </Body2>
                    <ol className="list-disc pl-5 space-y-2">
                      <li>
                        <Body2 className="text-[#222222] font-normal">
                          Extra-person charges may apply and vary depending on
                          property policy.
                        </Body2>
                      </li>

                      <li>
                        <Body2 className="text-[#222222] font-normal">
                          Government-issued photo ID and a credit card, debit
                          card, or cash deposit may be required at check-in for
                          incidental charges.
                        </Body2>
                      </li>
                      <li>
                        <Body2 className="text-[#222222] font-normal">
                          Special requests are subject to availability upon
                          check-in and may incur additional charges.
                        </Body2>
                      </li>
                      <li>
                        <Body2 className="text-[#222222] font-normal">
                          This property accepts credit cards, debit cards, and
                          cash.
                        </Body2>
                      </li>
                      <li>
                        <Body2 className="text-[#222222] font-normal">
                          Safety features at this property include fire
                          extinguisher, a security system, and window guards.
                        </Body2>
                      </li>
                      <li>
                        <Body2 className="text-[#222222] font-normal">
                          Please note that cultural norms and guest policies may
                          differ by country and by property; the policies listed
                          are provided by the property
                        </Body2>
                      </li>
                      <li>
                        <Body2 className="text-[#222222] font-normal">
                          Please be advised that all guests, including children,
                          staying at Jumeirah Zabeel Saray are required to
                          present valid identification upon check-in, which may
                          be either a passport or a GCC National ID card. UAE
                          driver&apos;s licenses are acceptable for UAE
                          Nationals only. UAE Nationals may check in with either
                          a passport, National ID, or a valid UAE driver&apos;s
                          license.
                        </Body2>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      </Container>
    </Layout>
  );
};

export default Reservation;
