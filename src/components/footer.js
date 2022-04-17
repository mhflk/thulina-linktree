import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";
class Footer extends Component {
  render() {
    AOS.init({
      duration: 1000,
      once: true
    });
    function switchTheme(){
      var theme = document.getElementById('theme-select').value;
      document.body.setAttribute('data-theme', theme);
    }
    return (
      <footer className="footer">
      <Container>
        <Row>
          <Col md={6} className="text-center">
            Switch Theme
            <select onChange={switchTheme} id="theme-select" defaultValue="light">
              <option value="dark">Dark</option>
              <option value="light">Light</option>
            </select>
          </Col>
          <Col md={6} className="text-center">
              <p>
              © 2022 All rights reserved | Thulina
              </p>
          </Col>
        </Row>
      </Container>
    </footer>
    );
  }
}

export default Footer;
