import React, {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {
    num: 0,
    text: 'even',
  }

  increment = () => {
    const randomIncrement = Math.floor(Math.random() * 101)

    const newTotal = Math.min(this.state.num + randomIncrement, 100)

    this.setState({
      num: newTotal,
      text: newTotal % 2 === 0 ? 'Even' : 'Odd',
    })
  }
  render() {
    const {num, text} = this.state

    return (
      <div className="main">
        <h2>Count {num}</h2>
        <p>Count is {text}</p>
        <button className="btn" onClick={this.increment}>
          Increment
        </button>
        <p>Increase By Random Number Between 0 to 100</p>
      </div>
    )
  }
}

export default EvenOddApp
