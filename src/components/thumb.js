import React, { Component } from "react";
import {Row, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "../css/style.css";
export class Thumb extends Component {
  render() {
    return (
      <a href={this.props.link} target="_blank"  rel="noopener noreferrer">
        <div className="link-card">
          <Row noGutters>
            <Col xs={3}><div className="link-icon">
              <FontAwesomeIcon icon={this.props.icon}/>
            </div></Col>
            <Col xs={9}><div className="link-body">
              <h5>{this.props.site}</h5>
              <p>{this.props.uname}</p>
            </div></Col>
          </Row>
        </div>
      </a>
    );
  }
}
