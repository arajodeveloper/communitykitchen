import React from 'react';
import footerlogo from '../images/Gmas_kitchen_logo_light_300.png'

const Footer = (props) => {
  return (
      <>
        <div className="footer-clear">
        </div>
        <div className="margin-top footer-styles padding">
            <p className="float-left padding"><img className='footerlogo' src={footerlogo}/></p>
            <p className="float-right padding footer-links"><a href="mailto:gma.kitchen.og@gmail.com">Contact Us</a></p>
        </div>
    </>
  );
};

export default Footer;