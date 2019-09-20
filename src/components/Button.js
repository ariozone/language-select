import React, { Component } from "react"
import languageContext from "../contexts/languageContext"
import ColorContext from "../contexts/colorContext"

class Button extends Component {
  getText = language => {
    switch (language) {
      case "english":
        return "Submit"

      case "spanish":
        return "Enivar"

      case "french":
        return "Soumettre"

      case "german":
        return "Einreichen"

      case "italian":
        return "Sottoscrivi"

      case "danish":
        return "Indsend"

      case "hungarian":
        return "Bekuldes"

      case "portuguese":
        return "Enivar"

      default:
        return "Submit"
    }
  }

  renderButton = color => {
    return (
      <button className={`ui button ${color}`}>
        {" "}
        <languageContext.Consumer>
          {({ language }) => this.getText(language)}
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
