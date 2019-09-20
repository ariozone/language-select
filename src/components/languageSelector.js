import React from "react"
import LanguageContext from "../contexts/languageContext"

class LanguageSelector extends React.Component {
  static contextType = LanguageContext

  render() {
    return (
      <div>
        Select a language:{" "}
        <i
          className='flag us'
          onClick={() => this.context.onLanguageSelect("english")}
        ></i>
        <i
          className='flag es'
          onClick={() => this.context.onLanguageSelect("spanish")}
        ></i>
        <i
          className='flag fr'
          onClick={() => this.context.onLanguageSelect("french")}
        ></i>
        <i
          className='flag de'
          onClick={() => this.context.onLanguageSelect("german")}
        ></i>
        <i
          className='flag it'
          onClick={() => this.context.onLanguageSelect("italian")}
        ></i>
        <i
          className='flag dk'
          onClick={() => this.context.onLanguageSelect("danish")}
        ></i>
        <i
          className='flag hu'
          onClick={() => this.context.onLanguageSelect("hungarian")}
        ></i>
        <i
          className='flag pt'
          onClick={() => this.context.onLanguageSelect("portuguese")}
        ></i>
      </div>
    )
  }
}
export default LanguageSelector
