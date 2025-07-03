import { useEffect, useState } from "react";

const useRestrurantMenu = (resId) => {
  const [mainMenu, setMainMenu] = useState(null);
  async function fetchMenuData() {
    const apiData = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" +
        resId
    );
    const menuData = await apiData.json();
    console.log(menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards);
    setMainMenu(menuData.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards)
  }
  useEffect(() => {
    fetchMenuData();
  }, []);
  return mainMenu;
};
export default useRestrurantMenu;
