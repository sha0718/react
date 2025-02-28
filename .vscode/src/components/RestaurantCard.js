import { Link } from "react-router";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ cardData }) => {
    const renderRestaurantCards = () =>
        cardData?.flatMap((resData, index) => {
            const restaurants = resData?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
            let condition = false;
            return restaurants.map((res, resIndex) => (
                <Link to={`/restaurant/${res.info.id}`} key={`${index}-${resIndex}`}>
                    <div className="m-4 p-4 w-[250px] bg-gray-200 hover:bg-gray-400" key={`${index}-${resIndex}`}>
                        <div className="flex max-h-60">
                            <img
                                alt="res-logo"
                                className="rounded-lg z-0 h-50 w-full"
                                src={res.info.cloudinaryImageId ? `${CDN_URL}/${res.info.cloudinaryImageId}` : ""}
                            />
                            {res.info.aggregatedDiscountInfoV3 && <div className="absolute bg-black text-white m-2 p-2 rounded-lg z-10 mt-40">{res.info.aggregatedDiscountInfoV3.header+" "+ res.info.aggregatedDiscountInfoV3.subHeader}</div>}
                        </div>
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
                .find((res) => {
                    res?.info?.aggregatedDiscountInfoV3;
                });
            return res ? `Offer: ${res.info.aggregatedDiscountInfoV3.header}` : "";
        };

        return (
            <div>
                 <h3>{getDiscountInfo()}</h3>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;
