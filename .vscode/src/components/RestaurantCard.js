import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const {cardData} = props;
    return (
      <div className="res-container">
        {cardData.map((resData,key) => {
          const restrauntData = resData?.card?.card?.gridElements?.infoWithStyle?.restaurants;
          return (
              restrauntData?.map((resData, key) => {
                return (
                    <div className="res-card" style={{backgroundColor : "#f0f0f0"}} key={key}>
                      <img 
                      alt="res-logo" 
                      className="res-logo" 
                      src={resData?.info?.cloudinaryImageId 
                          ? `${CDN_URL}/${resData.info.cloudinaryImageId}`
                          : ""}  
                      />
                      <h3>{resData?.info?.name}</h3>
                      <h4>{resData?.info?.cuisines.join(", ")}</h4>
                      <h4>{resData?.info?.sla.deliveryTime}</h4>
                      <h4>{resData?.info.costForTwo}</h4>
                      <h4>{resData?.info?.avgRating}</h4>
                    </div>
                  );
                })
          );
        })}
      </div>
    );
  };    

export default RestaurantCard;