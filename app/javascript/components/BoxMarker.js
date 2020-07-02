import React, { Component } from 'react';
import L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import leafGreen from './assets/leaf-green.png'
import leafRed from './assets/leaf-red.png'
import leafOrange from './assets/leaf-orange.png'
import leafShadow from './assets/leaf-shadow.png'

class BoxMarker extends Component {
  

  render() {
    return (
      <Marker position={[this.props.lat, this.props.lng]} icon={this.props.icon}>
          <Popup>
           Box Number: #{this.props.box} <br /> {this.props.name}
          </Popup>
       </Marker>
    );
  }
}

export default BoxMarker;