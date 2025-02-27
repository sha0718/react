
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, sla, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];


console.log(itemCards
    );  

    const foodItems = itemCards
    ?.filter((item) => item?.card?.card?.carousel) // Keep only those with a `carousel` array
    ?.flatMap((item) => item.card.card.carousel) // Flatten the array
    ?.map((carouselItem) => carouselItem?.dish?.info) // Extract relevant food data
    ?.filter((info) => info?.name && info?.price); // Remove items with missing data

    return (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines?.join(", ")}</h3>
            <h3>{sla?.deliveryTime}</h3>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
            {foodItems.map((item, index) => (
    <li key={index}>
      {item.name} - Rs. {item.price / 100}
    </li>
  ))}
            </ul>
        </div>
  );
} 

export default RestaurantMenu;