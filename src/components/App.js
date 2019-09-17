import React from "react"

class App extends React.Component {
  state = {
    language: "english"
  }
  onLanguegeSelect = language => {
    console.log(language)
    this.setState({ language })
  }
  render() {
    return (
      <div className='ui container'>
        <div className='m-2'>
          Select a language:
          <i
            className='flag us'
            onClick={() => this.onLanguegeSelect("english")}
          ></i>
          <i
            className='flag es'
            onClick={() => this.onLanguegeSelect("spanish")}
          ></i>
        </div>
      </div>
    )
  }
}
export default App
