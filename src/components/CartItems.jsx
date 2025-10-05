import React from "react";
import { MENU_IMG_CDN } from "./utils/libs";
import { useDispatch } from "react-redux";
import { removeItem } from "./utils/cartSlice";


const CartItem = ({item})=>{
    const {name,price,imageId, defaultPrice,description}= item?.card?.info;
    const dispatch = useDispatch();

    const handleRemoveItem = (item)=>{
        dispatch(removeItem(item))
    }
    return(
         <div className="bg-white shadow-lg rounded-2xl p-4 mb-4 flex justify-between items-center">
      {/* Left side */}
      <div className="flex items-center">
        <img
          src={`${MENU_IMG_CDN + imageId}`}
          alt={name}
          className="w-24 h-24 object-cover rounded-lg mr-4"
        />
        <div>
          <h2 className="text-xl font-bold text-gray-800">{name}</h2>
          <p className="text-gray-600 text-sm w-3/4">{description}</p>
          <span className="text-lg font-semibold text-gray-700 mt-2 block">
            Rs.{price / 100 || defaultPrice / 100}
          </span>
        </div>
      </div>

      {/* Right side */}
      <div>
        <button
          onClick={()=> handleRemoveItem(item)}
          className="bg-red-100 text-red-800 border border-red-600 rounded-md hover:bg-red-600 hover:text-white px-4 py-1 text-sm font-bold transition-all duration-300 ease-in-out shadow-sm cursor-pointer"
        >
          Remove
        </button>
      </div>
      </div>
    )

}

export default CartItem;