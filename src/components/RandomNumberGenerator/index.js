import {Component} from 'react'
import './App.css'

class GuessNumber extends Component {
  state = {
    inputValue: ' ',
    Message: ' ',
    correctAnswer: 0,
  }

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
    console.log(event.target.value)
  }

  onCheckButton = () => {
    const {inputValue} = this.state
    const newRandomNumber = Math.ceil(Math.random() * 100)
    console.log(newRandomNumber)
    console.log(inputValue)

    if (parseInt(inputValue) === parseInt(newRandomNumber)) {
      this.setState({Message: 'Congratulation!!, You did it!'})
    } else {
      this.setState({Message: 'Sorry, Please try again!'})
    }

    this.setState({correctAnswer: newRandomNumber})
  }

  render() {
    const {inputValue, Message, correctAnswer} = this.state
    return (
      <div className="App-container">
        <div className="container">
          <div className="image-heading">
            <img
              src="https://s.clipartkey.com/mpngs/s/39-394839_wedding-girl-png-transparent-image-guess-the-number.png"
              alt="magic"
              className="image"
            />
            <h1 className="main-heading">Guess The Number</h1>
            <p className="para">Between 1 to 100</p>
          </div>
          <div className="Check-container">
            <input
              type="text"
              className="input"
              value={inputValue}
              onChange={this.onChangeInput}
            />
            <button
              type="button"
              className="button"
              onClick={this.onCheckButton}
            >
              Check
            </button>
          </div>
          <div>
            <h3 className="message">{Message}</h3>
            <p className="correct">The Number is: {correctAnswer}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default GuessNumber
