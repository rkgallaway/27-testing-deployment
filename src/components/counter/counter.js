import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleUp = e => {
    let count = this.state.count + 1;
    this.updateCounter(count);
  };

  handleDown = e => {
    let count = this.state.count - 1;
    this.updateCounter(count);
  };

  updateCounter(count) {
    let polarity = "";
    if (count > 0) {
      polarity = "positive";
    } else if (count < 0) {
      polarity = "negative";
    }
    this.setState({ count, polarity });
  }

  render() {
    let classes = ["count", this.state.polarity].join(" ");
    return (
      <section className="counter">
        <a href="#" className="down" onClick={this.handleDown}>
          down
        </a>
        <span className={classes}>{this.state.count}</span>
        <a href="#" className="up" onClick={this.handleUp}>
          up
        </a>
      </section>
    );
  }
}

export default Counter;
