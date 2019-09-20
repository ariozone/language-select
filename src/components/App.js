import React from "react"
import CreateUser from "./CreateUser"
import { LanguageStore } from "../contexts/languageContext"
import ColorContext from "../contexts/colorContext"
import LanguageSelector from "./languageSelector"

class App extends React.Component {
  render() {
    return (
      <div className='ui container'>
        <LanguageStore>
          <LanguageSelector></LanguageSelector>
          <ColorContext.Provider value={"black"}>
            <CreateUser />
          </ColorContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}
export default App
