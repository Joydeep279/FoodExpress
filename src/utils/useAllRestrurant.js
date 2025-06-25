import { useEffect, useState } from "react";

const useAllRestrurant = () => {
  const [filterList, setFilterList] = useState("");
  const [mainList, setMainList] = useState("");
  async function getApiData() {
    console.log("Api Called");

    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await apiData.json();
    console.log(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setMainList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  useEffect(() => {
    getApiData();
  },[]);
  return [mainList, setMainList, filterList, setFilterList];
};
export default useAllRestrurant;
