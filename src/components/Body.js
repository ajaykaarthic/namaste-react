import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
import resList from "../utils/mockData";

const Body = () => {
  let [restaurantList, setrestaurantList] = useState(resList);
  let [searchText, setSearchText] = useState("");
  return (
    <div className="body">
      <input
        type="text"
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
      <button
        className="search-btn"
        onClick={() => {
          const filteredList = restaurantList.filter((res) =>
            res.info.name.includes(searchText)
          );
          setrestaurantList(filteredList);
        }}
      >
        Search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = restaurantList.filter(
            (result) => result.info.avgRating > 4.4
          );
          setrestaurantList(filteredList);
        }}
      >
        Top rated restaurants
      </button>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
