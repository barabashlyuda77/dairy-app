import React from 'react';

import './number.scss';

const Number = (props) =>{
  return (
    <div className="number-wrapper">
      {props.number}
    </div>
  );
}

export default Number;
