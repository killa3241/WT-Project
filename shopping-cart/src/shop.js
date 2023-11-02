import React from 'react';
import ShopItem from './Shopitem';

const Shop = ({ shopItemsData }) => {
  return (
    <div id="shop">
      {shopItemsData.map((item) => (
        <ShopItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default Shop;
