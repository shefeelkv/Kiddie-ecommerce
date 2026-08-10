import React, { useState } from "react";
import logoImg from "../assets/Group 2.png";

const Navbar = ({ cartCount, onCartClick, wishlistCount, onWishlistClick, searchQuery, onSearchChange }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar-left">
        <button 
          className="mobile-menu-btn" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
        <div className="logo">
          <img src={logoImg} alt="Kiddie" />
        </div>
      </div>

      <nav className={`menu ${isMobileMenuOpen ? "open" : ""}`}>
        <span onClick={() => setIsMobileMenuOpen(false)}>BABIES</span>
        <span onClick={() => setIsMobileMenuOpen(false)}>BOYS</span>
        <span onClick={() => setIsMobileMenuOpen(false)}>GIRLS</span>
      </nav>

      <div className="icons">
        <div className="search-box">
          <input 
            type="text" 
            placeholder="Search products..."
            value={searchQuery || ""}
            onChange={onSearchChange}
          />
          <span className="search-icon">🔍</span>
        </div>
        <div className="action-icons">
          <span className="cart-icon-wrapper" onClick={onCartClick} title="Shopping Cart">
            🛍️
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </span>
          <span className="wishlist-icon-wrapper" onClick={onWishlistClick} title="Wishlist">
            ❤️
            {wishlistCount > 0 && <span className="wishlist-badge">{wishlistCount}</span>}
          </span>
          <span className="user-icon" title="Account">👤</span>
        </div>
      </div>
    </header>
  );
};

export default Navbar;