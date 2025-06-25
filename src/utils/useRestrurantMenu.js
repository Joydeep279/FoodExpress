import { useEffect, useState } from "react";

const useRestrurantMenu = (resId) => {
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
  return mainMenu;
};
export default useRestrurantMenu;
