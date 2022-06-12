import React, { Component } from "react";

export default class Page2 extends Component {
  render() {
    return (
      <div>
        <h1>This is page 2</h1>
        <button
          onClick={() => {
            this.props.pageHandler(0);
          }}
        >
          Prev
        </button>
      </div>
    );
  }
}
