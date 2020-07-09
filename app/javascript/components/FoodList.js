import React, { Component } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


class FoodList extends Component {
  


  render() {
    console.log('chceck logged in prop');
    console.log(this.props.logged_in);
    let content = (<div></div>) 
    if (this.props.numAvailFoods == 0){
      content = (<div>No Food Available Now! Come Back Later!</div>) 
    }
    let nonReservedFoods = this.props.foods.filter((food) => !food.reservation);
    if(nonReservedFoods.length > 0) {
      console.log('hey in if');
      content = nonReservedFoods.map((food, idx) => {
        // return <div> key={idx} {food.name} {food.ingredients} {food.note} {food.box_number} {food.time}</div>
        return <div class="float-left card-width">
        <Card className="middlecard-margin">
          <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
            <CardBody>
              <CardTitle className="h3">{food.name}</CardTitle>
              <CardSubtitle> Available Food </CardSubtitle>
              <br />
    
                <CardText>Ingredients: {food.ingredients} <br />
                          Description: {food.note} <br />
                          Available Pick-Up Time: {food.time} <br/>
                </CardText>
                { this.props.logged_in &&
                 <Button onClick={() => this.props.reserveFood(food)} className={`btn2 ${food.reservation ? "reserved" : "notReserved"}`}>{this.props.food.reservation ?  'RESERVED' : 'RESERVE'}</Button>
                } 
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