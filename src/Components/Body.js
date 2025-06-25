import { useState } from "react";
import imgCDN from "../utils/CDN_Links";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useAllRestrurant from "../utils/useAllRestrurant";
import isOnline from "../utils/isOnline";

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
  const [searchText, setSearchText] = useState("");

  console.log("MainBODY Rendered");
  const [mainList, setMainList, filterList, setFilterList] = useAllRestrurant();
  if (!isOnline()) return <h1>Looks like you are offline</h1>;
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
