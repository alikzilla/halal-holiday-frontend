import Button from "../button/button";

const HotelMap = () => {
  return (
    <section id="map" className="mt-6 p-2">
      <h2 className="text-2xl font-bold mb-4">Location on map</h2>
      <div className="w-full h-[1px] bg-[#F2F2F2] mt-2"></div>

      <div className="h-96 flex items-center justify-center bg-[url(https://s3-alpha-sig.figma.com/img/6c79/2925/f91e2ef272282b8705d90edc02e37e70?Expires=1743984000&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=R3P7XmXVMytqKSz-cC~7hY9vwwH3Tzb0IJzOT2RiGewV-ZndB-d1MkuBu2KitTIDVEL2WWDEwRBkGaXax6E4epG1XMpxzOoDoxcELZaKd3PEgIJAR29LmjzmCgisd7TG4-n3kQf~CH9wG9iu81jjOufFloD9nvgjnAKsMfmMLw-Yg2YwYt5JYXjU5Zy4uqg4WrA9A8BVr09~whKnmo5KkFdKC9TcrNY5H-oC-ojpY3Z7FAXxd1UiEuSEHlK08DhU4jr8NhCFqhxdWhxc2kOu3N4XYsLOjKCrWVIhFgIu7BLwKPHrqcmEUK8cAIRpzTV53q5nOpgot~rUKdAyquU36g__)] bg-cover rounded-lg">
        {/* Replace with your map component */}
        <Button type="black" leadingIcon leading="map-white">
          Show on map
        </Button>
      </div>
    </section>
  );
};

export default HotelMap;
