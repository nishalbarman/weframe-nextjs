import React from "react";
import AdvertismentCard from "./AdvertismentCard/AdvertismentCard";

function Advertisements() {
  return (
    <div className="mt-[3rem]">
      <h2 className="font-urubanist text-[25px] font-semibold">
        Advertisement
      </h2>
      {/* slider */}
      <div className="flex gap-5 w-full overflow-x-auto m-[17px_0px] p-[20px_0px]">
        {/* items */}
        <AdvertismentCard
          banner="/ads/first.svg"
          title="Build your business"
          description="Shopify has all the tools you need to start, sell, market, and manage."
        />

        <AdvertismentCard
          banner="/ads/second.svg"
          title="Libre Coffee"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />

        <AdvertismentCard
          banner="/ads/third.svg"
          title="KFC"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"
        />
      </div>
    </div>
  );
}

export default Advertisements;
