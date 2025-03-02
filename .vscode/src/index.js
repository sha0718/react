import React ,{lazy,Suspense, use} from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";


const Grocery = lazy(() => import("./components/Grocery"));

const AppLayout = () => {
  const [userName , setUserName] = useState();

  useEffect(() => {
    const data = {
      name : "Shailendra Sharma",
    };
    setUserName(data.name);
  }, []);

  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser: userName , setUserName}}>
      <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<AppLayout />}>
        {/* Child Routes */}
        <Route index element={<Body />} /> 
        <Route path="contact" element={<Contact />} />
        <Route path="about" element={<About />} />
        <Route path="restaurant/:resId" element={<RestaurantMenu />} />
        <Route path ="cart" element={<Cart />} />
        
        <Route path="grocery"  element={
        <Suspense fallback={<div>Loading Grocery...</div>}>
          <Grocery />
        </Suspense>
        
      }
    />
      </Route>
        
      
      <Route path="*" element={<Error />} />
    </Routes>
  </BrowserRouter>
);
