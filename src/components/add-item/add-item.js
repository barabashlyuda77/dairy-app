import React from 'react';

import './add-item.scss';

import AddButton from '../add-button/add-button.js';

const AddItem = () =>{
  return (
    <div className="add-item-wrapper">
      <input
        className="input-text"
        type="text"
        placeholder="Type name here..."
      >
      </input>
      <AddButton />
    </div>
  );
}

export default AddItem;
