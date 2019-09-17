import React, { Component } from "react"
import languageContext from "../contexts/languageContext"

class Button extends Component {
  static contextType = languageContext
  render() {
    console.log(this.context)
    return <button className='ui button primary'> Submit</button>
  }
}
export default Button
