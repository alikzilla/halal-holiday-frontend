import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Body2,
  Container,
  Heading4,
  Heading6,
  MainLayout as Layout,
  Title2,
} from "@/components/common";
import { Button } from "@/components/ui";

const ReservationSuccess = () => {
  return (
    <Layout isTransparent={false}>
      <Container className="pt-[100px] pb-[80px]">
        <Suspense>
          <section className="w-full flex flex-col items-center">
            {/* Success Header */}
            <div className="text-center mb-6 flex flex-col items-center">
              <Image
                src={"/assets/emojis/gratz.svg"}
                alt="gratz"
                width={80}
                height={80}
                className="mb-6"
              />

              <Heading4 className="text-[#222222] mb-4">
                Booking Confirmed!
              </Heading4>
              <Body2 className="text-[#222222]">
                Your reservation at The Ritz London has been successfully
                completed.
                <br />
                We&apos;ve sent a receipt to email{" "}
                <span className="font-semibold">www@gmail.com</span>
              </Body2>
            </div>

            {/* Booking Details */}
            <div className="w-[472px] bg-white rounded-lg border border-[#F2F2F2] shadow-md p-4 flex flex-col items-start gap-6">
              <Heading6 className="text-[#222222] font-bold">Details</Heading6>

              <div className="w-full overflow-x-none">
                <table className="table w-full">
                  <tbody className="flex flex-col gap-4">
                    <tr className="w-full flex items-center justify-between">
                      <Title2>Hotel Name</Title2>
                      <Title2>The Ritz London</Title2>
                    </tr>
                    <tr className="w-full flex items-center justify-between">
                      <Title2>Address</Title2>
                      <Title2>
                        150 Piccadilly, St. James&apos;s, London, UK
                      </Title2>
                    </tr>
                    <tr className="w-full flex items-center justify-between">
                      <Title2>Check-in Date</Title2>
                      <Title2>October 18, 2024 – 3:00 PM</Title2>
                    </tr>
                    <tr className="w-full flex items-center justify-between">
                      <Title2>Check-out Date</Title2>
                      <Title2>October 18, 2024 – 12:00 PM</Title2>
                    </tr>
                    <tr className="w-full flex items-center justify-between">
                      <Title2>Room Type</Title2>
                      <Title2>Deluxe King Room</Title2>
                    </tr>
                    <tr className="w-full flex items-center justify-between">
                      <Title2>Guests</Title2>
                      <Title2>2 Adults</Title2>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div>
                <Heading6 className="text-[#222222] mb-4 font-bold">
                  What&apos;s next?
                </Heading6>

                <Body2 className="text-[#222222] mb-2 font-medium">
                  1. A confirmation email has been sent to your inbox.
                </Body2>
                <Body2 className="text-[#222222] mb-2 font-medium">
                  2. Check-in details will be shared 24 hours before arrival.
                </Body2>
                <Body2 className="text-[#222222] font-medium">
                  3. Save your booking.{" "}
                  <Link href={"/"} className="text-[#CB9A38] hover:underline">
                    Add to calendar
                  </Link>
                </Body2>
              </div>
            </div>

            {/* Next Steps */}

            {/* Action Buttons */}
            <div className="w-[472px] flex flex-row justify-end gap-[10px] mt-6">
              <Link href="/">
                <Button type="secondary">Back to home</Button>
              </Link>
              <Button>Download Receipt</Button>
            </div>
          </section>
        </Suspense>
      </Container>
    </Layout>
  );
};

export default ReservationSuccess;
