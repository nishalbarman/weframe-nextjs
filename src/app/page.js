import React from "react";
import SideBar from "@/components/SiderBar/SideBar";
import HeaderBar from "@/components/HeaderBar/HeaderBar";
import SimpleCards from "@/components/SimpleCards/SimpleCards";
import TopArticleSection from "@/components/TopArticleSection/TopArticleSection";
import TopStoriesSection from "@/components/TopStoriesSection/TopStoriesSection";
import AdvertisementsSection from "@/components/AdvertismentSection/AdvertismentsSection";

export default function Home() {
  return (
    <main className="flex flex-row ">
      {/* sidebar */}
      <SideBar />

      {/* main Bar />

      {/* main content section */}
      <div className="w-[100%]">
        {/* header bar */}
        <HeaderBar />

        {/* panel section */}
        <div className="mt-10 ml-10 font-urbanist">
          {/* admin text and greetings */}
          <div className="flex flex-col gap-1">
            <h3 className="font-urbanist text-[35px]">Hello Admin,</h3>
            <span className="font-urbanist text-[#A0A3BD] text-[17px]">
              This is what we got you for today.
            </span>
          </div>

          {/* simple cards */}
          <SimpleCards />
          <TopArticleSection />
          <TopStoriesSection />
          <AdvertisementsSection />
        </div>
      </div>
    </main>
  );
}
