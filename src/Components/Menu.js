import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
const MenuLayout = (props) => {
  const { name, category, ratings, imageId } = props.data.card.info;

  return (
    <div>
      <img
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
    </div>
  );
};

const Menu = () => {
  const { resId } = useParams();
  console.log(resId);

  const [mainMenu, setMainMenu] = useState(null);
  async function fetchMenuData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        resId
    );
    const menuData = await apiData.json();
    for (let i = 0; i < 7; i++) {
      if (
        menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]
          .card.card.itemCards !== undefined
      ) {
        setMainMenu(
          menuData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[i]
            .card.card.itemCards
        );
      }
    }
  }
  useEffect(() => {
    fetchMenuData();
  }, []);

  if (mainMenu === null) {
    return <Shimmer />;
  } else {
    console.log(mainMenu);

    return (
      <div className="MenuContainer">
        {mainMenu.map((items) => (
          <div key={items.card.info.id}>
            <MenuLayout data={items} />
          </div>
        ))}
      </div>
    );
  }
};
export default Menu;
