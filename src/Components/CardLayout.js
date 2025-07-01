import imgCDN from "../utils/CDN_Links";
import { Link } from "react-router";
const CardLayout = (props) => {
  console.log(props);

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

export const PromotedCardLayout = () => {
  return (props) => {
    console.log(props);

    return (
      <div>
        <label className="bg-black text-white">Top Rated</label>
        <CardLayout resInfo={props.resInfo} />
      </div>
    );
  };
};

export default CardLayout;
