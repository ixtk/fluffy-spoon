import "./Home.scss"
import React, { useState } from "react";

export const HomePage = () => {
  

const Navbar = () => {
  const [showCart, setShowCart] = useState(false);
  const [showFavorites, setShowFavorites] = useState(false);

  const cartItems = [
    { name: "TrailMaster Hiking Boots", price: 149.99, qty: 1, color: "Brown" },
    { name: "CloudStep Walking Shoes", price: 79.99, qty: 2, color: "Gray" },
  ];

  const favoriteItems = [
    { name: "UltraGlide Pro Running Shoes", price: 129.99, color: "Midnight Black" },
    { name: "AirFlex Casual Sneakers", price: 89.99, color: "White/Blue" },
  ];

  return (
    <div className="navbar">
      <div className="nav-links">
        <span>Men</span>
        <span>Women</span>
      </div>
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="icons">
        <div className="icon-container" onClick={() => setShowFavorites(!showFavorites)}>
          <FaHeart />
          {favoriteItems.length > 0 && <span className="badge">{favoriteItems.length}</span>}
        </div>
        <div className="icon-container" onClick={() => setShowCart(!showCart)}>
          <FaShoppingCart />
          {cartItems.length > 0 && <span className="badge">{cartItems.length}</span>}
        </div>
      </div>

      {showCart && (
        <div className="dropdown cart">
          <h3>Shopping Cart</h3>
          {cartItems.map((item, index) => (
            <div key={index} className="dropdown-item">
              <span>{item.name}</span>
              <span>{item.color}</span>
              <span>${item.price}</span>
              <span>Qty: {item.qty}</span>
            </div>
          ))}
          <div className="total">Total: ${cartItems.reduce((sum, item) => sum + item.price * item.qty, 0).toFixed(2)}</div>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}

      {showFavorites && (
        <div className="dropdown favorites">
          <h3>Favorites</h3>
          {favoriteItems.map((item, index) => (
            <div key={index} className="dropdown-item">
              <span>{item.name}</span>
              <span>{item.color}</span>
              <span>${item.price}</span>
            </div>
          ))}
          <button className="favorites-btn">View All Favorites</button>
        </div>
      )}
    </div>
  );
};
}
export default Navbar;


