import React, { Component } from "react"
import languageContext from "../contexts/languageContext"

class Field extends Component {
  static contextType = languageContext
  render() {
    const language = this.context.language
    let text
    switch (language) {
      case "english":
        text = "Name"
        break
      case "spanish":
        text = "Nombre"
        break
      case "french":
        text = "Nom"
        break
      case "german":
        text = "Name"
        break
      case "italian":
        text = "Nome"
        break
      case "danish":
        text = "Navn"
        break
      case "hungarian":
        text = "Nev"
        break
      case "portuguese":
        text = "Nome"
        break

      default:
        text = "Name"
    }

    return (
      <div className='ui field'>
        <label>{text}</label>
        <input></input>
      </div>
    )
  }
}
export default Field
