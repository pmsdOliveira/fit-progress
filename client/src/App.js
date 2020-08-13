import React from "react";
import "./sass/App.sass";

import Header from "./components/Header";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }
}

export default App;
