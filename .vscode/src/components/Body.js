import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { SWIGGY_URL } from "../utils/constants";

const Body = () => {
    const [cardDatas, setcardDatas] = useState([]);
    const [searchText, setSearchText] = useState(""); 
    const RestaurantCardWithLabel = withPromotedLabel(RestaurantCard);
    const [selectedCity, setSelectedCity] = useState("lat=12.9716&lng=77.5946");

    console.log("body rendered");

    const fetchData = async () => {
        const url = SWIGGY_URL+selectedCity+"&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        const data = await fetch(url);
        const json = await data.json();
        console.log(json);
        setcardDatas(json?.data?.cards);
    };

    useEffect(() => {
        fetchData();  
    }, [selectedCity]);

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
        return restaurants;
    });

    const {loggedInUser, setUserName} = useContext(UserContext);

    const cityCoordinates = {
        "Bangalore": "lat=12.9716&lng=77.5946",
        "Delhi": "lat=28.7041&lng=77.1025",
        "Hyderabad": "lat=17.3850&lng=78.4867",
        "Chennai": "lat=13.0827&lng=80.2707",
        "Mumbai": "lat=19.0760&lng=72.8777",
        "Kolkata": "lat=22.5726&lng=88.3639",
        "Ahmedabad": "lat=23.0225&lng=72.5714",
        "Surat": "lat=21.1702&lng=72.8311",
        "Pune": "lat=18.5204&lng=73.8567",
    };

    return cardDatas.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="search p-4 m-4">
                <input className="border border-solid border-black" type="text" placeholder="Search for foods" value={searchText} onChange={(e) => setSearchText(e.target.value)} />
                <button className="p-1 m-1 bg-black text-white rounded-lg" onClick={handleSearch}>Search</button>
                <button className="p-1 m-1 bg-black text-white rounded-lg" onClick={topRatedRestaurants}>Top Rated Restaurants</button>
                <label>
                    User Name: <input className="border border-black p-2" value = {loggedInUser} onChange={e => setUserName(e.target.value)} />
                </label>
                <select
                className="border border-black p-2 m-4" onChange={(e) => setSelectedCity(e.target.value)}>
                <option value="">Select a City</option>
                {Object.entries(cityCoordinates).map((city) => {
                    debugger
                    return <option value={city[1]}>{city[0]}</option>;
                })}
            </select>

              
            </div>
            <div className="flex flex-wrap rounded-lg">
                {promotedRestaurants.map((res, index) => {
                    const cardData = [{ card: { card: { gridElements: { infoWithStyle: { restaurants: [res] } } } } }];
                    return res.info.aggregatedDiscountInfoV3 ? (
                        <RestaurantCardWithLabel key={index} cardData={cardData} />
                    ) : (
                        <RestaurantCard key={index} cardData={cardData} />
                    );
                })}
            </div>
        </div>
    );
};

export default Body;


