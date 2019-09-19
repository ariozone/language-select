import React, { Component } from "react"
import languageContext from "../contexts/languageContext"

class Field extends Component {
  static contextType = languageContext
  render() {
    const text = this.context === "english" ? "Name" : "Nombre"
    return (
      <div className='ui field'>
        <label>{text}</label>
        <input></input>
      </div>
    )
  }
}
export default Field
