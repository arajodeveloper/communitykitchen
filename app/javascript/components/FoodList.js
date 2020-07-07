import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class FoodList extends Component {
  constructor(props){
    super(props)
    this.state = {
      foods:this.props.foods

    }

    
  }
  

  render() {
    let content = (<div>No Food Available Now! Come Back Later!</div>) 
    if(this.props.foods.length > 0) {
      let availableFoods = this.props.foods
      content = availableFoods.filter((food) => !food.reservation).map((food, idx) => {
        // return <div> key={idx} {food.name} {food.ingredients} {food.note} {food.box_number} {food.time}</div>
        return <div class="float-left card-width">
        <Card className="middlecard-margin">
          <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="h3">{food.name}</CardTitle>
              <CardSubtitle> Available Food in Box: #{food.box_number} </CardSubtitle>
              <br />
    
                <CardText>Ingredients: {food.ingredients} <br />
                          Description: {food.note} <br />
                          Available Pick-Up Time: {food.time} <br/>
                </CardText>
                  <Button onClick={() => this.props.reserveFood(food)} className={`btn2 ${food.reservation ? "reserved" : "notReserved"}`}>{food.reservation ?  'RESERVED' : 'RESERVE'}</Button>
            </CardBody>
        </Card>
    </div>
      })
    } 
    return (
      <div>
        {content}
      </div>
    )
  }
}


export default FoodList;