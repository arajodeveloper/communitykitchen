import React, {Component} from 'react';
import { Jumbotron, Button } from 'reactstrap';



class Header extends React.Component {
    render () {
        const {
        logged_in,
        sign_in_route,
        sign_out_route
        } = this.props

        return (
            <>
                <Jumbotron>
                    <h1 className="display-3">Connecting Communities Through Food</h1>
                    <Button color="info" href={sign_out_route}>Sign Out</Button>
                    <Button color="info" href={sign_in_route}>Sign In</Button>
                </Jumbotron>
        </>
        );
    }
} 
    export default Header;