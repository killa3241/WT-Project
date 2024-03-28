import React from 'react';
import shopItemsData from './Items';
const CartDescription = ({ cartItems }) => {
  const getTotalAmount = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0);
  };

  return (
    <div className="cart-description">
      <h2>Your Shopping Cart</h2>
      <table>
        <thead>
          <tr>
            <th>Serial Number</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>Quantity</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {shopItemsData.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>₹ {item.price}</td>
              <td>{item.quantity}</td>
              <td>₹ {item.quantity * item.price}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="4">Total Amount</td>
            <td>₹ {getTotalAmount()}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartDescription;