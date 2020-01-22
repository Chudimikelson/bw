import React from 'react';
import { Container,Row, Col, Button } from 'reactstrap';
import Logo from './BrandLogo';
import {Fb, Tw, Ins, Yot} from './icons/icons';

const Footer = (props) => {
  return (
    <Container className="themed-container">
      <Row id="footer-top">
        <Col>Never miss the action fom your winning team</Col>
        <Col ><Button id="explore" size="sm">Explore More</Button></Col>
      </Row>
      <Row id="footer-mid">
        <Col>
          <Row>
            <Col>
              <ul>ABOUT US
                <li>Latest News</li>
                <li>Players Room</li>
                <li>Media Gallery</li>
                <li>Feedback</li>
                <li>Contact Us</li>
              </ul>
            </Col>
            <Col>
              <ul>INFORMATION
                <li>Olympics</li>
                <li>FIFA 2019</li>
                <li>NFL 2019</li>
                <li>NBA News</li>
                <li>Boxing</li>
              </ul>
            </Col>
            <Col>
              <ul>SUPPORT
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
                <li>FAQ</li>
                <li>Account</li>
              </ul>
            </Col>
          </Row>
          <Row id="all-rights">
            <Col>All Rights Reserved 2019</Col>
          </Row>
        </Col>
        <Col md="5" id="bw-footer" className="p-3">
          <Logo/>
          <span className="pl-3">BW Football</span>
          <div  className="pl-4 pt-4">
              <ul className="d-flex" id="socials">Follow Us
                <li className="ml-2"><Fb/></li>
                <li className="ml-1"><Ins/></li>
                <li className="ml-1"><Tw/></li>
                <li className="ml-1"><Yot/></li>
              </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;