import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestrurantMenu from "../utils/useRestrurantMenu";
import ItemList from "./ItemList";
import { useState } from "react";

const Menu = () => {
  const [openIndex, setOpenIndex] = useState(-1);
  const { resId } = useParams();
  console.log(resId);

  const mainMenu = useRestrurantMenu(resId);
  if (mainMenu === null) return <Shimmer />;
  console.log(mainMenu);

  const category = mainMenu.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  console.log(category);

  return (
    <div className="w-1/2 m-auto flex flex-col gap-2.5">
      {category.map((items, index) => (
        <ItemList
          items={items}
          key={items?.card?.card?.categoryId}
          openIndex={index === openIndex}
          fnxSetOpenIndex={() => setOpenIndex(index)}
          fnxCloseOpenIndex={() => setOpenIndex(-1)}
        />
      ))}
    </div>
  );
};
export default Menu;
