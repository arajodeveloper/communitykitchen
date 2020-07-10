import React, { Component } from 'react';

import { Marker, Popup } from 'react-leaflet';
import { Button } from 'reactstrap';


class BoxMarker extends Component {
  

  render() {
    return (
      <Marker position={[this.props.lat, this.props.lng]} icon={this.props.icon}>
          <Popup>
           
           {this.props.name} <br />
           <Button onClick={() => this.props.clickedBox(this.props.foodId, this.props.UserFoodId)}>More Info</Button>
          </Popup>
       </Marker>
    );
  }
}

export default BoxMarker;