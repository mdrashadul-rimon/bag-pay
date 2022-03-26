import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  let selectedCart = '';
  let total = 0;

  for (const product of cart) {
    if (cart.length >= 4) {
      selectedCart = selectedCart + product.name;
      total = total + product.price * product.quantity;
    }

  }
  return (
    <div className="cart">
      <h4>Selected Items</h4>
    if (cart.length ==4) {
      <h3>{selectedCart + ' '}</h3>
    }
      
      <p>Total price: ${total}</p>
      <div className="cart-btn">
        <div>
          <button className="custom-btn">
            <p>choose 1 for me</p>
          </button>
        </div>

        <div>
          <button className="custom-btn">
            <p>choose Again</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
