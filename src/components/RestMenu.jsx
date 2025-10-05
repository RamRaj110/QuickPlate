import { useParams } from "react-router-dom";
import useCstmRes from "./utils/useCstmRes";
import ResCategory from "./ResCategory";
import { useState } from "react";
import React from "react";
import Shimmer from "./Shimmer";

const RestMenu = () => {
  const { id: resId } = useParams();
  const [showIndex, setShowIndex] = useState(0); 

  const { resItem, resName } = useCstmRes(resId);

  if (resName === null || resItem === null) {
    return <Shimmer />;
  }

  const {
    name,
    cuisines,
    avgRating,
    city,
    costForTwo,
    sla,
  } = resName;

  const categories = Array.isArray(resItem)
    ? resItem.filter(
        (c) =>
          c.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
    : [];

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto max-w-4xl py-8 px-4">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-1">{name}</h1>
            <p className="text-md text-gray-600">{cuisines?.join(", ")}</p>
            <p className="text-md text-gray-500">{city}</p>
          </div>
          <div className="border border-gray-200 rounded-lg p-3 text-center shadow-sm bg-white">
            <div className={`text-lg font-bold flex items-center justify-center gap-1 ${avgRating >= 4.0 ? 'text-green-600' : 'text-yellow-500'}`}>
              ⭐ {avgRating}
            </div>
            <hr className="my-2" />
            <div className="text-xs text-gray-500 font-semibold">
              COST FOR TWO
            </div>
            <div className="text-sm font-bold text-gray-700">
              ₹{costForTwo / 100}
            </div>
          </div>
        </div>

        <div className="border-t border-dashed border-gray-300 my-8"></div>

        <div className="flex items-center gap-4 text-lg font-semibold text-gray-800 mb-8">
          <span>🕒 {sla?.slaString}</span>
        </div>

        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Menu</h2>
        <div className="space-y-5">
          {categories.map((category, index) => (
            <ResCategory
              key={category.card.card.title}
              data={category.card.card}
              showItems={index === showIndex}
              setShowIndex={() => setShowIndex(index === showIndex ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestMenu;