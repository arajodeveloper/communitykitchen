import React, { Component } from 'react';
import { Marker, Popup } from 'react-leaflet';
import { Button, CardTitle, CardText, CardImg, Card, CardBody } from 'reactstrap';

class BoxMarker extends Component {
  render() {
    return (
      <Marker position={[this.props.lat, this.props.lng]} icon={this.props.icon}>
          <Popup>
          <Card>
          <CardImg top width="100%" src={this.props.image} alt="Card image cap" />
          <CardBody>
          <CardTitle className="h3">{this.props.name}</CardTitle>
          <CardText>Pick-Up: {this.props.time}</CardText>
          </CardBody>
          {/* <Button className="btn4" onClick={() => this.props.clickedBox(this.props.foodId, this.props.UserFoodId)}>More Info</Button> */}
          </Card>
          </Popup>
       </Marker>
    );
  }
}

export default BoxMarker;