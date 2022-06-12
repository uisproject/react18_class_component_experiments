import { Component } from "react";
import Plus1 from "./components/Plus1";
class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState((prev) => ({
      counter: prev.counter + 1,
    }));
  };

  componentDidMount() {
    console.log(
      "componentDidUpdate() is invoked immediately after updating occurs. This method is not called for the initial render."
    );
    console.log(
      "If you need to perform a side effect (for example, data fetching or an animation) in response to a change in props, use componentDidUpdate lifecycle instead."
    );
    console.log("-------------------");
    console.log();
  }

  render() {
    return (
      <>
        <h1>Counter: {this.state.counter}</h1>
        <button onClick={this.handleClick}>Hi</button>
        <Plus1 counter={this.state.counter} />
      </>
    );
  }
}

export default App;
