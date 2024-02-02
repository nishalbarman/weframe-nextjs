import React from "react";
import Image from "next/image";

import LinkItem from "./Links/LinkItem";

function SideBar() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center w-[296px] h-[100vh] bg-white">
      {/* links section */}
      <div className="flex bg-white flex-col gap-4 justify-center items-center mb-[2rem] w-[232px]">
        {/* sidebar elements/links */}
        <LinkItem
          title={"Dashboard"}
          path={"/"}
          iconUrl={"/assets/icons/home.svg"}
        />
        <LinkItem
          title={"Content"}
          path={"/content"}
          iconUrl={"/assets/icons/note.svg"}
        />
        <LinkItem
          title={"Team"}
          path={"/team"}
          iconUrl={"/assets/icons/team.svg"}
        />
        <LinkItem
          title={"User"}
          path={"/user"}
          iconUrl={"/assets/icons/user.svg"}
        />
        <LinkItem
          title={"App/Web"}
          path={"/app-web"}
          iconUrl={"/assets/icons/web-com.svg"}
        />
        <LinkItem
          title={"Analytics"}
          path={"/analytics"}
          iconUrl={"/assets/icons/analytics.svg"}
        />
        <LinkItem
          title={"Media"}
          path={"/media"}
          iconUrl={"/assets/icons/media.svg"}
        />
        <LinkItem
          title={"Notification"}
          path={"/notification"}
          iconUrl={"/assets/icons/notification.svg"}
        />
      </div>

      {/* customer care section  */}
      <div className="flex justify-center w-0 md:w-[300px] items-center">
        <button className="group/care-button flex gap-3 p-[12px_20px] items-center bg-[#E8E9FF] rounded-lg w-[232px] hover:translate-y-[-5px] transition duration-150 ease">
          <Image
            src={"/assets/icons/customer-care.svg"}
            width={27}
            height={27}
          />
          <span className="font-urbanist text-[20px] text-black">
            Contact Support
          </span>
        </button>
      </div>
    </div>
  );
}

export default SideBar;
