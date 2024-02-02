"use client";

import React from "react";
import SearchBar from "./SearchBar/SearchBar";
import CalendarPicker from "./CalendarPicker/CalendarPicker";
import UserDetails from "./UserDetails/UserDetails";

function HeaderBar() {

  return (
    <div className="flex items-center justify-around h-[95px] w-full bg-white p-[0px_74px] rounded-b-xl">
      {/* search bar section */}
      <SearchBar />

      {/* date picker and user detail section */}
      <div className="flex gap-5 w-full h-[60px] items-center font-urbanist">
        <CalendarPicker />
        <UserDetails />
      </div>
    </div>
  );
}

export default HeaderBar;
