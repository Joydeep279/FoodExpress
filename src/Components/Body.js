import { useEffect, useState } from "react";
import imgCDN from "../utils/CDN_Links";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const CardLayout = (props) => {
  const { cuisines, avgRating, cloudinaryImageId, areaName, name, sla, id } =
    props.resInfo.info;
  const { slaString } = sla;
  return (
    <Link className="card-layout" to={"/restrurant/" + id}>
      <img src={imgCDN + cloudinaryImageId} alt="card-logo" />
      <div className="Card-text-area">
        <h3>{name}</h3>
        <span style={{ fontWeight: "bolder" }}>
          {avgRating}⭐{" • " + slaString}
        </span>
        <span style={{ color: "gray" }}>{cuisines.join(", ")}</span>
        <span style={{ color: "gray" }}>{areaName}</span>
      </div>
    </Link>
  );
};

const MainBody = () => {
  const [mainList, setMainList] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getApiData();
  }, []);
  console.log("MainBODY Rendered");

  async function getApiData() {
    console.log("Api Called");

    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await apiData.json();
    console.log(data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    
    setMainList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  if (filterList.length === 0) {
    return (
      <div className="card-container">
        <Shimmer />
      </div>
    );
  } else {
    return (
      <div className="Main-Body">
        <div className="Search_Container">
          <input
            type="text"
            placeholder="restrurant name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}></input>
          <button
            onClick={() => {
              const filterData = mainList.filter((item) =>
                item?.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filterData);
            }}>
            Search
          </button>
          <button
            onClick={() => {
              const List = mainList.filter((item) => item.info.avgRating > 4.1);
              setFilterList(List);
            }}>
            Top Rated Restrurant
          </button>
        </div>
        <div className="card-container">
          {filterList.map((res) => (
            <CardLayout resInfo={res} key={res.info.id} />
          ))}
        </div>
      </div>
    );
  }
};
export default MainBody;
