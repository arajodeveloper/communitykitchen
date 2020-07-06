import React from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import HeaderUser from "./HeaderUser"
import NewFood from "./NewFood"
import NeedFood from "./NeedFood"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route
    } = this.props
    // if (!logged_in){
    //   this.props.history.push("/becomeMember");
    // }
    // else (!logged_in){
    //   this.props.history.push("/provideOrReceive");
    // }
    return (
    <Router>
      {/* <Header /> */}
      <Navigation loggedIn={logged_in} />
      <Switch>
        <Route path="/" exact component={logged_in ? HeaderUser : Header} />
        <Route exact path="/newfood" render={(props) => <NewFood loggedIn={logged_in} /> } />
        <Route exact path="/needfood" render={(props) => <NeedFood loggedIn={logged_in} /> } />
        
      </Switch>
        
        {/* {logged_in &&
          <div>
            <a href={sign_out_route}>Sign Out</a>
          </div>
        }
        {!logged_in &&
          <div>
            <a href={sign_in_route}>Sign In</a>
          </div>
        } */}
        {/* <Header />
        <NewFood /> */}
    </Router>
    );
  }
}

export default App;
