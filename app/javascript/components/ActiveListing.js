import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import HeaderUser from './HeaderUser';


class ActiveListing extends Component {
  constructor(props){
    super(props)
    this.state = {
      foods: []
      
    }
  }
 
  
  componentDidMount(){
    try {
      fetch("/user_food/index")
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
      fetch(`/foods/${food.id}`, {method:'DELETE', headers: {
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
      console.log('BAD HONGCHA!')
    }
    
  }

  render() {
    let content = (<p>No Active Food</p>)
    let activeFoods = this.state.foods.filter((food) => !food.reservation)
    if (activeFoods.length > 0){
      content = activeFoods.map((food) =>{
        let imgSource = (food.image.includes('https://') || food.image.includes('http://')) ? food.image : `/img/${food.image}`;
        return <div className="float-left card-width">
          <Card className="middlecard-margin">
            <CardImg top width="100%" src={imgSource} alt="Card image cap" />
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
        <HeaderUser />
        {content}
      </div>
    );
  }
}

export default ActiveListing;