import React, { Component } from "react"
import languageContext from "../contexts/languageContext"
import ColorContext from "../contexts/colorContext"

class Button extends Component {
  getText = value => (value === "english" ? "Submit" : "Enviar")
  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        {" "}
        <languageContext.Consumer>
          {value => this.getText(value)}
        </languageContext.Consumer>
      </button>
    )
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => this.renderButton(color)}
      </ColorContext.Consumer>
    )
  }
}
export default Button
