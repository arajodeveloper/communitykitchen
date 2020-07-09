import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import BoxMarker from './BoxMarker'
import FoodList from './FoodList'
// import leafGreen from './assets/leaf-green.png'
// import leafRed from './assets/leaf-red.png'
// import leafOrange from './assets/leaf-orange.png'
// import leafShadow from './assets/leaf-shadow.png'
import { Jumbotron } from 'reactstrap';
import pinkmapicon from './assets/pink-map-icon_300.png'
import iconshadow from './assets/map-icon-shadow_300.png'
import blackmapicon from './assets/black-map-icon_300.png'
import greenmapicon from './assets/green-map-icon_300.png'

class NeedFood extends React.Component {

  greenIcon = L.icon({
    iconUrl: greenmapicon,
    shadowUrl: iconshadow,
    iconSize:     [44, 65],
    shadowSize:   [86, 20],
    iconAnchor:   [22, 94],
    shadowAnchor: [18, 50],
    popupAnchor:  [-3, -76]

  })
  redIcon = L.icon({
    iconUrl: pinkmapicon,
    shadowUrl: iconshadow,
    iconSize:     [44, 65],
    shadowSize:   [86, 20],
    iconAnchor:   [22, 94],
    shadowAnchor: [18, 50],
    popupAnchor:  [-3, -76]

  })
  orangeIcon = L.icon({
    iconUrl: blackmapicon,
    shadowUrl: iconshadow,
    iconSize:     [44, 65],
    shadowSize:   [86, 20],
    iconAnchor:   [22, 94],
    shadowAnchor: [18, 50],
    popupAnchor:  [-3, -76]

  })
  allIcons = [this.greenIcon, this.redIcon, this.orangeIcon]

  constructor(props){
    super(props)
    this.state = {
      foods: [],
      center: [32.639954, -117.106705],
      zoom: 13,
      currentFood: null,
      reserve:'reserve',
      reserved: 'reserved'
    }
  }

  clickedBox(foodId){
    // this.setState()
    console.log('CLICKED BOX CHECK:');
    console.log(foodId);
    this.setState({currentFood: foodId});
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
        return <BoxMarker clickedBox={this.clickedBox.bind(this)} key={idx} lat={food.latitude} lng={food.longitude} name={food.name} foodId={food.id} note={food.note} icon={this.allIcons[idx % 3]} />
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
      <FoodList reserveFood={this.reserveFood.bind(this)} reserve={this.state.reserve} reserved={this.state.reserved} foods={this.state.foods.filter((food) => food.id == this.state.currentFood)} />
      </>

    )
  }
}

export default NeedFood
