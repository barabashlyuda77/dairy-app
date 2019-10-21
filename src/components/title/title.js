import React from 'react';

import './title.scss';

const Title = (props) => {
  return (
    <div className="title-wrapper">
      <h1>{props.titleText}</h1>
    </div>
  );
}

export default Title;
