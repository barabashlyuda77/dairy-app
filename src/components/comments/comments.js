import React from 'react';

import './comments.scss';

import CommentList from '../comment-list/comment-list.js';
import AddComment from '../add-comment/add-comment.js';
import Title from '../title/title.js';

const Comments = () =>{
  return (
    <div className="comments-wrapper">
      <Title
        titleText="Comments #2"
      />
      <CommentList />
      <AddComment />
    </div>
  );
}

export default Comments;
