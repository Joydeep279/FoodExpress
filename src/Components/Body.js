import { useEffect, useState } from "react";
import imgCDN from "../utils/CDN_Links";
import ResList from "../utils/mockData";

const CardLayout = (props) => {
  useEffect(() => {});
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
  const [mainList, setMainList] = useState(ResList);
  useEffect(() => {
    console.log("UseEffect Called!");
  }, []);
  
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
};
export default MainBody;
