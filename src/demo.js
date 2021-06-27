import React, { Component } from "react";
import ReactDOM from "react-dom";

class demo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "sadasd"
    };    
    this.changeText = this.changeText.bind(this);
  }

  changeText(event) {
    this.setState({
    name: event.target.value
  });
  }

  render() {
    return (
      <div>
        <label htmlFor="name">Enter Text here </label>
        <button  id="name" onClick={this.name} />
        <h3>{this.state.name}</h3>
      </div>
    );
  }
}

export default demo;