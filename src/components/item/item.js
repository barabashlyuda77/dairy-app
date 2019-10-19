import React from 'react';

import './item.scss';

import Number from '../number/number.js';
import DeleteButton from '../delete-button/delete-button.js';

const Item = (props) =>{
  return (
    <div className="item-wrapper">
      <div className="text-wrapper">
        <p className="item-text">{props.text}</p>
        <Number number={props.number} />
      </div>
      <DeleteButton text="Delete" />
    </div>
  );
}

export default Item;
