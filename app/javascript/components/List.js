import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import BoxMarker from './BoxMarker'
// import leafGreen from './assets/leaf-green.png'
// import leafRed from './assets/leaf-red.png'
// import leafOrange from './assets/leaf-orange.png'
// import leafShadow from './assets/leaf-shadow.png'


class List extends React.Component {

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
      zoom: 13
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


  render(){
    let content 
    if(this.state.foods.length > 0) {
      content = this.state.foods.map((food, idx) => {
        return <BoxMarker key={idx} lat={food.latitude} lng={food.longitude} name={food.name} note={food.note} icon={this.allIcons[idx % 3]} />
      })
    } else {

      content = <div>Loading foods</div>
    }

    return(
      <Map center={this.state.center} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {content}


      </Map>

    )
  }
}


export default List;
