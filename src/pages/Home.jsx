import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import FilterSidebar from "../components/FilterSidebar";
import Wishlist from "../components/Wishlist";

const Home = () => {
const [products, setProducts] = useState([]);
const [cartItems, setCartItems] = useState([]);
const [wishlistItems, setWishlistItems] = useState(() => {
  try {
    const saved = localStorage.getItem("wishlist");
    return saved ? JSON.parse(saved) : [];
  } catch (e) {
    return [];
  }
});
const [isCartOpen, setIsCartOpen] = useState(false);
const [isWishlistOpen, setIsWishlistOpen] = useState(false);
const [isFilterOpen, setIsFilterOpen] = useState(false);
const [searchQuery, setSearchQuery] = useState("");

const addToCart = (product) => {
  setCartItems(prev => {
    const exists = prev.find(i => i.id === product.id);
    if (exists) {
      return prev.map(i => i.id === product.id ? { ...i, qty: i.qty + 1 } : i);
    }
    return [...prev, { ...product, qty: 1 }];
  });
  setIsCartOpen(true);
};

const toggleWishlist = (product) => {
  setWishlistItems(prev => {
    const exists = prev.find(i => i.id === product.id);
    if (exists) {
      return prev.filter(i => i.id !== product.id);
    }
    return [...prev, product];
  });
};

useEffect(() => {
  localStorage.setItem("wishlist", JSON.stringify(wishlistItems));
}, [wishlistItems]);

  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setProducts(res.data.products);
      
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <Navbar 
        cartCount={cartItems.reduce((acc, item) => acc + item.qty, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
        wishlistCount={wishlistItems.length}
        onWishlistClick={() => setIsWishlistOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={(e) => setSearchQuery(e.target.value)}
      />
      <Cart 
        cartItems={cartItems} 
        setCartItems={setCartItems} 
        isCartOpen={isCartOpen} 
        setIsCartOpen={setIsCartOpen} 
      />
      <Wishlist 
        wishlistItems={wishlistItems} 
        setWishlistItems={setWishlistItems} 
        isWishlistOpen={isWishlistOpen} 
        setIsWishlistOpen={setIsWishlistOpen} 
        onAddToCart={addToCart} 
      />

      <section className="hero">
        <div className="hero-text">
          
        </div>
      </section>

      <FilterSidebar isFilterOpen={isFilterOpen} setIsFilterOpen={setIsFilterOpen} />

      <section className="products">
        <div className="products-header">
          <h2>Our Top Categories</h2>
          <div className="products-header-controls">
            <span className="sort-by">Sorted By:</span>
            <button className="filter-toggle-btn" onClick={() => setIsFilterOpen(true)}>
              All Category <span className="settings-icon">⚙️</span>
            </button>
          </div>
        </div>

        <div className="card-container">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((item) => (
              <ProductCard 
                key={item.id} 
                item={item} 
                onAddToCart={() => addToCart(item)} 
                isWishlisted={wishlistItems.some(w => w.id === item.id)}
                onWishlistToggle={toggleWishlist}
              />
            ))
          ) : (
            <p className="no-products">No products found.</p>
          )}
        </div>
        
      </section>
    </>
    
  );
};

export default Home;