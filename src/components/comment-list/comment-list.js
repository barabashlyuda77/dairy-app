import React from 'react';

import './comment-list.scss';

import Comment from '../comment/comment.js';

const CommentList = (props) =>{
  return (
    <div className="comment-list-wrapper">
      {
        props.comments.map((comment, i) => {
          return <Comment
            color={ i % 2 === 0 ? 'orange' : 'blue'}
            text={comment}
            key={i}
          />
        })
      }
    </div>
  );
}

export default CommentList;
