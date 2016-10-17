import  React from 'react';
class Counter extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    }
  }
  increment() {
    const oldValue = this.state.value;
    const newValue = oldValue + 1;
    this.setState(
      {
        value: newValue,
        text: 'test'
      }
  );
  }
  render() {
    return (
        <div className="ui segment">
          <p>{this.state.value}</p>
          <div className="ui button" onClick={this.increment.bind(this)}>Increment</div>
          <p>{this.state.text}</p>
        </div>
      );
  }
}

export default Counter
