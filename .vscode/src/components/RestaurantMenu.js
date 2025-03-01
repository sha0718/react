import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
    const { resId } = useParams();
    const resInfo = useRestaurantMenu(resId);
    const [showIndex, setShowIndex] = useState(1);

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, sla, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const itemCards = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        (c) => c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

    const foodItems = itemCards
        ?.filter((item) => item?.card?.card?.carousel) // Keep only those with a `carousel` array
        ?.flatMap((item) => item.card.card.carousel) // Flatten the array
        ?.map((carouselItem) => carouselItem?.dish?.info) // Extract relevant food data
        ?.filter((info) => info?.name && info?.price); // Remove items with missing data

    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines?.join(", ")}</h3>
            <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
            
            {categories.map((category, index) => (
                <div key={category?.card?.card?.title} onClick={() => setShowIndex(index)}>
                    <RestaurantCategory
                        data={category?.card?.card}
                        showItems={index === showIndex ? true : false}
                    />
                </div>
            ))}
        </div>
    );
};

export default RestaurantMenu;