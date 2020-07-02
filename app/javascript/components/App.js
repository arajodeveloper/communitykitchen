import React from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import NewFood from "./NewFood"
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    return (
      <React.Fragment>
        <Navigation />
        {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        }
        <Header />
        <NewFood />
      </React.Fragment>
    );
  }
}

export default App;
