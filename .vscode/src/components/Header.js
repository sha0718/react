import { LOGO_URL } from "../utils/constants";  
import { useState, useEffect, use } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {
// if no dependencies are passed, the useEffect hook will run on every render
// if an empty array is passed[], the useEffect hook will run only once after the initial render
// if a variable is passed, the useEffect hook will run whenever the variable changes
  const [btnName, setBtnName] = useState("Login");

  const onlineStatus = useOnlineStatus();
  console.log("header rendered");
  useEffect(() => {
    console.log("useeffect called");  
  },[btnName] );
    return (
      <div className="flex justify-between bg-pink-100 shadow-md  sm:bg-yellow-200 lg:bg-green-200"> 
        <div className="logo-container">
          <img
            className="w-56"
            src={LOGO_URL}
          />
        </div>
        <div className="flex items-center">
          <ul className= "flex p-4 m-4">
            <li className = "px-4">Online Status: {onlineStatus ? "🟢" : "🔴"}</li>

            <li className = "px-4">
              <Link to="/">Home</Link>
            </li>
            <li className = "px-4">
            <Link to="/about">About Us </Link>  
            </li>
            <li className = "px-4"> 
              <Link to="/contact">Contact Us </Link>
              </li>
            <li className = "px-4"  >Cart</li>
            <li className = "px-4"><Link to="/grocery">Grocery</Link></li>
            <button className="login" onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : 
              setBtnName("Login")}}>
                {btnName}</button>
          </ul>
        </div>
      </div>
      
    );
  };

export default Header;    