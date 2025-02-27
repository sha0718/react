import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ cardData }) => {
    const renderRestaurantCards = () =>
        cardData?.flatMap((resData, index) => {
            const restaurants = resData?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
            return restaurants.map((res, resIndex) => (
                <Link to={`/restaurant/${res.info.id}`} key={`${index}-${resIndex}`}>
                    <div className="m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-400" key={`${index}-${resIndex}`}>
                        <img
                            alt="res-logo"
                            className="rounded-lg"
                            src={res.info.cloudinaryImageId ? `${CDN_URL}/${res.info.cloudinaryImageId}` : ""}
                        />
                        <h3 className="font-bold py-4 text-lg">{res.info.name}</h3>
                        <h4>{res.info.cuisines?.join(", ") || "N/A"}</h4>
                        <h4>{res.info.sla?.deliveryTime || "N/A"}</h4>
                        <h4>{res.info.costForTwo || "N/A"}</h4>
                        <h4>{res.info.avgRating || "N/A"}</h4>
                    </div>
                </Link>
            ));
        });

    return (
        <div className="flex flex-wrap rounded-lg">
            {renderRestaurantCards()}
        </div>
    );
};

// Higher order component

export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        const getDiscountInfo = () => {
            const res = props.cardData?.flatMap((resData) => resData?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [])
                .find((res, index) => {
                    res?.info?.aggregatedDiscountInfoV3;
                });
            return res ? `Offer: ${res.info.promotionInfo.title}` : "";
        };
        debugger
        return (
            <div>
                <h3>{getDiscountInfo()}</h3>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
