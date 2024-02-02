import Image from "next/image";
import React from "react";

function TopArticleCard({
  banner,
  category,
  author = "Maria Doe",
  title,
  isPublished,
  description,
}) {
  return (
    <div className="h-fit w-fit p-[22px] bg-white rounded-2xl">
      {/* banner image */}
      <img
        className="w-[100%] aspect-video object-cover rounded-2xl"
        src={banner}
        alt="teacher with board"
      />
      <div className="flex flex-col gap-2 w-full mt-4">
        {/* category, creation date and author */}
        <div className="flex justify-between w-full">
          <div className="flex items-center justify-between gap-1 w-fit">
            <span className="uppercase font-bold text-[16px] text-[#9058FF]">
              {category}
            </span>
            <span className="text-[#A0A3BD] font-semibold"> • 20 Sep 2022</span>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Image src={"/user.svg"} width={30} height={30} />
            <span className="text-lg font-bold text-black">{author}</span>
          </div>
        </div>

        {/* description and status */}
        <div className="flex justify-between gap-6 items-start mt-[5px]">
          <div className="flex flex-col gap-2">
            <h3 className="text-[#22285E] text-[24px] font-[600] line-clamp-1">{title}</h3>
            <span className="text-[16px] text-[#A0A3BD] font-urbanist">
              {description}
            </span>
          </div>
          {isPublished ? (
            <div className="p-[10px_20px] bg-[#E4FFF8] rounded-[10px] text-[#0DAD82] font-semibold">
              Published
            </div>
          ) : (
            <div className="p-[10px_20px] bg-[#E3D5FF] rounded-[10px] text-[#7950F2] font-semibold">
              Created
            </div>
          )}
        </div>

        {/* keywords */}
        <div className="flex gap-[11px] m-[13px_0px]">
          <div className="p-[10px_20px] font-[600] font-urbanist text-[#A0A3BD] text-[16px] rouned-[5px] bg-[#F8FAFB]">
            Branding
          </div>
          <div className="p-[10px_20px] font-[600] font-urbanist text-[#A0A3BD] text-[16px] rouned-[5px] bg-[#F8FAFB]">
            Communication
          </div>
          <div className="p-[10px_20px] font-[600] font-urbanist text-[#A0A3BD] text-[16px] rouned-[5px] bg-[#F8FAFB]">
            Branding
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

export default TopArticleCard;
