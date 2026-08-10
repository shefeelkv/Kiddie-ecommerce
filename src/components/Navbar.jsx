import React from "react";

const Navbar = ({ cartCount, onCartClick, wishlistCount, onWishlistClick, searchQuery, onSearchChange }) => {
  return (
    <header className="navbar">
      <div className="logo"><img src="Kiddie-Web/src/assets/Group 2.png" alt="" /></div>

      <nav className="menu">
        <span>BABIES</span>
        <span>BOYS</span>
        <span>GIRLS</span>
      </nav>

      <div className="icons">
        <input 
          type="text" 
          name="" 
          id="" 
          placeholder="Search products..."
          value={searchQuery || ""}
          onChange={onSearchChange}
        />
        <span>🔍</span>
        <span className="cart-icon-wrapper" onClick={onCartClick} style={{cursor: 'pointer', position: 'relative'}}>
          🛍️
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </span>
        <span className="wishlist-icon-wrapper" onClick={onWishlistClick} style={{cursor: 'pointer', position: 'relative'}}>
          ❤️
          {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
        </span>
        <span>👤</span>
      </div>
    </header>
  );
};

export default Navbar;