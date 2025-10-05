import React from "react";
import { MENU_IMG_CDN } from "./utils/libs";
import { useDispatch } from "react-redux";
import { addItem } from "./utils/cartSlice";

const AddOn = ({ item }) => {
  const { name, price, imageId, defaultPrice, description } = item?.card?.info;
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-200 last:border-b-0 hover:bg-gray-100 transition-colors duration-200">
      <div className="w-9/12">
        <h3 className="font-semibold text-md text-gray-800">{name}</h3>
        <p className="text-sm font-bold text-gray-700">
          ₹{price / 100 || defaultPrice / 100}
        </p>
        <p className="mt-2 text-xs text-gray-500">{description}</p>
      </div>

      <div className="w-3/12 flex flex-col items-center justify-center">
        {imageId && (
          <img
            className="w-28 h-24 object-cover rounded-md shadow-sm"
            src={MENU_IMG_CDN + imageId}
            alt={name}
          />
        )}
        <button
          onClick={() => handleAddItem(item)}
          className="mt-2 bg-green-500 text-white px-6 py-1 rounded-lg hover:bg-green-600 transition-colors duration-300 text-sm font-bold shadow-md"
        >
          ADD
        </button>
      </div>
    </div>
  );
};

export default AddOn;
