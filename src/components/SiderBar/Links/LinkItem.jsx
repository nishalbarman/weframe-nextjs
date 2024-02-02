"use client";

import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

function LinkItem({ title, path, iconUrl }) {
  const navigator = useRouter();

  const currentPath = usePathname();

  //   check if current active tab is matching with link element path
  const isSurfingCurrentPath = currentPath === path;

  // handle on element click
  const handleOnClick = () => {
    navigator.push(path);
  };

  return (
    <div
      className={`group/sidebar_link p-[16px_20px] h-[59px] w-[233px] flex gap-4 justify-start items-center rounded-xl cursor-pointer w-full ${
        isSurfingCurrentPath ? "bg-[#7950F2]" : "hover:bg-[#7950F2] bg-white" // if the current path is on url then make the element bgcolor to purple
      }`}
      onClick={handleOnClick}>
      <Image
        className={`${
          isSurfingCurrentPath ? "invert" : "group-hover/sidebar_link:invert" // if the current path is on url then make the span color white otherwise will be black
        }`}
        src={iconUrl}
        height={24}
        width={24}
      />
      <span
        className={`font-urbanist font-[500] text-[18px] ${
          isSurfingCurrentPath // if the current path is on url then make the span color white otherwise will be black
            ? "text-white"
            : "group-hover/sidebar_link:text-white text-black "
        }`}>
        {title}
      </span>
    </div>
  );
}

export default LinkItem;
