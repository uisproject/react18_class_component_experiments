import { Component } from "react";

class Plus1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newCounter: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    console.log(props);
    console.log(state);

    return { x: "test" };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.counter !== prevProps.counter) {
      this.setState({ newCounter: this.props.counter * 2 });
    }
    console.log(prevProps);
    console.log(prevState);
    console.log(snapshot);
  }

  render() {
    console.log(this.state.x);
    return (
      <>
        <h2>{this.state.newCounter}</h2>
      </>
    );
  }
}

export default Plus1;
