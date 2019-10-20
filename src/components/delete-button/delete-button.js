import React from 'react';

import './delete-button.scss';

const DeleteButton = (props) => {
  const clickHandler = (e) => {
    e.stopPropagation();
    props.onClick(e);
  }

  return (
    <div className="delete-button-wrapper" onClick={clickHandler}>
      {props.text}
    </div>
  );
}

export default DeleteButton;
