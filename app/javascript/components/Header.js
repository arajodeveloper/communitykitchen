import React from 'react';
import { Row, Container, Jumbotron, Button } from 'reactstrap';
import AboutUs from './AboutUs';
import FoodList from './FoodList';
import bgimage from '../images/Gmas_kitchen_bg_image_300.png';


class Header extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      foods: [],
      center: [32.639954, -117.106705],
      zoom: 13,
      currentFood: null,
      currentUserFood: null,
      reserve:'reserve',
      reserved: 'reserved'
    }
  }

  clickedBox(foodId, UserFoodId){
    // this.setState()
    console.log('CLICKED BOX CHECK:');
    console.log(foodId);
    this.setState({currentUserFood: UserFoodId});
  }

  reserveFood(food){

    // call backend (maybe use put ), update food.reservation to be true

    food.reservation = !food.reservation
    food.reserveRIGHTNOW = true;
    console.log(food)
    try {
      fetch(`/foods/${food.id}`, {method:'PUT', headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, body: JSON.stringify(food)})
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        let currentFoods = [...this.state.foods];
        let thisFoodIndex = currentFoods.findIndex((foodEl) => foodEl.id == data.id);
        console.log('this is the food index ' + thisFoodIndex);
        console.log(currentFoods);
        currentFoods[thisFoodIndex] = data;
        console.log(currentFoods);
        this.setState({foods: currentFoods});
        // setFoods(data)
      })
    }
    catch(err){
      console.log(err);
    }
    const { foods } = this.state
    foods.indexOf(food)
    console.log(foods.indexOf(food))
    // this.setState()
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
            <Container>
              <h2 className="h2" style={{margin: '64px 0 32px 0'}}>Available Foods</h2>
            </Container>
            <Container>
              <Row>
                <FoodList reserveFood={this.reserveFood.bind(this)} logged_in={this.props.loggedIn} numAvailFoods={this.state.foods.filter((food) => !food.reservation).length} reserve={this.state.reserve} reserved={this.state.reserved}  foods={(this.state.foods)} />
              </Row>
            </Container>
            <AboutUs />
          </>
        );
    }
  }
 
    export default Header;