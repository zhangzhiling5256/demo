import React from "react";


let css = {
  width: "15px",
  height: "15px",
  background: "#fff",
  borderRadius: "50%",
  position: "relative",
  border: "1px solid #1890ff",
  margin: "20px auto"
}


export default class Box extends React.Component {
  constructor() {
    super()
    this.state = {
      color: "#fff",
      flag: false
    }
  };
  render() {
    return (
      <div className="box" style={css} onClick={this.onBack}>
        <div className="child" style={{
          width: "10px",
          height: "10px",
          background: this.state.color,
          borderRadius: "50%",
          position: "absolute",
          top: "50%",
          left: "50%",
          marginLeft: "-5px",
          marginTop: "-5px"

        }}></div>
      </div>
    )
  }
  onBack = () => {
    this.setState({
      color: "#1890ff",
      flag: true
    })
    if (this.state.flag) {
      this.func()
    }
  }
  func = () => {
    this.setState({
      color: "#fff",
      flag: false
    })
  }
} 