import React from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import NewFood from "./NewFood"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Navigation />
        <Header />
        <NewFood />
      </React.Fragment>
    );
  }
}

export default App;
