import React from 'react';
import { Container, Row } from 'reactstrap';
import ActiveListing from '../components/ActiveListing'

class ActiveListingRow extends React.Component {
    render () {
        const {
        logged_in,
        sign_in_route,
        sign_out_route,
        } = this.props
            return (
              <>
            <Container>
              <Container>
                <Row>
                  <h2 className="h2" style={{margin: '64px 0 32px 0'}}>Your Active Food Listings</h2>
                </Row>
              </Container>
              <Row>
                <ActiveListing logged_in={this.props.logged_in} />
              </Row>
            </Container>
            </>
          );
        }
}

export default ActiveListingRow;