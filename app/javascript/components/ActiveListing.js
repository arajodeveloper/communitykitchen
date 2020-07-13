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
    let content = (<p className="card-text margin-left">You have no active food listings.</p>)
    let activeFoods = this.state.foods.filter((food, idx) => !food.reservation)
    if (activeFoods.length > 0){
      content = activeFoods.map((food, idx) =>{
        let imgSource = (food.image.includes('https://') || food.image.includes('http://')) ? food.image : `/img/${food.image}`;
        return <div className="float-left card-width margin-bottom2" key={idx}>
          <Card className="middlecard-margin">
            <CardImg top height="225px" src={imgSource} alt="Card image cap" />
              <CardBody>
                <CardTitle className="h3">{food.name}</CardTitle>
                  <CardText><b>Description:</b> {food.note} </CardText>
                  <CardText><b>Ingredients:</b> {food.ingredients}</CardText>
                  <CardText><b>Pick-Up:</b> {food.time}</CardText>
                  <Button className="btn4 float-left" onClick={() => this.handleEditFood(food.id)} >Update</Button>
                  <Button className="btn3 float-right" onClick={() => this.deleteFood(food)}>Delete</Button>
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