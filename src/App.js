import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    // set default state

    // bind methods to this
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
        <div className="App">{/* render boxes */}</div>
      </main>
    );
  }
}

export default App;
