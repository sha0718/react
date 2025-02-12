import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { cardData } = props;
    const renderRestaurantCards = () => {
        if (!Array.isArray(cardData)) return null;

        return cardData.flatMap((resData, key) => {
            const restaurantData = resData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
            if (!Array.isArray(restaurantData)) return [];

            return restaurantData.map((resData, index) => (
                <div className="res-card" style={{ backgroundColor: "#f0f0f0" }} key={`${key}-${index}`}>
                    <img 
                        alt="res-logo" 
                        className="res-logo" 
                        src={resData?.info?.cloudinaryImageId 
                            ? `${CDN_URL}/${resData.info.cloudinaryImageId}`
                            : ""}  
                    />
                    <h3>{resData?.info?.name}</h3>
                    <h4>{resData?.info?.cuisines?.join(", ") || "N/A"}</h4>
                    <h4>{resData?.info?.sla?.deliveryTime || "N/A"}</h4>
                    <h4>{resData?.info?.costForTwo || "N/A"}</h4>
                    <h4>{resData?.info?.avgRating || "N/A"}</h4>
                </div>
            ));
        });
    };

    return (
        <div className="res-container">
            {renderRestaurantCards()}
        </div>
    );
};

export default RestaurantCard;