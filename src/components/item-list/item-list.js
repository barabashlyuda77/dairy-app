import React from 'react';
import { connect } from 'react-redux';

import './item-list.scss';

import Item from '../item/item.js';

const ItemList = (props) => {
  return (
    <div className="item-list-wrapper">
      {
        props.items.map((item) => {
          return <Item
            text={item.title}
            number={item.comments.length}
            active={item.active}
            id={item.id}
            key={item.id}
           />
        })
      }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    items: state
  }
}

export default connect(mapStateToProps)(ItemList);
