import { useState } from "react";
import Shimmer from "./Shimmer";
import useAllRestrurant from "../utils/useAllRestrurant";
import isOnline from "../utils/isOnline";
import CardLayout, { PromotedCardLayout } from "./CardLayout";
const MainBody = () => {
  const [searchText, setSearchText] = useState("");
  const PromotedCard = PromotedCardLayout();
  console.log("MainBODY Rendered");
  const [mainList, setMainList, filterList, setFilterList] = useAllRestrurant();
  if (!isOnline()) return <h1>{}Looks like you are offline</h1>;
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
          {filterList.map((res) =>
            res.info.avgRating > 4.2 ? (
              <PromotedCard resInfo={res} key={res.info.id} />
            ) : (
              <CardLayout resInfo={res} key={res.info.id} />
            )
          )}
        </div>
      </div>
    );
  }
};
export default MainBody;
