import React from "react";
import ReactDOM from "react-dom";


import "./styles.css";

class Keys extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="keys-grid">
        <button
          className="key-operator"
          id="add"
          onClick={this.props.handleOperator}
          value="+"
        >
          +
        </button>
        <button
          className="key-operator"
          id="subtract"
          onClick={this.props.handleOperator}
          value="-"
        >
          -
        </button>
        <button
          className="key-operator"
          id="multiply"
          onClick={this.props.handleOperator}
          value="*"
        >
          x
        </button>
        <button
          className="key-operator"
          id="divide"
          onClick={this.props.handleOperator}
          value="/"
        >
          ÷
        </button>
        <button
          className="key-number"
          id="seven"
          onClick={this.props.handleNumber}
          value="7"
        >
          7
        </button>
        <button
          className="key-number"
          id="eight"
          onClick={this.props.handleNumber}
          value="8"
        >
          8
        </button>
        <button
          className="key-number"
          id="nine"
          onClick={this.props.handleNumber}
          value="9"
        >
          9
        </button>
        <button
          className="key-number"
          id="four"
          onClick={this.props.handleNumber}
          value="4"
        >
          4
        </button>
        <button
          className="key-number"
          id="five"
          onClick={this.props.handleNumber}
          value="5"
        >
          5
        </button>
        <button
          className="key-number"
          id="six"
          onClick={this.props.handleNumber}
          value="6"
        >
          6
        </button>
        <button
          className="key-number"
          id="one"
          onClick={this.props.handleNumber}
          value="1"
        >
          1
        </button>
        <button
          className="key-number"
          id="two"
          onClick={this.props.handleNumber}
          value="2"
        >
          2
        </button>
        <button
          className="key-number"
          id="three"
          onClick={this.props.handleNumber}
          value="3"
        >
          3
        </button>
        <button
          className="key-number"
          id="zero"
          onClick={this.props.handleNumber}
          value="0"
        >
          0
        </button>
        <button
          className="key-number"
          id="decimal"
          onClick={this.props.handleDecimal}
          value="."
        >
          .
        </button>
        <button
          className="key-number"
          id="clear"
          onClick={this.props.handleClear}
          value="clear"
        >
          AC
        </button>
        <button
          className="key-equal"
          id="equals"
          onClick={this.props.handleEqual}
          value="equal"
        >
          =
        </button>
      </div>
    );
  }
}

class Display extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <div id="display">{this.props.currentValue}</div>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentValue: "0",
      prevValue: ""
    };
    this.handleNumber = this.handleNumber.bind(this);
    this.handleOperator = this.handleOperator.bind(this);
    this.handleDecimal = this.handleDecimal.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleEqual = this.handleEqual.bind(this);
  }

  handleNumber(e) {
    const key = e.target;
    const keyNumber = key.value;
    if (this.state.currentValue == "0") {
      this.setState({
        currentValue: keyNumber
      });
    } else if (this.state.currentValue === "0.") {
      this.setState({
        currentValue: "0." + keyNumber
      });
    } else {
      this.setState({
        currentValue: this.state.currentValue + keyNumber
      });
    }
  }

  handleOperator() {
    console.log(this.state.prevValue);
  }

  handleDecimal(e) {
    const key = e.target;
    const keyPoint = key.value;
    if (this.state.currentValue.indexOf(".") == -1) {
      this.setState({ currentValue: this.state.currentValue + keyPoint });
    } else {
      this.setState({ currentValue: this.state.currentValue });
    }
  }

  handleClear() {
    this.setState({
      currentValue: 0
    });
  }

  handleEqual() {
    console.log("Allez les bleus!!");
  }

  render() {
    return (
      <div className="container">
        <Display currentValue={this.state.currentValue} />
        <Keys
          handleNumber={this.handleNumber}
          handleOperator={this.handleOperator}
          handleDecimal={this.handleDecimal}
          handleClear={this.handleClear}
          handleEqual={this.handleEqual}
        />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
