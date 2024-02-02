"use client";

import Image from "next/image";
import React from "react";
import TopArticleCard from "./TopArticleCard/TopArticleCard";

function TopArticleSection() {
  const isPublished = false;

  return (
    <div className="mb-[20px]">
      <h2 className="font-urubanist text-[24px] font-semibold">Top Articles</h2>

      {/* slider */}
      <div className="flex gap-5 w-full overflow-x-auto m-[15px_0px] mt-[34.5px]">
        {/* items */}
        <TopArticleCard
          category={"Bussiness"}
          banner={"/banners/first.svg"}
          title={"7 Rules of Effective Branding"}
          description={"Why branding matters for your Bussiness"}
          isPublished={false}
        />
        <TopArticleCard
          category={"economy"}
          banner={"/banners/world.svg"}
          title={"Research on biodiversity an..."}
          description={"Lorem ipsum dolor sit amet, consectetur"}
          isPublished={true}
        />

        <TopArticleCard
          category={"Bussiness"}
          banner={"/banners/const.svg"}
          title={"Close and historical ties to held "}
          description={"Lorem ipsum dolor sit amet, consectetur"}
          isPublished={true}
        />
      </div>
    </div>
  );
}

export default TopArticleSection;
