import React from "react";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "./CartItems";
import { clearCart } from "./utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto text-center py-20">
        <h1 className="text-3xl font-bold text-gray-700">Your Cart is Empty</h1>
        <p className="text-gray-500 mt-2">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/">
          <button className="mt-6 bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:bg-orange-600 transition-all">
            See Restaurants
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6 border-b pb-4">
        <h1 className="text-3xl font-bold text-gray-800">Your Cart ({cartItems.length})</h1>
        <button
          onClick={handleClearCart}
          className="bg-red-500 text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-red-600 transition-all"
        >
          Clear Cart
        </button>
      </div>
      <div className="flex flex-col gap-4">
        {cartItems.map((item, index) => (
          <CartItem key={item.card.info.id + index} item={item} />
        ))}
      </div>
       <div className="mt-8 pt-4 border-t text-right">
            <button className="bg-green-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-green-600 transition-all text-lg">
                Proceed to Checkout
            </button>
        </div>
    </div>
  );
};

export default Cart;