import React from 'react';

import './items.scss';

import Title from '../title/title.js';
import AddItem from '../add-item/add-item.js';

const Items = () =>{
  return (
    <div className="items-wrapper">
      <Title titleText="Items" />
      <AddItem />
      <p>ItemList</p>
    </div>
  );
}

export default Items;
