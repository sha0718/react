import React from "react";
import { useSelector } from "react-redux";

const Checkout = () => {
   const totalAmount = useSelector((state) => state.cart.totalAmount);

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const loadRazorpay = async() => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    if (!window.Razorpay) {
      alert("Razorpay is not available. Please try again.");
      return;
    }


    const options = {
      key: "YOUR RAZORPAY KEY", // Replace with your Razorpay Key
      amount: totalAmount * 100, // Razorpay uses paisa (multiply by 100)
      currency: "INR",
      name: "My Store",
      description: "Purchase Items",
      handler: function (response) {
        alert("Payment Successful! Payment ID: " + response.razorpay_payment_id);
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9876543210",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div>
      <button className = "bg-blue-600 text-white p-2 m-2 rounded-lg cursor-pointer" onClick={loadRazorpay}>Pay with Razorpay</button>
    </div>
  );
};

export default Checkout;
