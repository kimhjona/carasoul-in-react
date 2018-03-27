import React, {Component} from 'react';

class Dot extends Component {
  updateIndexFromDotPress = () => {
    const {
      index,
      handleDotPress
    } = this.props

    handleDotPress(index)
  }
  render() {
    const {
      focused
    } = this.props;

    const notFocusedStyle = {
      borderRadius: "50%",
      backgroundColor: "#a6a6a6",
      position: "relative",
      padding: "5px",
      width: "15px",
      height: "15px",
      margin: "2px 5px",
      float: "left",
      cursor: "pointer"
    }
    const focusedStyle = {
      borderRadius: "50%",
      backgroundColor: "#4d4d4d",
      position: "relative",
      padding: "5px",
      width: "15px",
      height: "15px",
      margin: "2px 5px",
      float: "left",
      cursor: "pointer"
    }
    return (
      <div 
        style={
          focused 
          ? focusedStyle 
          : notFocusedStyle
        }
        onClick={this.updateIndexFromDotPress}
      >
      </div>
    );
  }
}

export default Dot;