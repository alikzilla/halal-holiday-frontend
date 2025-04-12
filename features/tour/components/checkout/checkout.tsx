import { Button, Input, Switch, Checkbox } from "@/components/ui";
import { Body1, Heading4 } from "@/components/common";
import { GuestData } from "@/core/types/guest";

const Checkout = ({
  formData,
  handleChange,
}: {
  formData: GuestData;
  handleChange: (
    e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>
  ) => void;
  setActiveTab: (activeTab: "personal" | "services" | "checkout") => void;
}) => {
  return (
    <section className="w-full flex flex-col items-end gap-[10px]">
      <div className="w-full bg-[#F9F9F9] border border-[#F2F2F2] p-6 rounded-lg shadow-sm flex flex-col gap-6 items-start mb-[10px]">
        <Heading4 className="text-[#222222]">Card Details</Heading4>

        <form className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Cardholder's Name"
            placeholder="John Doe"
            value={formData.cardName}
            onChange={(value) =>
              handleChange({
                target: { name: "cardName", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          />

          <Input
            label="Card Number"
            placeholder="1234 5678 9012 3456"
            value={formData.cardNumber}
            onChange={(value) =>
              handleChange({
                target: { name: "cardNumber", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          />

          <Input
            label="Expiry Date"
            placeholder="MM/YY"
            value={formData.expiryDate}
            onChange={(value) =>
              handleChange({
                target: { name: "expiryDate", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          />

          <Input
            label="CVC"
            placeholder="123"
            value={formData.cvc}
            onChange={(value) =>
              handleChange({
                target: { name: "cvc", value },
              } as React.ChangeEvent<HTMLInputElement>)
            }
          />
        </form>

        <div className="w-full space-y-6">
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <label
              htmlFor="airplane-mode"
              className="text-[#222222] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Airplane Mode
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="terms" />
            <label
              htmlFor="terms"
              className="text-[#222222] font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Rest now Pay Later
            </label>
          </div>
        </div>
      </div>

      {/* <div className="bg-[#F9F9F9] border border-[#F2F2F2] p-6 rounded-lg shadow-sm flex flex-col gap-6 items-start mb-6">
        <Heading4 className="text-[#222222]">Alternative Payment</Heading4>

        <div className="w-full">
          <div className="p-4 border rounded-lg mb-4">
            <div className="flex items-center mb-2">
              <span className="mr-2">🎌</span>
              <h3 className="font-medium">Fibabanka Aliggidiş Kredisi</h3>
            </div>
            <p className="text-sm text-gray-600 mb-3">
              Fibabanka Aliggidiş Kredisi ile Enuygun üzerinden
              gerçekleştireceğiniz alışverişlerinizde kolayca Aliggidiş
              limitinizi kullanabilirsiniz. Fibanbanka Aliggidiş
              Kredisi&apos;nden yararlanabilmek için Fibabanka müşterisi olmanız
              gerekmektedir.
            </p>
            <Button type="secondary" className="w-full">
              Go to bank
            </Button>
          </div>
        </div>
      </div> */}

      <div className="bg-[#F9F9F9] border border-[#F2F2F2] p-6 rounded-lg shadow-sm flex flex-col gap-6 items-start">
        <div className="text-sm text-gray-600 space-y-3">
          <Body1 className="text-[#222]">
            By signing up, you let us tailor offers and content to your
            interests by monitoring how you use Booking.com through tracking
            technologies. Unsubscribe anytime. Read our{" "}
            <a href="#" className="text-blue-500 underline">
              privacy policy
            </a>
            .
          </Body1>
          <Body1 className="text-[#222]">
            Your booking is with Baku Soffia Hotel Old City directly and by
            completing this booking you agree to the booking conditions, general
            terms, privacy policy and Wallet terms.
          </Body1>
        </div>
      </div>

      <div className="flex justify-end">
        <Button className="py-[10px] px-4">Complete booking</Button>
      </div>
    </section>
  );
};

export default Checkout;
