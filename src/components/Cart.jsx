import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/cartSlice";
// import './Cart.css';

const Cart = () => {
  const cart = useSelector((state) => state.cart.items); // Get cart items from Redux store
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleRemove = (id) => {
    dispatch(removeFromCart(id)); // Dispatch removeFromCart action when Remove is clicked
  };

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity })); // Dispatch updateQuantity action when quantity changes
  };

  return (
    <>
      <div className="cart">
        <h1>Your Cart</h1>
      </div>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-item">
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <img className="product-image" src={item.image} alt="" />
                <p>
                  Quantity:
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={
                      (e) =>
                        handleQuantityChange(item.id, Number(e.target.value)) // Handle quantity change
                    }
                  />
                </p>
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Cart;
