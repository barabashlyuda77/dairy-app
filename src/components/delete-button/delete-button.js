import React from 'react';

import './delete-button.scss';

const DeleteButton = (props) =>{
  return (
    <div className="delete-button-wrapper">
      {props.text}
    </div>
  );
}

export default DeleteButton;
