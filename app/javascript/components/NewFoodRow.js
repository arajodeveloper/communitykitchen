import React from 'react';
import { Container, Row } from 'reactstrap';
import FoodList from '../components/FoodList'

class NewFoodRow extends React.Component {
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
                <Container>
                  <Row>
                  <h2 className="h2 center margin-top">NewFoodRow Available Foods</h2>
                  </Row>
                  <Row>
                    <FoodList logged_in={this.props.logged_in} foods={this.state.foods.filter((food) => !food.reservation)}/>
                  </Row>
                </Container>
              </>
            );
        }
}

export default NewFoodRow;