import React from 'react';
import { connect } from 'react-redux';
import { addComment } from '../../actions/index.js';

import './comments.scss';

import CommentList from '../comment-list/comment-list.js';
import AddComment from '../add-comment/add-comment.js';
import Title from '../title/title.js';

const Comments = (props) => {
  return (
    <div className="comments-wrapper">
      <Title
        titleText="Comments #2"
      />
      <CommentList comments={props.comments} />
      <AddComment itemId={props.itemId} addComment={props.addComment} />
    </div>
  );
}

const mapStateToProps = (state) => {
  const activeItem = state.find((item) => item.active === true);

  return {
    itemId: activeItem ? activeItem.id : null,
    comments: activeItem ? activeItem.comments : []
  }
};

const mapDispatchToProps = { addComment };

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
