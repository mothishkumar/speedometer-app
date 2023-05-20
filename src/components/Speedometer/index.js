// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component {
  state = {count: 0}

  onAccelarate = () => {
    this.setState(prevState => ({count: prevState.count + 10}))
  }

  onBrake = () => {
    this.setState(prevState => ({count: prevState.count - 10}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg">
        <h1 className="heading">SPEEDOMETER</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="image"
        />
        <h1 className="heading1">Speed is {count}mph</h1>
        <p className="para">Min Limit is 0mph, Max Limit is 200mph</p>
        <div>
          <button type="button" className="button1" onClick={this.onAccelarate}>
            Accelerate
          </button>
          <button type="button" className="button2" onClick={this.onBrake}>
            Apply brake
          </button>
        </div>
      </div>
    )
  }
}

export default Speedometer
