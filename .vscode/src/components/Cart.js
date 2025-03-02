import { useSelector } from "react-redux";
import ItemList from "./itemList";
import { useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };
    return (
        <div className = "text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart Page</h1>
        <div className = "w-1/2 mx-auto">
        <button className="bg-black text-white p-2 m-2 rounded-lg" onClick = {handleClearCart}>Clear Cart</button>
        {cartItems.length === 0 && <h1>Cart is Empty. Please add some items to cart!</h1>}
            <ItemList items = {cartItems}/>
        </div>
        </div>
    );
};

export default Cart;