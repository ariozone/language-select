import React, { Component } from "react"
import languageContext from "../contexts/languageContext"

class Button extends Component {
  render() {
    return (
      <button className='ui button primary'>
        {" "}
        <languageContext.Consumer>
          {value => (value === "english" ? "Submit" : "Enviar")}
        </languageContext.Consumer>
      </button>
    )
  }
}
export default Button
