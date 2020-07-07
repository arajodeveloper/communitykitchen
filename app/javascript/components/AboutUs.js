import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const AboutUs = (props) => {
  return (
      
    <div class="container">
        <h2 className="h2">About Community Kitchen</h2>
        <div class="float-left card-width">
            <Card className="middlecard-margin">
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle className="h3">Browse</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button className="btn2" href="/">Button</Button>
                </CardBody>
            </Card>
        </div>
        <div class="float-left card-width">
            <Card className="middlecard-margin">
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle className="h3">Reserve</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button className="btn2" href="/">Button</Button>
                </CardBody>
            </Card>
        </div>
        <div class="float-left card-width">
            <Card className="middlecard-margin">
                <CardImg top width="100%" src="https://reactstrap.github.io/assets/318x180.svg" alt="Card image cap" />
                <CardBody>
                <CardTitle className="h3">Pickup</CardTitle>
                <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                <Button className="btn2" href="/">Button</Button>
                </CardBody>
            </Card>
        </div>
    </div>
  );
};

export default AboutUs;