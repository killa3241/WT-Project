import React from 'react';
import './style.css';
import ShopItem from './Shopitem';

function Shop({ shopItemsData, incrementCart,decrementCart}) {
  const rows = [];
  for (let i = 0; i < shopItemsData.length; i += 5) {
    rows.push(shopItemsData.slice(i, i + 5));
  }

  return (
    <div className="shop">
      {rows.map((row, rowIndex) => (
        <div className="row" key={rowIndex}>
          {row.map((item) => (
            <ShopItem key={item.id} item={item} incrementCart={incrementCart} decrementCart={decrementCart}/>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Shop;
