// import React, { Component } from 'react';

// class FoodList extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       foods:this.props.foods

//     }

    
//   }
  

//   reserveFood(food){
  
//     // call backend (maybe use put ), update food.reservation to be true

//     // food.reservation = !food.reservation
//     food.reserveRIGHTNOW = true;
//     console.log(food)
//     try {
//       fetch(`http://localhost:3000/foods/${food.id}`, {method:'PUT', headers: {
//         'Content-Type': 'application/json'
//         // 'Content-Type': 'application/x-www-form-urlencoded',
//       }, body: JSON.stringify(food)})
//       .then(response => response.json())
//       .then(data => {
//         console.log("data", data);
//         // setFoods(data)
//       })
//     } 
//     catch(err){
//       console.log(err);
//     }
//     const { foods } = this.state
//     foods.indexOf(food)
//     console.log(foods.indexOf(food))
//     // this.setState()
//   }