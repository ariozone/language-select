import React from "react"
class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:{" "}
        <i
          className='flag us'
          onClick={() => this.props.onLanguegeSelect("english")}
        ></i>
        <i
          className='flag es'
          onClick={() => this.props.onLanguegeSelect("spanish")}
        ></i>
      </div>
    )
  }
}
export default LanguageSelector
