import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
    const [cardDatas, setcardDatas] = useState([]);
    const [searchText, setSearchText] = useState(""); 
    const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);

    console.log("body rendered");

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        setcardDatas(json?.data?.cards);
    };

    useEffect(() => {
        fetchData();  
    }, []);

    const topRatedRestaurants = () => {
        const filteredList = cardDatas
            .map((resData) => {
                const filteredRestaurants = resData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.filter(
                    (res) => res?.info?.avgRating >= 4.3 
                );

                if (!filteredRestaurants || filteredRestaurants.length === 0) return null;

                return {
                    ...resData,
                    card: {
                        ...resData.card,
                        card: {
                            ...resData.card.card,
                            gridElements: {
                                ...resData.card.card.gridElements,
                                infoWithStyle: {
                                    ...resData.card.card.gridElements.infoWithStyle,
                                    restaurants: filteredRestaurants, 
                                },
                            },
                        },
                    },
                };
            })
            .filter(Boolean); 

        setcardDatas(filteredList);
    };

    const handleSearch = () => {
        debugger
        if (!searchText.trim()) {
            setcardDatas(originalData); 
            return;
        }

        const filteredList = cardDatas
            .map((resData) => {
                const filteredRestaurants = resData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.filter(
                    (res) => res?.info?.name.toLowerCase().includes(searchText.toLowerCase())
                );
                if (!filteredRestaurants || filteredRestaurants.length === 0) return null;

                return {
                    ...resData,
                    card: {
                        ...resData.card,
                        card: {
                            ...resData.card.card,
                            gridElements: {
                                ...resData.card.card.gridElements,
                                infoWithStyle: {
                                    ...resData.card.card.gridElements.infoWithStyle,
                                    restaurants: filteredRestaurants, 
                                },
                            },
                        },
                    },
                };
            })
            .filter(Boolean); 
        debugger
        setcardDatas(filteredList);
    };

    const promotedRestaurants = cardDatas.flatMap((resData) => {
        const restaurants = resData?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? [];
        return restaurants.filter((res) => res?.info?.aggregatedDiscountInfoV3);
    });

    return cardDatas.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="search p-4 m-4">
                <input className="border border-solid border-black" type="text" placeholder="Search for foods" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="p-1 m-1 bg-black text-white rounded-lg" onClick={handleSearch}>Search</button>
                <button className="p-1 m-1 bg-black text-white rounded-lg" onClick={topRatedRestaurants}>Top Rated Restaurants</button>
            </div>
            <div className="flex flex-wrap rounded-lg">
                {promotedRestaurants.map((res, index) => (
                    <RestaurantCardWithLabel key={index} cardData={[{ card: { card: { gridElements: { infoWithStyle: { restaurants: [res] } } } } }]} />
                ))}
            </div>
        </div>
    );
};

export default Body;

