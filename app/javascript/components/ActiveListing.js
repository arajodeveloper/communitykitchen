import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class ActiveListing extends Component {
  constructor(props){
    super(props)
    this.state = {
      foods: []
      // center: [32.639954, -117.106705],
      // zoom: 13,
      // currentFood: null,
      // reserve:'reserve',
      // reserved: 'reserved'
    }
  }
  // updateFood(food){
  
  //   // call backend (maybe use put ), update food.reservation to be true

  //   food.reservation = !food.reservation
  //   // food.reserveRIGHTNOW = true;
  //   console.log(food)
  //   try {
  //     fetch(`http://localhost:3000/user_food/index`, {method:'PUT', headers: {
  //       'Content-Type': 'application/json'
  //       // 'Content-Type': 'application/x-www-form-urlencoded',
  //     }, body: JSON.stringify(food)})
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("data", data);
  //       let currentFoods = [...this.state.foods];
  //       let thisFoodIndex = currentFoods.findIndex((foodEl) => foodEl.id == data.id);
  //       console.log('this is the food index ' + thisFoodIndex);
  //       console.log(currentFoods);
  //       currentFoods[thisFoodIndex] = data;
  //       console.log(currentFoods);
  //       this.setState({foods: currentFoods});
  //       // setFoods(data)
  //     })
  //   } 
  //   catch(err){
  //     console.log(err);
  //   }
  //   const { foods } = this.state
  //   foods.indexOf(food)
  //   console.log(foods.indexOf(food))
  //   // this.setState()
  // }


  // const getUserFood = () => {
  //   fetch("http://localhost:3000/user_food/index")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("data", data);
  //       this.setState({foods: data})
  //     })
  //   } 
  //   catch(err){
  //     console.log(err);
  //   }

  
  componentDidMount(){
    try {
      fetch("http://floating-reaches-65868.herokuapp.com/user_food/index")
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

  deleteFood(food){
    try {
      fetch(`http://floating-reaches-65868.herokuapp.com/foods/${food.id}`, {method:'DELETE', headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      }, body: JSON.stringify(food)})
      .then(response => response.json())
      .then(data => {
        console.log("data", data);
        let currentFoods = [...this.state.foods];
        this.setState({foods: currentFoods.filter((foodEl) => foodEl.id != food.id)});
        // setFoods(data)
      })
    } 
    catch(err){
      console.log(err);
    }
  }

  handleEditFood(foodId){
    try{
      window.location.replace(`/updatefood/${foodId}`);
    }
    catch(err){
      debugger;
      console.log('DDONGCHA!')
    }
    
  }

  render() {
    let content = (<p>No Active Food</p>)
    if (this.state.foods.length > 0){
      content = this.state.foods.filter((food) => !food.reservation).map((food) =>{
        return <div className="float-left card-width">
          <Card className="middlecard-margin">
            <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
              <CardBody>
                <CardTitle className="h3">{food.name}</CardTitle>
                <CardSubtitle> Currently Active Food </CardSubtitle>
                <br />
      
                  <CardText>Ingredients: {food.ingredients} <br />
                            Description: {food.note} <br />
                            Available Pick-Up Time: {food.time} <br/>
                  </CardText>
                  <Button onClick={() => this.handleEditFood(food.id)} >Update</Button>
                  <Button onClick={() => this.deleteFood(food)}>Delete</Button>
              </CardBody>
          </Card>
        </div>
      })
    }
    return (
      <div>
        {content}
      </div>
    );
  }
}

export default ActiveListing;