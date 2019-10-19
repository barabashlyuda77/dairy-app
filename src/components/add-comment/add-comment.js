import React from 'react';

import './add-comment.scss';

const AddComment = () =>{
  return (
    <div className="add-comment-wrapper">
      <div className="square-add"></div>
      <textarea className="add-text"></textarea>
    </div>
  );
}

export default AddComment;
