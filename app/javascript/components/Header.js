import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';
import AboutUs from './AboutUs';
import FoodList from './FoodList';
import bgimage from '../images/Gmas_kitchen_bg_image_300.png';


class Header extends React.Component {
  constructor(props){
    super(props) 
    this.state = {
      foods : []
    }
  }


    componentDidMount(){
      try {
        fetch("/foods")
        .then(response => response.json())
        .then(data => {
          console.log("data", data);
          this.setState({foods: data})
        })
      } 
      catch(err){
        console.log(err);
      }
    }
    
    render () {
        const {
        logged_in,
        sign_in_route,
        sign_out_route,
        } = this.props


        return (
            <>
                <Jumbotron style={{ backgroundImage: `url(${bgimage})`, backgroundSize: 'cover' }}>
                    <h1 className="display-3">Connecting Communities</h1>
                    <h1 className="display-3">Through Food</h1>
                    <Button className="btn2" href="/users/sign_up">Become a Member</Button>
                </Jumbotron>
                <div>
                <h2 className="h2">Available Food Now!&ensp;Sign In to Reserve!</h2>
                </div>
                <FoodList logged_in={this.props.logged_in} foods={this.state.foods.filter((food) => !food.reservation).slice(0,3)}/>
                <AboutUs />
              
        </>
        );
    }
  }
 
    export default Header;