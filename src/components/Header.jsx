import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';  // Import useSelector
// import './Header.css';

const Header = () => {
  const cartItems = useSelector((state) => state.cart.items);  // Get cart items from Redux store
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);  // Calculate total quantity in cart

  return (
    <header className="header">
      <nav className='nav'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cart">Cart ({cartCount})</Link></li>  {/* Display cart count */}
      </nav>
    </header>
  );
};

export default Header;
