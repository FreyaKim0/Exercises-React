import React from "react";
import { Component } from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePicker extends Component {
  static propTypes = {
    history: PropTypes.object,
  };

  myInput = React.createRef();

  goToStore = (event) => {
    // 1. stop form from submiting
    event.preventDefault();
    // 2. get text from input
    console.log(this.myInput.current.value);
    const storeName = this.myInput.current.value;
    // 3. change the page route
    this.props.history.push(`/store/${storeName}`);
  };
  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A store</h2>
        <input
          type="text"
          ref={this.myInput}
          defaultValue={getFunName()}
          required
          placeholder="store name"
        />
        <button type="submit">Visite Store</button>
      </form>
    );
  }
}

export default StorePicker;
