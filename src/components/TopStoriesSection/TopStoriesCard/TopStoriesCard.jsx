"use client";

import Image from "next/image";
import React from "react";

function TopStoriesCard({
  banner = "https://s3-alpha-sig.figma.com/img/d146/1468/65a8273af2cbbc88616b1353aee1e51d?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=A1MYJeatG66NDI-1tvg9e8PHf~etrR-ZNzrDT0QymvzSArV161hJtHsc0qWG2~Arnp~4BhQxNc90VWgaLZYEM2c-fmxCLF4e3V7xVjrLlPNGdtHyoceOqepNCY3pdX5pArgw2zO~PQcUe5ZvxXTiYD5Oq-ZunycV9RsD2iYHyjV9Qipp~qxgm4qUcrL9sFLt7HcafNd1LkT2V4hhN0Kh50uPayQHf277SegRIkH6Sr4V7m2Tv6ZYn7aeLOaNhIJz2vJmxP14NMNnj08b43sT~mYGWPHOazqOUWk7xcJSn-OUHTpTlAPZa-xrm7DrUsktaYgJ~Ccr2l-GlRq9xvirDQ__",
  category = "Bussiness",
  title = "How 7 lines code turned into $36 Billion Empire",
  isPublished = true,
  isCreated = false,
  isDraft = false,
}) {
  return (
    <div
      className="h-[500px] min-w-[350px] w-fit  flex flex-col justify-between p-4 bg-white rounded-lg"
      style={{
        background: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.70) 61.46%), url(${banner}), lightgray 50% / cover no-repeat`,
        backgroundPosition: "center",
      }}>
      <div className="flex gap-[3px] justify-end items-center">
        <div className="flex h-[26px] items-center justify-center gap-[5px] p-[5px_10px] bg-white rounded-md">
          <Image src={"/assets/icons/eye.svg"} width={16} height={16} />
          <span>428</span>
        </div>
        <div className="flex h-[26px] items-center p-[5px_10px] bg-white rounded-md">
          <Image
            src={"/assets/icons/analytics_small.svg"}
            width={15}
            height={15}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 w-full mt-4">
        {/* description and status */}
        <div className="flex justify-between gap-1 items-start mt-[5px]">
          <h3 className="text-white text-[24px] font-[600] line-clamp-2">
            {title}
          </h3>
        </div>

        {/* category, creation date and author */}
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-between gap-1 w-fit">
            <span className="uppercase font-bold text-[16px] text-white">
              {category}
            </span>
            <span className="text-[#A0A3BD] font-semibold whitespace-nowrap">
              {" "}
              • 20 Sep 2022
            </span>
          </div>
          {isPublished && (
            <div className="p-[10px_20px] bg-[#E4FFF8] rounded-[10px] text-[#0DAD82] font-semibold">
              Published
            </div>
          )}

          {isCreated && (
            <div className="p-[10px_20px] bg-[#DAF1FB] rounded-[10px] text-[#58A4FF] font-semibold">
              Created
            </div>
          )}

          {isDraft && (
            <div className="p-[10px_20px] bg-[#F4F4F4] rounded-[10px] text-[#A0A3BD] font-semibold">
              Created
            </div>
          )}
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

export default TopStoriesCard;
