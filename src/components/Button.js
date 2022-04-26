import React, { Component, useState } from 'react';

// Functional Based Component
// const Button = (props) => {
//   const [counter, setCounter] = useState(0)

//   const handleButtonClick = () => {
//     setCounter(counter+1)
//   }
//   return (
//     <div>

//       <h1>{ props.firstName } button has been clicked { counter } times.</h1>
//       <button onClick={ handleButtonClick }>Click me!</button>
//     </div>
//   );
// };

// Class based components
class Button extends Component {
  state = {
    counter: 0
  }

  handleButtonClick = () => {
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    return (
      <div>
        <h1>{ this.props.firstName } button has been clicked { this.state.counter } times.</h1>
        <button onClick={ this.handleButtonClick }>Click me!</button>
      </div>
    );
  }
};

export default Button;
