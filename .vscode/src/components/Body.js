import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import bigData from "../../data";


  
const Body = () => {
    const swiggyData = bigData.swiggyData.data.cards;
  const [cardDatas, setcardDatas] = useState(swiggyData);

  const topRatedRestaurants = () => {
    const filteredList = swiggyData.filter(
      (resData) =>
        resData?.card?.card?.gridElements?.infoWithStyle?.restaurants?.some(
          (res) => res.info.avgRating < 4.3
        )
    );
    setcardDatas(filteredList)
  }
  console.log(cardDatas)
    return (
        <div className="body">
            <div className="search">
                <input className="search-bar" type="text" placeholder="Search for foods" />
                <button className="search-button" onClick={topRatedRestaurants} >Top Rated Restaurants</button>
            </div>
            <div className="res-container">
            <RestaurantCard cardData= {cardDatas} />
         </div>
        </div>

              
   );

};



export default Body;

