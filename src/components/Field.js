import React, { Component } from "react"
import languageContext from "../contexts/languageContext"

class Field extends Component {
  static contextType = languageContext
  getText = language => {
    switch (language) {
      case "english":
        return "Name"

      case "spanish":
        return "Nombre"

      case "french":
        return "Nom"

      case "german":
        return "Name"

      case "italian":
        return "Nome"

      case "danish":
        return "Navn"

      case "hungarian":
        return "Nev"

      case "portuguese":
        return "Nome"

      default:
        return "Name"
    }
  }

  render() {
    return (
      <div className='ui field'>
        <label className='bold'>{this.getText(this.context.language)}</label>
        <input></input>
      </div>
    )
  }
}
export default Field
