import React from 'react';
import RestCard, { WithSubCard } from "./RestCard";
import { useEffect, useState } from "react";
import { API_URL } from "./utils/libs";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import Shimmer from './Shimmer';

const Body = () => {
  const [orignalData, setOrignalData] = useState([]);
  const [newData, setNewData] = useState([]);
  const [searchText, setSearchText] = useState("");

  const WithSub = WithSubCard(RestCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(API_URL);
      const response = await data.json();
      const resData =
        response?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;
      setNewData(resData || []);
      setOrignalData(resData || []);
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus)
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">You're Offline!</h1>
        <p className="text-gray-500 mt-2">Please check your internet connection.</p>
      </div>
    );

  if (orignalData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="container mx-auto p-6">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8">
        <div className="relative w-full sm:w-1/2">
          <input
            className="w-full p-3 pl-4 text-md text-gray-700 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 transition-all"
            type="text"
            placeholder="Search for your favorite restaurant..."
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
        </div>
        <div className="flex gap-3">
          <button
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => {
              const searchData = orignalData.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setNewData(searchData);
            }}
          >
            Search
          </button>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-3 px-6 rounded-lg shadow-md transition-transform transform hover:scale-105"
            onClick={() => {
              const filtrList = orignalData.filter((res) => res.info.avgRating > 4.2);
              setNewData(filtrList);
            }}
          >
            Top Rated
          </button>
        </div>
      </div>

      {/* Restaurants Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {newData.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.subHeader ? (
              <WithSub resData={restaurant} />
            ) : (
              <RestCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
