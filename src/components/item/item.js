import React from 'react';
import classNames from 'classnames';

import './item.scss';

import Number from '../number/number.js';
import DeleteButton from '../delete-button/delete-button.js';

const Item = (props) => {
  const lineClass = classNames({
    'pink-line': true,
    'pink-line-active': props.active
  });

  return (
    <div className="row-wrapper">
      <div className={lineClass}></div>
      <div className="item-wrapper">
        <div className="text-wrapper">
          <p className="item-text">{props.text}</p>
          <Number number={props.number} />
        </div>
        <DeleteButton text="Delete" />
      </div>
    </div>
  );
}

export default Item;
