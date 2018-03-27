import React, {Component} from 'react';
import Dot from './Dot';

class Carousel extends Component {
  constructor() {
    super();
    this.state = {
      focusIndex: 0,
      maxIndex: 0,
      timerId: 0
    }
  }

  componentWillMount = () => {
    const {
      urls
    } = this.props

    this.setState({
      maxIndex: urls.length - 1
    })
  }

  componentDidMount = () => {
    this.setTimer();
  }

  setTimer = () => {
    const {
      millisecondsToUpdate
    } = this.props

    this.setState({
      timerId: setInterval(this.updateImageOnTimer, millisecondsToUpdate)
    })
  }

  resetImageTimer() {
    const {
      timerId
    } = this.state

    clearInterval(timerId)
  }

  updateImageOnTimer = () => {
    // const {
    //   maxIndex,
    //   focusIndex
    // } = this.state

    // if (focusIndex < maxIndex) {
    //   this.setState({
    //     focusIndex: focusIndex + 1
    //   })
    // } else {
    //   this.setState({
    //     focusIndex: 0
    //   })
    // }
  }

  updateImageManually = event => {
    const {
      focusIndex,
      maxIndex
    } = this.state

    let newIndex = focusIndex;
    if (event === 'left') newIndex = focusIndex === 0 ? 0 : focusIndex - 1;
    else if (event === 'right') newIndex = focusIndex === maxIndex ? maxIndex : focusIndex + 1;
    this.setState({focusIndex: newIndex})
    this.resetImageTimer()
  }

  handleKeyPress = event => {
    if (event.key === "ArrowLeft") {
      this.updateImageManually("left");
    } else if (event.key === "ArrowRight") {
      this.updateImageManually("right");
    }
  }

  moveLeft = () => {
    this.updateImageManually("left")
  }

  moveRight = () => {
    this.updateImageManually("right")
  }

  handleDotPress = focusIndex => {
    this.setState({focusIndex})
  }

  render() {
    const {
      focusIndex,
      maxIndex
    } = this.state
    const {
      urls
    } = this.props

    const photoStyle = {
      position: "absolute",
      left: "0",
      height: "100%",
      width: "100%",
      border: "0",
      bottom: "30px"
    }

    const arrowStyleLeft = {
      position: "absolute",
      top: "50%",
      backgroundColor: "white",
      cursor: "pointer"
    }

    const arrowStyleRight = {
      position: "absolute",
      top: "50%",
      backgroundColor: "white",
      right: "0",
      cursor: "pointer"
    }

    const dotContainerStyle = {
      position: "absolute",
      bottom: "0"
    }

    const dotArray = [];
    for (let i = 0; i <= maxIndex; i++) {
      const dotObj = (
        <Dot 
          index={i}
          focused={focusIndex === i}
          key={i}
          handleDotPress={this.handleDotPress}
        />
      )
      dotArray.push(dotObj)
    }

    return (
      <div>
        <img 
          src={urls[focusIndex].photoUrl} 
          alt="Url"
          style={photoStyle}
          onKeyDown={e => this.handleKeyPress(e)}
          tabIndex="0"
        />
        {focusIndex !== 0 ? <div
          style={arrowStyleLeft}
          onClick={this.moveLeft}
        >
          Left
        </div> : ""}
        {focusIndex !== maxIndex ? <div
          style={arrowStyleRight}
          onClick={this.moveRight}
        >
          Right
        </div> : ""}
        <div
          style={dotContainerStyle}
        >
          {dotArray}
        </div>

      </div>
    );
  }
}

export default Carousel;