import React from "react";
import Image from "next/image";

function UserDetails() {
  const username = "Akshita Patel"; // gets the username dynamically (maybe from redux store)

  return (
    <div
      className={`cursor-pointer border-[2px] rounded-lg border-[rgba(30,40,117,0.2)] flex gap-3 items-center p-[5px_10px] h-full w-full`}>
      <Image
        className="rounded"
        src={"/assets/demo-user.svg"}
        width={30}
        height={30}
      />
      <div className="flex flex-col w-full h-full">
        <span className="whitespace-nowrap font-urbanist text-[#373B5C] text-sm">
          Welcome back
        </span>
        <div className="flex justify-between">
          <span className="whitespace-nowrap font-urbanist text-xl text-[#373B5C]">
            {username || "Unknown"}
          </span>
        </div>
      </div>
      <Image src={"/assets/icons/down-arrow.svg"} width={25} height={25} />
    </div>
  );
}

export default UserDetails;
