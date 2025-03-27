import { FAQ } from "@/types/hotels";

const HotelFAQ = ({ faqs }: { faqs: FAQ[] }) => {
  return (
    <section id="faq" className="mt-6 p-6 bg-white shadow-sm">
      <h2 className="text-2xl font-bold mb-4">FAQ</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border p-4 rounded-lg">
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <p className="text-gray-700">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HotelFAQ;
