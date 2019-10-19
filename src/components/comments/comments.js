import React from 'react';

import './comments.scss';

import CommentList from '../comment-list/comment-list.js';
import AddComment from '../add-comment/add-comment.js';

const Comments = () =>{
  return (
    <div className="comments-wrapper">
      <CommentList />
      <AddComment />
    </div>
  );
}

export default Comments;
