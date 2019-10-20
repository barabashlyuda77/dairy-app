import React, {Component} from 'react';

import './add-item.scss';

import AddButton from '../add-button/add-button.js';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef()
  }

  createItem = (value) => {
    return {
      id: Date.now(),
      title: value,
      active: false,
      comments: []
    };
  }

  getItemsFromLocalStorage = () => {
    const localStorageItems = localStorage.getItem('items');
    return localStorageItems === null ? [] : JSON.parse(localStorageItems);
  }

  saveItemsToLocalStorage = (items) => {
    localStorage.setItem('items', JSON.stringify(items));
  }

  addItemToItemsList = (title) => {
    const items = this.getItemsFromLocalStorage();
    const item = this.createItem(title);
    items.push(item);
    this.saveItemsToLocalStorage(items);
  }

  clickHandler = () => {
    const title = this.textInput.current.value;
    this.addItemToItemsList(title);

    console.log(JSON.parse(localStorage.getItem('items')));

    //display data to item list
  }

  render() {
    return (
      <div className="add-item-wrapper">
        <input
          className="input-text"
          type="text"
          placeholder="Type name here..."
          ref={this.textInput}
        />
        <AddButton onClick={this.clickHandler}/>
      </div>
    );
  }
}

export default AddItem;
