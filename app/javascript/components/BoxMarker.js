import React, { Component } from 'react';

import { Marker, Popup } from 'react-leaflet';
import { Button } from 'reactstrap';


class BoxMarker extends Component {
  

  render() {
    return (
      <Marker position={[this.props.lat, this.props.lng]} icon={this.props.icon}>
          <Popup>
           Box Number: #{this.props.box} <br /> {this.props.name} <br />
           {/* {this.props.ingredients} <br /> {this.props.note} <br /> */}
           <Button>More Info</Button>
          </Popup>
       </Marker>
    );
  }
}

export default BoxMarker;