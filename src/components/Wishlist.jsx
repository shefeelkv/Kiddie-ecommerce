import React from "react";

const Wishlist = ({ wishlistItems, setWishlistItems, isWishlistOpen, setIsWishlistOpen, onAddToCart }) => {
  if (!isWishlistOpen) return null;

  const handleRemove = (id) => setWishlistItems(wishlistItems.filter(i => i.id !== id));

  return (
    <>
      <div className="wishlist-overlay" onClick={() => setIsWishlistOpen(false)}></div>
      <div className="wishlist-modal">
        <div className="wishlist-header">
          <h2>My Wishlist</h2>
          <button className="close-btn" onClick={() => setIsWishlistOpen(false)}>×</button>
        </div>
        
        <div className="wishlist-items-container">
          {wishlistItems.length === 0 ? (
            <p className="empty-wishlist">Your wishlist is empty.</p>
          ) : (
            wishlistItems.map(item => (
              <div key={item.id} className="wishlist-item">
                <img className="wishlist-item-img" src={item.thumbnail || item.images?.[0]} alt={item.title} />
                <div className="wishlist-item-details">
                  <div className="wishlist-item-top">
                    <h3>{item.title}</h3>
                    <button className="remove-wishlist-item" onClick={() => handleRemove(item.id)}>
                      ×
                    </button>
                  </div>
                  <p>{item.description?.slice(0, 50)}...</p>
                  <div className="wishlist-item-actions">
                    <h4>Rs {Math.round(item.price * 80)}/-</h4>
                    <button 
                      className="wishlist-add-to-cart-btn" 
                      onClick={() => {
                        onAddToCart(item);
                        handleRemove(item.id);
                        setIsWishlistOpen(false);
                      }}
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Wishlist;
