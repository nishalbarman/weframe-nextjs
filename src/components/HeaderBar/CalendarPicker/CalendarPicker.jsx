import React, { useState } from "react";

function CalendarPicker() {
  const [dates, setDate] = useState({
    start_date: "",
    end_date: "",
  });

  const handleDateChange = (e) => {
    setDate({ ...dates, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex justify-evenly border rounded-lg border-[rgba(0,0,0,0.2)] h-full border-[2px] items-center p-[0px_15px]">
      <input
        className="font-urbanist pr-5 border-black h-full border-none outline-none w-full"
        type="date"
        name="start_date"
        onChange={handleDateChange}
      />
      <span className="font-urbanist"> OR </span>
      <input
        className="font-urbanist pl-5 h-full border-none outline-none w-full"
        type="date"
        name="end_date"
        onChange={handleDateChange}
      />
    </div>
  );
}

export default CalendarPicker;
