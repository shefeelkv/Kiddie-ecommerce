
const Cart = ({ cartItems, setCartItems, isCartOpen, setIsCartOpen }) => {
  if (!isCartOpen) return null;

  const handleRemove = (id) => setCartItems(cartItems.filter(i => i.id !== id));
  
  const handleQtyChange = (id, delta) => {
    setCartItems(cartItems.map(i => {
      if (i.id === id) {
        const newQty = Math.max(1, i.qty + delta);
        return { ...i, qty: newQty };
      }
      return i;
    }));
  };

  const subTotal = cartItems.reduce((acc, item) => acc + (Math.round(item.price * 80) * item.qty), 0);
  const discount = Math.min(subTotal, 56); 
  const tax = 0.00;
  const total = subTotal > 0 ? subTotal - discount + tax : 0;

  return (
    <>
      <div className="cart-overlay" onClick={() => setIsCartOpen(false)}></div>
      <div className="cart-modal">
        <div className="cart-header">
          <h2>Cart</h2>
          <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
        </div>
        
        <div className="cart-items-container">
          {cartItems.length === 0 ? <p className="empty-cart">Your cart is empty.</p> : null}
          {cartItems.map(item => (
             <div key={item.id} className="cart-item">
                <img className="cart-item-img" src={item.thumbnail || item.images?.[0]} alt={item.title} />
                <div className="cart-item-details">
                   <div className="cart-item-top">
                     <h3>{item.title}</h3>
                     <button className="remove-item" onClick={() => handleRemove(item.id)}>
                      
                     </button>
                   </div>
                   <p>{item.description?.slice(0, 50)}</p>
                   <div className="cart-item-actions">
                      <h4>Rs {Math.round(item.price * 80)}/-</h4>
                      <div className="qty-controls">
                         <button className="qty-btn remove" onClick={() => handleQtyChange(item.id, -1)}>-</button>
                         <span className="qty-num">{item.qty}</span>
                         <button className="qty-btn add" onClick={() => handleQtyChange(item.id, 1)}>+</button>
                      </div>
                   </div>
                </div>
             </div>
          ))}
        </div>

        <div className="promo-section">
          <input className="promo-input" type="text" placeholder="Enter Your Promocode" />
          <button className="promo-apply-btn">Apply</button>
        </div>

        <div className="cart-summary">
           <div className="summary-row">
              <span>Sub Total</span>
              <span>Rs {subTotal}</span>
           </div>
           <div className="summary-row">
              <span>Discount</span>
              <span>Rs {discount}</span>
           </div>
           <div className="summary-row">
              <span>Tax</span>
              <span>Rs {tax.toFixed(2)}</span>
           </div>
           <div className="summary-row total">
              <span>Total</span>
              <span>Rs {total}</span>
           </div>
        </div>

        <button className="checkout-btn">Check Out</button>
      </div>
    </>
  );
}

export default Cart;
