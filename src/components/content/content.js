import React from 'react';

import './content.scss';

import Items from '../items/items.js';
import Comments from '../comments/comments.js';

const Content = () =>{
  return (
    <div className="content-wrapper">
      <Items />
      <Comments />
    </div>
  );
}

export default Content;
