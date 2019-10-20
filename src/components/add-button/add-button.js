import React from 'react';

import './add-button.scss';

const AddButton = (props) => {
  return (
    <div className="add-button-wrapper" onClick={props.onClick}>
      <p className="button-text">Add new</p>
    </div>
  );
}

export default AddButton;
