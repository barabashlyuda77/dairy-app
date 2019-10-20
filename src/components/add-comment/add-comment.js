import React from 'react';

import './add-comment.scss';

const AddComment = (props) => {
  const textArea = React.createRef();

  const typeHandler = (e) => {
    if ((e.key === 'Enter') && (e.ctrlKey === true)) {
      const comment = textArea.current.value;
      props.addComment(comment, props.itemId)
      textArea.current.value = '';
    }
  }

  return (
    <div className="add-comment-wrapper">
      <div className="square-add"></div>
      <textarea
        className="add-text"
        onKeyPress={typeHandler}
        ref={textArea}>
      </textarea>
    </div>
  );
}

export default AddComment;
