import React from "react"
import CreateUser from "./CreateUser"
import languageContext from "../contexts/languageContext"

class App extends React.Component {
  state = {
    language: "english"
  }
  onLanguegeSelect = language => {
    this.setState({ language })
  }
  render() {
    return (
      <div className='ui container'>
        <div>
          Select a language:{" "}
          <i
            className='flag us'
            onClick={() => this.onLanguegeSelect("english")}
          ></i>
          <i
            className='flag es'
            onClick={() => this.onLanguegeSelect("spanish")}
          ></i>
        </div>
        <languageContext.Provider value={this.state.language}>
          <CreateUser />
        </languageContext.Provider>
      </div>
    )
  }
}
export default App
