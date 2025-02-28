import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
    console.log(items);
    return <div>      
 <div>
            {items?.map((item) => (
                <div key ={item.card.info.id} className = "m-2 p-2 border-gray-200 border-b-2 text-left flex justify-between">
                    <div className="w-9/12">
                    <div className = "py-2">
                        <span>{item.card.info.name}</span>
                        <span> -₹{item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                    </div>
                    <p className = "text-gray-500">
                        {item.card.info.description}
                    </p>
                    </div> 
                    <div className = "w-3/12 p-4">
                    <div className="absolute">
                    <button className=" bg-green-600 text-white  p-2 mx-10 rounded-lg"> Add +</button>
                    </div>
                    <img src={CDN_URL + (item?.card?.info?.imageId)} /> 
                    </div>
                    </div>         
            )
        )}
        </div>
    </div>
};

export default ItemList;