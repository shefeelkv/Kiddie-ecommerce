


export default function ProductCard({ item, onAddToCart, isWishlisted, onWishlistToggle }) {
  if (!item) return null;

  return (
    <div className="card">
      
      <div className={`heart ${isWishlisted ? "wishlisted" : ""}`} onClick={() => onWishlistToggle && onWishlistToggle(item)}>
        {isWishlisted ? "♥" : "♡"}
      </div>

      <img src={item.thumbnail} alt={item?.title || "image"} />


      <h3 className="card-title">{item.title}</h3>

      <p className="card-desc">{item.description?.slice(0, 60)}...</p>

      <div className="card-price-row">
        <h4>Rs {Math.round(item.price)}/-</h4>
        <div className="stars">⭐⭐⭐⭐⭐</div>
      </div>

      <button className="add-btn" onClick={() => onAddToCart && onAddToCart(item)}>
        <span className="bag-icon">🛍️</span> Add To Cart
      </button>

      
    </div>
  );
}

