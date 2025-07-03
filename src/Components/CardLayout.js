import imgCDN from "../utils/CDN_Links";
import { Link } from "react-router";
const CardLayout = (props) => {

  const { cuisines, avgRating, cloudinaryImageId, areaName, name, sla, id } =
    props.resInfo.info;
  const { slaString } = sla;
  return (
    <Link
      className="flex flex-col w-64 h-80 text-ellipsis rounded-md overflow-hidden transition-all hover:shadow-md hover:bg-[#faf9f9] object-fill"
      to={"/restrurant/" + id}>
      <img
        src={imgCDN + cloudinaryImageId}
        alt="card-logo"
        className="w-full h-1/2 rounded-sm"
      />
      <div className="flex flex-col px-2">
        <h3 className="font-medium">{name}</h3>
        <span style={{ fontWeight: "bolder" }}>
          {avgRating}⭐{" • " + slaString}
        </span>
        <span className="text-gray-600 font-normal ">{cuisines.join(", ")}</span>
        <span className="text-gray-600 font-normal ">{areaName}</span>
      </div>
    </Link>
  );
};

export const PromotedCardLayout = () => {
  return (props) => {

    return (
      <div>
        <label className="bg-black text-white absolute rounded-md p-1">Top Rated</label>
        <CardLayout resInfo={props.resInfo} />
      </div>
    );
  };
};

export default CardLayout;
