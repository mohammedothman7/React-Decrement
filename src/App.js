import React, { Component } from "react";
import protoTypes from "prop-types";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 5,
    };
  }

  decrement = () => {
    if (this.state.number < 1) {
      return alert("Cannot decrement anymore!");
    }

    this.setState({ number: this.state.number - 1 });
  };
  render() {
    return (
      <>
        {this.state.number}
        <button onClick={this.decrement}>Decrement</button>
      </>
    );
  }
}

App.protoTypes = {
  number: protoTypes.number.isRequired,
};

export default App;
