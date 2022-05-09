import "./App.css";
import { Component } from "react";
import Box from "./components/Box"

class App extends Component {
  constructor(props) {
    super(props);

    let boxes = []
    let numBoxes = 24

    for (let i = 1; i <= numBoxes; i++) {
      boxes.push({
        id: i,
        color: `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
    })
    }

    // set default state
    this.state = {
      boxes,
    }
    // bind methods to this
    this.handleBoxClick = this.handleBoxClick.bind(this)
  }

  getRandomColor() { 
    return Math.round(Math.random() * 255);
  }

  handleBoxClick (event, id) {
    let updatedBoxes = this.state.boxes.map((box) => {
      if(box.id === id) {
        box.color = `rgb(${this.getRandomColor()}, ${this.getRandomColor()}, ${this.getRandomColor()})`
        console.log(id)
      }

      return box
    })

    this.setState({boxes: updatedBoxes})

  }
  

  render() {
    return (
      <main
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          textAlign: "center",
        }}
      >
        <h1>React: State and Props</h1>
        <div className="App">{
          this.state.boxes.map((box) => {
            return <Box key={box.id} id={box.id} color={box.color} onClick={this.handleBoxClick}/>
          })
        
        }</div>
      </main>
    );
  }
}

export default App;
