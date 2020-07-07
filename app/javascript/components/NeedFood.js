import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import BoxMarker from './BoxMarker'
import FoodList from './FoodList'
import leafGreen from './assets/leaf-green.png'
import leafRed from './assets/leaf-red.png'
import leafOrange from './assets/leaf-orange.png'
import leafShadow from './assets/leaf-shadow.png'
import { Jumbotron } from 'reactstrap';



class NeedFood extends React.Component {

  greenIcon = L.icon({
    iconUrl: leafGreen,
    shadowUrl: leafShadow,
    iconSize:     [38, 50], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]

  })
  redIcon = L.icon({
    iconUrl: leafRed,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]

  })
  orangeIcon = L.icon({
    iconUrl: leafOrange,
    shadowUrl: leafShadow,
    iconSize:     [38, 95], 
    shadowSize:   [50, 64], 
    iconAnchor:   [22, 94],
    shadowAnchor: [4, 62],  
    popupAnchor:  [-3, -76]

  })
  allIcons = [this.greenIcon, this.redIcon, this.orangeIcon]

  constructor(props){
    super(props)
    this.state = {
      foods: [],
      center: [32.639954, -117.106705],
      zoom: 13,
      currentBox: null,
      reserve:'reserve',
      reserved: 'reserved'
    }
  }

  clickedBox(boxNum){
    // this.setState()
    console.log('CLICKED BOX CHECK:');
    console.log(boxNum);
    this.setState({currentBox: "" + boxNum});
  }

  reserveFood(food){
  
    // call backend (maybe use put ), update food.reservation to be true

    food.reservation = !food.reservation
    food.reserveRIGHTNOW = true;
    console.log(food)
    try {
      fetch(`http://localhost:3000/foods/${food.id}`, {method:'PUT', headers: {
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
      fetch("http://localhost:3000/foods")
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
  


  render(){
    // let likethisyo = this


    // var mark = L.marker([
    //   parseFloat(item["Latitude"]),
    //   parseFloat(item["Longitude"])
    // ]);
    // const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng]
    // const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng]

    let content 
    if(this.state.foods.length > 0) {
      content = this.state.foods.filter((food) => !food.reservation).map((food, idx) => {
        return <BoxMarker clickedBox={this.clickedBox.bind(this)} key={idx} lat={food.latitude} lng={food.longitude} name={food.name} box={food.box_number} note={food.note} icon={this.allIcons[idx % 3]} />
      })
    } else {
      
      content = <div>Loading foods</div>
    }
  
    return(
      <>
      <Jumbotron>
      <Map center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {content}
      
       
       
      </Map>
      </Jumbotron>
      <FoodList reserveFood={this.reserveFood.bind(this)} reserve={this.state.reserve} reserved={this.state.reserved} foods={this.state.foods.filter(food => food.box_number == this.state.currentBox)} />
      </>
    
    )
  }
}

export default NeedFood