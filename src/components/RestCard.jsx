import React from "react";
import { MENU_IMG_CDN } from "./utils/libs";
import { FaStar } from "react-icons/fa";

const RestCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transform hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
      <img
        className="w-full h-40 object-cover"
        src={MENU_IMG_CDN + cloudinaryImageId}
        alt={name}
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 truncate">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between mt-4">
          <div className={`flex items-center gap-1 px-2 py-1 rounded-md text-white ${avgRating >= 4.0 ? 'bg-green-500' : 'bg-yellow-500'}`}>
            <FaStar />
            <span className="text-sm font-semibold">{avgRating}</span>
          </div>
          <p className="text-sm font-semibold text-gray-700">{costForTwo}</p>
        </div>
      </div>
    </div>
  );
};

export const WithSubCard = (RestCard) => {
  return (props) => {
    const label = props.resData?.info?.aggregatedDiscountInfoV3?.header + " " + props.resData?.info?.aggregatedDiscountInfoV3?.subHeader;
    return (
      <div className="relative">
        <label className="absolute top-0 left-0 bg-gradient-to-r from-red-600 to-orange-500 text-white text-xs font-bold px-3 py-1 z-10 rounded-br-lg">
          {label}
        </label>
        <RestCard {...props} />
      </div>
    );
  };
};

export default RestCard;
