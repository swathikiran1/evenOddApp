// Write your code here

import {Component} from 'react'

import './index.css'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    this.setState(() => {
      const n = Math.ceil(Math.random() * 100)
      let result
      if (n % 2 === 0) {
        result = {count: n, isEven: true}
      } else {
        result = {count: n, isEven: false}
      }
      return result
    })
  }

  render() {
    const {count, isEven} = this.state

    const text = isEven ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {text}</p>
          <button onClick={this.onIncrement} type="button">
            Increment
          </button>
          <p className="description">
            * Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
