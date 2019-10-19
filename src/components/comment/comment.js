import React from 'react';
import classNames from 'classnames';

import './comment.scss';

const Comment = (props) => {
  const squareClass = classNames({
    'square': true,
    'square-orange': props.color === 'orange',
    'square-blue': props.color === 'blue',
  });

  return (
    <div className="commen-wrapper">
      <div className={squareClass}></div>
      <p className="comment-text">
        {props.text}
      </p>
    </div>
  );
}

export default Comment;
