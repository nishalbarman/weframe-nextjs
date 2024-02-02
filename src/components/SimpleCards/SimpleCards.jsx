import React from "react";
import SimpleCardItem from "./SimpleCardItem/SimpleCardItem";

function SimpleCards() {
  const simpleData = [
    {
      title: "Articles",
      iconUrl: "/others/article.svg",
      newUpdates: "4,950",
    },
    {
      title: "Categories",
      iconUrl: "/others/category.svg",
      newUpdates: "10,225",
    },
    {
      title: "Stories",
      iconUrl: "/others/stories.svg",
      newUpdates: "4,193",
    },
    {
      title: "Advertisements",
      iconUrl: "/others/ad.svg",
      newUpdates: "4,950",
    },
  ];

  return (
    <div className="flex gap-8 overflow-x-auto w-full m-[35px_0px] mb-[43px]">
      {simpleData?.map((item, index) => {
        return <SimpleCardItem {...item} index={index} />;
      })}
    </div>
  );
}

export default SimpleCards;
