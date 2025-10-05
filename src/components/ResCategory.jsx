import React, { useState } from "react";
import AddOn from "./AddOn";



function ResCategory({ data, showItems, setShowIndex }) {
 
  const handleClick = () => {
    setShowIndex();
  };

  const itemCount = data.itemCards?.length || 0;

  return (
    <div className="bg-white shadow-lg  rounded-2xl p-4 mb-8 ">
      <div className=" flex justify-between ">
        {/* left */}
        <div>
          <div className="flex gap-2 items-center justify-between w-full">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              {data.title} ({itemCount})
            </h2>
          </div>
        </div>
        {/* right */}
        <div className="flex flex-col items-end gap-2">
          <div className="flex ">
          <button
            onClick={handleClick}
            className="ml-4 bg-green-100 text-green-800 border border-green-600 rounded-md hover:bg-green-600 hover:text-white px-4 py-1 text-sm font-bold transition-all duration-300 ease-in-out shadow-sm cursor-pointer"
          >
            {" "}
            AddOne {showItems ? "⬆️" : "⬇️"}
          </button>
</div>
        </div>
      </div>
      {showItems && (
        <div className="p-2 bg-gray-50 rounded-b-lg">
          {data.itemCards?.map((item) => (
            <AddOn key={item.card.info.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
}

export default ResCategory;
