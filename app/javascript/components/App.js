import React from "react"
import Navigation from "./Navigation"
import Header from "./Header"
import HeaderUser from "./HeaderUser"
import NewFood from "./NewFood"
import NeedFood from "./NeedFood"
import UpdateFood from "./UpdateFood"
import Footer from "./Footer"
import ActiveListing from '../components/ActiveListing'
import ActiveListingRow from "./ActiveListingRow"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  render () {
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
    } = this.props
    return (
  
  
    <Router>
     
      <Navigation loggedIn={logged_in} />
      
      <Switch>
        <Route path="/" exact component={logged_in ? HeaderUser : Header } />
        <Route exact path="/newfood" render={(props) => <NewFood loggedIn={logged_in} /> } />
        <Route exact path="/needfood" render={(props) => <NeedFood loggedIn={logged_in} /> } />
        <Route path="/updatefood/:foodId" render={(props) => <UpdateFood loggedIn={logged_in} /> } />
        <Route exact path="/activelisting" render={(props) => <ActiveListingRow loggedIn={logged_in} /> } />
      </Switch>
        <Footer />
      </Router>
      
    );
  }
}

export default App;
