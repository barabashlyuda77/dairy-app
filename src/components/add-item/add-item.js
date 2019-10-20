import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addItem } from '../../actions/index.js';

import './add-item.scss';

import AddButton from '../add-button/add-button.js';

class AddItem extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef()
  }

  clickHandler = () => {
    const title = this.textInput.current.value;
    this.props.addItem(title);
    this.textInput.current.value = '';
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

const mapDispatchToProps = { addItem }

export default connect(null, mapDispatchToProps)(AddItem);
