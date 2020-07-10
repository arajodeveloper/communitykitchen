import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import BoxMarker from './BoxMarker'
import FoodList from './FoodList'
import { Jumbotron } from 'reactstrap';
import pinkmapicon from './assets/pink-map-icon_300.png'
import iconshadow from './assets/map-icon-shadow_300.png'
import blackmapicon from './assets/black-map-icon_300.png'
import greenmapicon from './assets/green-map-icon_300.png'
import HeaderUser from './HeaderUser';
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
        return <BoxMarker clickedBox={this.clickedBox.bind(this)} key={idx} lat={food.latitude} lng={food.longitude} name={food.name} foodId={food.id} UserFoodId={food.user_id} note={food.note} icon={this.allIcons[idx % 3]} />
      })
    } else {

      content = <div>Loading foods</div>
    }

    return(
      <>
       <HeaderUser />
      <Jumbotron>
      <Map center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {content}



      </Map>
      </Jumbotron>
      <FoodList reserveFood={this.reserveFood.bind(this)} logged_in={this.props.loggedIn} numAvailFoods={this.state.foods.filter((food) => !food.reservation).length} reserve={this.state.reserve} reserved={this.state.reserved}  foods={this.state.foods.filter((food) => food.user_id == this.state.currentUserFood)} />
      </>

    )
  }
}

export default NeedFood
