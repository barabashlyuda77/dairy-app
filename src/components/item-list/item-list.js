import React from 'react';

import './item-list.scss';

import Item from '../item/item.js';

const ItemList = () =>{
  return (
    <div className="item-list-wrapper">
      <Item text="First item with custom name" number="132" />
      <Item text="Second  item is active" number="3" />
    </div>
  );
}

export default ItemList;
