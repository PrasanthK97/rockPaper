import './App.css'

import {Component} from 'react'

import Buttons from './components/Buttons'

const choicesList = [
  {
    id: 'ROCK',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/rock-image.png',
  },
  {
    id: 'SCISSORS',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/scissor-image.png',
  },
  {
    id: 'PAPER',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rock-paper-scissor/paper-image.png',
  },
]

class App extends Component {
  state = {
    selectedButton: '',
    isClicked: false,
    opponent: '',
    playerId: '',
    opponentId: '',
    score: 0,
    status: '',
  }

  activeButton = (imageUrl, id) => {
    const dd = choicesList[Math.floor(Math.random() * choicesList.length)]

    this.setState({
      selectedButton: imageUrl,
      playerId: id,
      isClicked: true,
      opponent: dd.imageUrl,
      opponentId: dd.id,
    })

    const {selectedButton, opponent, playerId, opponentId} = this.state
    console.log('p', id, 'o', dd.id)

    if (id === dd.id) {
      this.setState({status: 'IT IS DRAW'})
    } else if (
      (id === 'ROCK' && dd.id === 'SCISSORS') ||
      (id === 'SCISSORS' && dd.id === 'PAPER') ||
      (id === 'PAPER' && dd.id === 'ROCK')
    ) {
      this.setState(prevState => ({
        score: prevState.score + 1,
      }))
      this.setState({status: 'YOU WON'})
    } else {
      this.setState(prevState => ({
        score: prevState.score - 1,
      }))
      this.setState({status: 'YOU LOSE'})
    }
  }

  playAgain = () => {
    this.setState({isClicked: false, score: 0})
  }

  render() {
    const {isClicked, score, selectedButton, opponent, status} = this.state
    return (
      <div id="bg">
        <div id="header">
          <div id="tags-container">
            <h1>Rock Paper Scissors</h1>
          </div>
          <div id="score-container">
            <p>{`Score:${score}`}</p>
          </div>
        </div>

        {isClicked ? (
          <>
            <div>
              <img id="button-image" alt="your choice" src={selectedButton} />
              <img id="button-image" alt="opponent choice" src={opponent} />
              <p>{status}</p>
              <button onClick={this.playAgain} type="button">
                Play Again
              </button>
            </div>
          </>
        ) : (
          <div id="buttons-container">
            {choicesList.map(each => (
              <Buttons buttonDetails={each} activeButton={this.activeButton} />
            ))}
          </div>
        )}
        <div id="rules-button-container">
          <button type="button">Rules</button>
        </div>
      </div>
    )
  }
}

export default App
