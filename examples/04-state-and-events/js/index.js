import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Counter extends Component {
  constructor(props) {
    super(props);
    // Set the default state in the constructor
    this.state = {counter: 0};
    /* "this" is problematic for events handling
     * in the render method that's why we have to use
     * "bind"
     */
    this.incrementCounter = this.incrementCounter.bind(this);
    this.decrementCounter = this.decrementCounter.bind(this);
    this.resetCounter = this.resetCounter.bind(this);
  }
  incrementCounter() {
    this.setState({counter: this.state.counter + 1});
  }
  decrementCounter() {
    this.setState({counter: this.state.counter - 1});
  }
  resetCounter() {
    this.setState({counter: 0});
  }
  render() {
    var isEvenMessage = <p>The counter value is even.</p>;
    if (this.state.counter % 2 == 0) {
      isEvenMessage = <p>The counter value is peer.</p>;
    }
    return (
      <div>
        <h1>State and events</h1>
        <p>counter: {this.state.counter}</p>
        {isEvenMessage}
        <button type="button" onClick={this.incrementCounter}>
          Increment
        </button>
        <button type="button" onClick={this.decrementCounter}>
          Decrement
        </button>
        <button type="button" onClick={this.resetCounter}>
          Reset
        </button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('root'));
