import React, { Component } from "react";

export default class Page1 extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>This is page 1</h1>
        <button
          onClick={() => {
            this.props.pageHandler(1);
          }}
        >
          Next
        </button>
      </div>
    );
  }
}
