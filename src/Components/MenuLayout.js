import React from "react";
import imgCDN from "../utils/CDN_Links";
const MenuListLayout = (props) => {
  const menuList = props.data;
  console.log(menuList);

  return (
    <React.Fragment>
      {menuList.map((items) => {
        return (
          <div
            key={items.card.info.id}
            className="flex min-h-40 gap-10 justify-between  text-ellipsis">
            <div className="w-2/3 overflow-ellipsis h-full">
              <h1>{items.card.info.name}</h1>
              <p>₹{items.card.info.price / 100}</p>
              <p className="text-ellipsis font-light">
                {items.card.info.description}
              </p>
            </div>
            <div>
                <button className="absolute bg-black text-white rounded-md p-2 mx-12">Add To</button>
              <img
                className="w-40 h-full"
                src={imgCDN + items.card.info.imageId}
              />
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
export default MenuListLayout;
