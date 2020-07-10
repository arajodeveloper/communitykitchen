import React from 'react';
import BoxMarker from './BoxMarker'
import pinkmapicon from './assets/pink-map-icon_300.png'
import iconshadow from './assets/map-icon-shadow_300.png'
import blackmapicon from './assets/black-map-icon_300.png'
import greenmapicon from './assets/green-map-icon_300.png'


class FoodMap extends React.Component {

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
    // this.state = {
    //   foods: [],
    //   center: [32.639954, -117.106705],
    //   zoom: 13
    // }
  }

  // componentDidMount(){
  //   try {
  //     fetch("/foods")
  //     .then(response => response.json())
  //     .then(data => {
  //       console.log("data", data);
  //       this.setState({foods: data})
  //     })
  //   }
  //   catch(err){
  //     console.log(err);
  //   }
  // }


  render(){
    // let likethisyo = this


    // var mark = L.marker([
    //   parseFloat(item["Latitude"]),
    //   parseFloat(item["Longitude"])
    // ]);
    // const positionGreenIcon = [this.state.greenIcon.lat, this.state.greenIcon.lng]
    // const positionRedIcon = [this.state.redIcon.lat, this.state.redIcon.lng]
    console.log('PROPS CHECK YO');
    console.log(this.props);
    console.log(this.props.foods.length);
    console.log(this.props.foods);
    let content
    if(this.props.foods.length > 0) {
      console.log('food length gt 0');
      content = this.props.foods.map((food, idx) => {
        console.log('hey inside map')
        console.log(idx, food.latitude, this.allIcons[idx % 3])
        return <BoxMarker key={idx} lat={food.latitude} lng={food.longitude} name={food.name} note={food.note} icon={this.allIcons[idx % 3]} />
      })
    } else {
      console.log('food length EMPTY');
      content = <div>Loading foods</div>
    }

    return(
      <>

      {/* <Map center={this.props.center} zoom={this.props.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
       {content}

      </Map> */}

      </>

    )
  }
}

export default FoodMap
