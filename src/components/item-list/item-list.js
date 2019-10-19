import React from 'react';

import './item-list.scss';

import Item from '../item/item.js';

const ItemList = () =>{
  return (
    <div className="item-list-wrapper">
      <Item
        text="First item with custom name"
        number="132"
        active={false}
       />
      <Item text="Second  item is active" number="3" active={true} />
    </div>
  );
}

export default ItemList;
