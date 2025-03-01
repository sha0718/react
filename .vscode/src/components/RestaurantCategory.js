import ItemList from "./itemList";
import { useState } from "react";

const RestaurantCategory = ({data, showItems}) => {

  if (!data) return null;
  if (!data?.itemCards?.length) return null;

  // const [showItems, setShowItems] = useState(false);
    const handleClick = () => {
        // setShowItems(!showItems);
    }
  return (
    <div>
        <div className = "w-6/12 mx-auto  bg-gray-100 p-4 my-4 rounded-lg">
        <div className = "flex justify-between cursor-pointer" onClick = {handleClick}>
        <span className="font-bold text-lg">{data?.title} ({data?.itemCards?.length})</span>
        <span>&#x2B07;</span>
        </div>
          {showItems && <ItemList items = {data?.itemCards}/>}
        </div> 
    </div>
   );
};

export default RestaurantCategory;