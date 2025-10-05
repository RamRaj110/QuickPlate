import { useEffect, useState } from "react";
import { MENU_API } from "./libs";

const useCstmRes = (resId) => {
  const [resName, setResName] = useState(null);
  const [resItem, setResItem] = useState(null);

  useEffect(() => {
    // Ensure resId is available before fetching
    if (resId) {
      fetchData();
    }
  }, [resId]); // Re-fetch if the restaurant ID changes

  const fetchData = async () => {
    try {
      const response = await fetch(MENU_API + resId);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();

      // Dynamically find the restaurant's basic info
      // It's usually in a card with a specific "@type"
      const restaurantInfoCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
      );
      const info = restaurantInfoCard?.card?.card?.info;
      setResName(info || null);

      // Dynamically find the menu items
      // They are typically inside a 'groupedCard'
      const groupedCard = json?.data?.cards?.find((card) => card.groupedCard);
      const menuCards = groupedCard?.groupedCard?.cardGroupMap?.REGULAR?.cards;
      setResItem(menuCards || []);

    } catch (error) {
      console.error("Failed to fetch menu data:", error);
      setResName(null);
      setResItem([]);
    }
  };

  return { resName, resItem };
};

export default useCstmRes;
