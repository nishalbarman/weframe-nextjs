import React from "react";
import Image from "next/image";

function SimpleCardItem({ index, iconUrl, newUpdates, title }) {
  return (
    <div key={index} className="flex items-center gap-4 p-[10px_30px] w-[349px] h-[145px] rounded-3xl bg-white ">
      <div className="flex bg-lightpurple items-center justify-center aspect-square w-[100px] rounded-full">
        <Image src={iconUrl} width={30} height={30} />
      </div>
      <div className="flex flex-col gap-2 h-full w-full items-start justify-center">
        <h2 className="font-semibold text-[28px]">{title}</h2>
        <span className="font-urbanist text-[17px]">
          {newUpdates} New Updates
        </span>
      </div>
    </div>
  );
}

export default SimpleCardItem;
