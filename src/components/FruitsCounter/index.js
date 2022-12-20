// Write your code here
import {Component} from 'react'

import './index.css'

class FruitsCounter extends Component {
  state = {
    mangos: 0,
    bananas: 0,
  }

  onclickBanana = () => {
    this.setState(prevState => ({bananas: prevState.bananas + 1}))
  }

  onclickMango = () => {
    this.setState(prevState => ({mangos: prevState.mangos + 1}))
  }

  render() {
    const {mangos, bananas} = this.state
    return (
      <div className="yellowcard">
        <div className="cardbox">
          <h1>
            Bob ate <span>{mangos}</span> mangoes <span>{bananas}</span> bananas
          </h1>
          <div className="flexcard">
            <div className="card1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
                alt="Mango"
              />
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.onclickMango}
                >
                  Eat Mango
                </button>
              </div>
            </div>
            <div className="card1">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                alt="Banana"
              />
              <div>
                <button
                  type="button"
                  className="btn"
                  onClick={this.onclickBanana}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
