import Image from "next/image";
import React, { useEffect, useState } from "react";

function SearchBar() {
  const [searchValue, setSearchValue] = useState("");

  // update search value on text change
  const handleOnChange = (e) => {
    setSearchValue(e.target.value);
  };

  // setup debouncing for searching queries
  useEffect(() => {
    const timerId = setTimeout(() => {
      // TODO: call API with query (searchValue)
    }, 500); // set a delay of 500 milisecond before calling API

    return () => {
      clearTimeout(timerId); // clear previouse timeout if new searchText found
    };
  }, [searchValue]);

  return (
    <div className="flex justify-start items-center p-[0px_0px_0px_20px] h-[54px] w-[100%] bg-[#FCFCFD] rounded-lg">
      <Image
        src={"/assets/icons/search.svg"}
        width={25}
        height={25}
        alt="Search Icon"
      />
      <input
        className="border-none outline-none text-black placeholder:text-[#CECECE] text-md h-full w-full rounded-xl p-[5px_15px] font-urbanist"
        placeholder="Search"
        onChange={handleOnChange}
      />
    </div>
  );
}

export default SearchBar;
