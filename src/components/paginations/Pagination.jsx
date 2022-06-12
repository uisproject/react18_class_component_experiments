import React, { Component } from "react";
import Page1 from "./Page1";
import Page2 from "./Page2";

export default class Pagination extends Component {
  constructor(props) {
    super(props);

    this.pageHandler = this.pageHandler.bind(this);

    this.state = {
      currentPage: 0,
    };
  }

  pageHandler = (page) => {
    this.setState({ currentPage: page });
  };

  render() {
    console.log(this.state.currentPage);
    switch (this.state.currentPage) {
      case 0:
        return <Page1 pageHandler={this.pageHandler} />;
        break;

      case 1:
        return <Page2 pageHandler={this.pageHandler} />;
        break;
    }
  }
}
