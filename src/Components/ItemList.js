import MenuListLayout from "./MenuLayout";

const ItemList = ({ items, openIndex, fnxSetOpenIndex, fnxCloseOpenIndex }) => {
  return (
    <div className="shadow-md cursor-pointer">
      <div
        className="flex justify-between items-stretch min-w-60 min-h-10"
        onClick={() => {
          openIndex ? fnxCloseOpenIndex() : fnxSetOpenIndex();
        }}>
        <div className="font-medium text-2xl">
          {items.card.card.title}({items?.card?.card?.itemCards?.length})
        </div>
        <button className="w-20">🔽</button>
      </div>
      <div className="flex flex-col gap-5">
        {openIndex ? (
          <MenuListLayout
            data={items?.card?.card?.itemCards}
            isCartComponent={false}
          />
        ) : null}
      </div>
    </div>
  );
};
export default ItemList;
