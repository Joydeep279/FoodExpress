import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrurantMenu from "../utils/useRestrurantMenu";
const MenuLayout = (props) => {
  const { name, category, ratings, imageId } = props.data.card.info;
  return (
    <React.Fragment>
      <img
        className="w-64 h-64"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
          imageId
        }
      />
      <h2>{name}</h2>
      <span>{category}</span>
      <span>
        {ratings.aggregatedRating.rating}{" "}
        {ratings.aggregatedRating.ratingCountV2}
      </span>
    </React.Fragment>
  );
};

const Menu = () => {
  const { resId } = useParams();
  console.log(resId);

  const mainMenu = useRestrurantMenu(resId);

  if (mainMenu === null) {
    return <Shimmer />;
  } else {
    console.log(mainMenu);

    return (
      <div className="flex flex-wrap gap-2 w-full justify-center">
        {mainMenu.map((items) => (
          <div
            key={items.card.info.id}
            className="flex flex-col min-w-60 text-ellipsis">
            <MenuLayout data={items} />
          </div>
        ))}
      </div>
    );
  }
};
export default Menu;
