import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/product';
import { useDispatch } from 'react-redux';  // Import useDispatch
import { addToCart } from '../redux/cartSlice';  // Import the addToCart action
// import './ProductList.css';

const ProductList = () => {
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();  // Initialize useDispatch hook

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));  // Dispatch addToCart action when button is clicked
  };

  return (
    <div className='product-list-main'>
    <div className="search">
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>
      <div className='product-list'>
      <ul className='list'>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <p>{product.description}</p>
            <p>Price: Rs {product.price} /-</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
            <span className='view-button'><Link to={`/product/${product.id}`}>View Details</Link></span>
          </li>
        ))}
      </ul>
    </div>
    </div>
  );
};

export default ProductList;
