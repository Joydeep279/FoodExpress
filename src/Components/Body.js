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
    <Link
      className="flex flex-col w-64 h-80 text-ellipsis rounded-lg overflow-hidden transition-all hover:shadow-md bg-[#faf9f9] object-fill"
      to={"/restrurant/" + id}>
      <img
        src={imgCDN + cloudinaryImageId}
        alt="card-logo"
        className="w-full h-1/2"
      />
      <div className="flex flex-col px-2">
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
      <div className="flex justify-center items-center">
        <Shimmer />
      </div>
    );
  } else {
    return (
      <div className="flex flex-col gap-10">
        <div className="flex gap-10 px-10">
          <input
            className="bg-[#e5e5e5] rounded-xl p-2.5"
            type="text"
            placeholder="restrurant name"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}></input>
          <button
            className="bg-gray-950 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => {
              const filterData = mainList.filter((item) =>
                item?.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilterList(filterData);
            }}>
            Search
          </button>
          <button
            className="bg-gray-950 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded-md"
            onClick={() => {
              const List = mainList.filter((item) => item.info.avgRating > 4.1);
              setFilterList(List);
            }}>
            Top Rated Restrurant
          </button>
        </div>
        <div className="flex flex-wrap gap-10 justify-center items-center mx-auto max-w-[80%]">
          {filterList.map((res) => (
            <CardLayout resInfo={res} key={res.info.id} />
          ))}
        </div>
      </div>
    );
  }
};
export default MainBody;
