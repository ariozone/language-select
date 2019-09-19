import React from "react"
import CreateUser from "./CreateUser"
import languageContext from "../contexts/languageContext"
import ColorContext from "../contexts/colorContext"

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
        <ColorContext.Provider value={"black"}>
          <languageContext.Provider value={this.state.language}>
            <CreateUser />
          </languageContext.Provider>
        </ColorContext.Provider>
      </div>
    )
  }
}
export default App
