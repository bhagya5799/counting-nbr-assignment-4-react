// Write your code here
// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mango: 0,
    banana: 0,
  }

  handleMango = () => {
    const {mango} = this.state
    this.setState({mango: mango + 1})
  }

  handleBanana = () => {
    const {banana} = this.state
    this.setState({banana: banana + 1})
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="container">
        <div className="item-container">
          <h1 className="heading">
            Bob ate <span className="count">{mango}</span> mangoes
            <span className="count">{banana}</span> bananas
          </h1>
          <div className="image-container">
            <div className="fruit">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                alt="mango"
              />
              <button onClick={this.handleMango}>Eat Mango</button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="banana"
              />
              <button onClick={this.handleBanana}>Eat Banana</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default FruitsCounter
