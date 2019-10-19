import React from 'react';

import './items.scss';

import Title from '../title/title.js';
import AddItem from '../add-item/add-item.js';
import ItemList from '../item-list/item-list.js';

const Items = () =>{
  return (
    <div className="items-wrapper">
      <Title titleText="Items" />
      <AddItem />
      <ItemList />
    </div>
  );
}

export default Items;
