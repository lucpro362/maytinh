import React, { Component } from 'react';

class CalculatorApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num1: 0,
      num2: 0,
      result: 0
    };
  }

  handleInputChange = (e) => {
    this.setState({ [e.target.name]: Number(e.target.value) });
  }

  handleAddition = () => {
    const { num1, num2 } = this.state;
    const result = num1 + num2;
    this.setState({ result });
  }

  handleSubtraction = () => {
    const { num1, num2 } = this.state;
    const result = num1 - num2;
    this.setState({ result });
  }

  handleMultiplication = () => {
    const { num1, num2 } = this.state;
    const result = num1 * num2;
    this.setState({ result });
  }

  handleDivision = () => {
    const { num1, num2 } = this.state;
    const result = num1 / num2;
    this.setState({ result });
  }

  render() {
    const { num1, num2, result } = this.state;

    return (
      <div>
        <h1>Calculator</h1>
        <input
          type="number"
          name="num1"
          value={num1}
          onChange={this.handleInputChange}
        />
        <input
          type="number"
          name="num2"
          value={num2}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddition}>+</button>
        <button onClick={this.handleSubtraction}>-</button>
        <button onClick={this.handleMultiplication}>x</button>
        <button onClick={this.handleDivision}>/</button>
        <h2>Result: {result}</h2>
      </div>
    );
  }
}

export default CalculatorApp;

