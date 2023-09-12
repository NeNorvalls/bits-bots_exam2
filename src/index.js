import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css"; // Import the Bootstrap CSS
import App from "./App";
import { CartProvider } from "./utils/CartContext/cartContext"; // Import your CartProvider

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartProvider>
      {" "}
      {/* Wrap your App with CartProvider */}
      <App />
    </CartProvider>
  </React.StrictMode>
);
