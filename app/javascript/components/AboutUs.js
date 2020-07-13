import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, Container, Row, Button
} from 'reactstrap';
import PickUp from '../images/pick-up'
import Reserve from '../images/reserve'
import Browse from '../images/browse2'

const AboutUs = (props) => {
  return (
      <Container>
        <Container>
            <Row>
            <h2 className="h2" style={{margin: '64px 0 32px 0'}}>About Community Kitchen</h2>
            </Row>
        </Container>
        <Row>
            <div className="float-left card-width">
                <Card className="middlecard-margin">
                <CardImg top height="225px" src={Browse} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="h3">Browse</CardTitle>
                        <CardText>Choose from hundreds of meals cooked with love by your neighbors. When you don’t know when you will eat next, Community Kitchen and your neighbors will be there.</CardText>
                    </CardBody>
                </Card>
            </div>
            <div className="float-left card-width">
                <Card className="middlecard-margin">
                <CardImg top height="225px" src={Reserve} alt="Card image cap" />
                    <CardBody>
                        <CardTitle className="h3">Reserve</CardTitle>
                        <CardText>When you’re ready to reserve your meal,  just tap Reserve. When it’s the start of your meals availability your food will then be placed in a cooler and put on the front porch, ready for pick-up.</CardText>
                    </CardBody>
                </Card>
            </div>
            
            <div className="float-left card-width">
            <Card className="middlecard-margin">
            <CardImg top height="225px" src={PickUp} alt="Card image cap" />
                <CardBody>
                    <CardTitle className="h3">Pickup</CardTitle>
                    <CardText>Once you are ready to pick-up your meal you can visit the address and take your meal out of the cooler that was placed on the porch — and that’s it. Now you can enjoy your meal.</CardText>
                </CardBody>
            </Card>
            </div>
        </Row>
</Container>
  );
};

export default AboutUs;