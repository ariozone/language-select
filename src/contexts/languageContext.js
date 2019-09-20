import React from "react"
const Context = React.createContext("english")

export class LanguageStore extends React.Component {
  state = {
    language: "english"
  }
  onLanguegeSelect = language => {
    this.setState({ language })
  }
  render() {
    return (
      <Context.Provider
        value={{ ...this.state, onLanguageSelect: this.onLanguegeSelect }}
      >
        {this.props.children}
      </Context.Provider>
    )
  }
}
export default Context
