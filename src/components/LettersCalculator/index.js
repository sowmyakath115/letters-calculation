import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {inputPhrase: ''}

  onChangeInputValue = event => {
    const {value} = event.target
    this.setState({inputPhrase: value})
  }

  render() {
    const {inputPhrase} = this.state

    return (
      <div className="app-container">
        <div className="letter-calculator-con">
          <div className="calculator-container">
            <h1 className="heading"> Calculate the Letters you enter</h1>
            <div className="input-phrase-con">
              <label className="label" htmlFor="phraseText">
                {' '}
                Enter the phrase{' '}
              </label>
              <input
                type="text"
                className="letters-input"
                id="phraseText"
                value={inputPhrase}
                onChange={this.onChangeInputValue}
                placeholder="Enter the phrase"
              />
            </div>
            <p className="count"> No.of letters: {inputPhrase.length} </p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            className="letters-calculator-img"
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
