import { useEffect, useState } from "react";
import imgCDN from "../utils/CDN_Links";
import Shimmer from "./Shimmer";

const CardLayout = (props) => {
  const { cuisines, avgRating, cloudinaryImageId, areaName, name, sla } =
    props.resInfo.info;
  const { slaString } = sla;
  return (
    <div className="card-layout">
      <img src={imgCDN + cloudinaryImageId} alt="card-logo" />
      <div className="Card-text-area">
        <h3>{name}</h3>
        <span style={{ fontWeight: "bolder" }}>
          {avgRating}⭐{" • " + slaString}
        </span>
        <span style={{ color: "gray" }}>{cuisines.join(", ")}</span>
        <span style={{ color: "gray" }}>{areaName}</span>
      </div>
    </div>
  );
};

const MainBody = () => {
  const [mainList, setMainList] = useState([]);
  useEffect(() => {
    getApiData();
  }, []);
  async function getApiData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=24.8332708&lng=92.7789054&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await apiData.json();
    setMainList(
      data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }
  if (mainList.length === 0) {
    return <div className="card-container">
      <Shimmer/>
      </div>;
  } else {
    return (
      <div className="Main-Body">
        <div className="Search_Container">
          <input type="text" placeholder="restrurent name"></input>
          <button>Search</button>
          <button
            onClick={() => {
              const List = ResList.filter((item) => item.info.avgRating > 4.5);
              setMainList(List);
            }}>
            Top Rated Restrurant
          </button>
        </div>
        <div className="card-container">
          {mainList.map((res) => (
            <CardLayout resInfo={res} key={res.info.id} />
          ))}
        </div>
      </div>
    );
  }
};
export default MainBody;
