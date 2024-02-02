"use client";

import Image from "next/image";
import React from "react";

function AdvertismentCard({
  banner = "https://s3-alpha-sig.figma.com/img/0748/a845/d00a80b4b63388e5163a391f975522a0?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MSwnjlyk1c7E~dXtPvojgik20KKgUncBmIGEGlB3Sep4rK~C6CJ5yDvXMhTlPpnItPO2IStMakw-tHiOfkX2KyFykEAfBF~Hua-tdN3vZL-dGi8trS32L0BvErhb~8ZUNhGMKCXtkMBgxOqdoSRaQv4S~9WXkKbAaY7xuMrA2QySeCxUZz3P~xtjGDO~QfWAvg3wS6FRQ~7yrzJRjQAqSEbSgEUvbB91UWeT7x4BgOJUy6~4EA9VnDHaiYmezOUpK6FOvGXXKWZqCrTPGRPVnSGSqn-k-LZYg6W3s9XdUasiSU7Au4VmNqOiW3ZkoIDzLz13s7U~y3nzY8aEhQkiow__",
  title = "How 7 lines code turned into $36 Billion Empire",
  description,
}) {
  return (
    <div className="h-[212px] w-[500px] flex justify-start gap-2 bg-white rounded-2xl shadow-[0px_0px_10.87px_0px_rgba(0,0,0,0.25)]">
      <div className="h-full w-[226px] aspect-square object-cover">
        <img
          className="h-full w-full aspect-square object-cover rounded-l-2xl"
          src={banner}
          alt="icon name"
        />
      </div>
      <div className="flex flex-col justify-between p-[10px_10px]">
        <div className="flex flex-col gap-2 w-full ">
          {/* description and status */}
          <div className="flex flex-col justify-between gap-1 items-start mt-[5px]">
            <h3 className="text-[#22285E] mb-[10px] text-[24px] font-[600] line-clamp-2">
              {title}
            </h3>
            <span className="text-[16px] text-[#A0A3BD] font-urbanist">
              {description}
            </span>
          </div>
        </div>
        {/* Actions */}
        <div className="flex gap-3 w-full">
          <button
            onClick={() => {
              // TODO: Handle OnClick
            }}
            className="rounded-[10px] bg-[#E8E9FF] w-full h-[55px] text-[#7750F1] text-[18px] font-[600]">
            View
          </button>
          <div
            onClick={() => {
              // TODO: Handle OnClick
            }}
            className="flex items-center justify-center p-[15px] h-[55px] w-[59px] bg-[#FAFAFA] rounded-[10px]">
            <Image src={"/assets/icons/more.svg"} width={20} height={6} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvertismentCard;
