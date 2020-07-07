import React, { Component } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import BoxMarker from './BoxMarker'
import leafGreen from './assets/leaf-green.png'
import leafRed from './assets/leaf-red.png'
import leafOrange from './assets/leaf-orange.png'
import leafShadow from './assets/leaf-shadow.png'
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
      zoom: 13
    }
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
      content = this.state.foods.map((food, idx) => {
        return <BoxMarker key={idx} lat={food.latitude} lng={food.longitude} name={food.name} box={food.box_number} note={food.note} icon={this.allIcons[idx % 3]} />
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
      </>
    
    )
  }
}

export default NeedFood