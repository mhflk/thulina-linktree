import React, { Component } from "react";
import {Container, Row, Col} from 'react-bootstrap';
import {Releases} from '../components/new_release.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faSoundcloud } from '@fortawesome/free-brands-svg-icons';
import hero1 from "../images/hero-1.jpg";
import "../css/style.css";
import AOS from "aos";
import "aos/dist/aos.css";

class Release extends Component {
  get_release(x){
    for(var i=0;i<Releases.length;i++){
      if(Releases[i].id==x){
        return(Releases[i]);
      }
    }
  }
  icon_space={
    "padding-right":"5px",
    "font-size":"30px"
  }
  data=this.get_release(this.props.match.params.release);
  componentDidMount(){
    document.body.setAttribute('background', hero1);
  }
  componentWillUnmount(){
    document.body.setAttribute('background', '');
  }
  render() {
    AOS.init({
      duration: 1000,
      once: true
    });
    return (
      <div  id="content-wrapper" >
        <Container>
          <Row>
            <Col xs={12} md={{ span: 6, offset: 3 }} lg={{ span: 6, offset: 3 }} className="text-center">
              <div className="release-con">
                <div className="release">
                    <div className="release-img">
                      <img src={this.data.image} alt={this.data.name}/>
                    </div>
                    <div className="release-name">
                      <h4>{this.data.name}</h4>
                      <p>{this.data.desc}</p>
                    </div>
                    <div className="release-links-con">
                      <div className="release-links">
                        <Row>
                          <Col xs={8} className="text-left">
                            <h5><FontAwesomeIcon style={this.icon_space} icon={faYoutube}/>YOUTUBE</h5>
                          </Col>
                          <Col xs={4}>
                            <a href={this.data.yt} className="btn btn-1">play</a>
                          </Col>
                        </Row>
                      </div>
                      <div className="release-links">
                        <Row>
                          <Col xs={8}  className="text-left">
                            <h5><FontAwesomeIcon style={this.icon_space} icon={faInstagram}/>
                            IGTV</h5>
                          </Col>
                          <Col xs={4}>
                            <a href={this.data.igtv} className="btn btn-1">play</a>
                          </Col>
                        </Row>
                      </div>
                      <div className="release-links">
                        <Row>
                          <Col xs={8} className="text-left">
                            <h5><FontAwesomeIcon style={this.icon_space} icon={faSoundcloud}/>
                            SOUNDCLOUD</h5>
                          </Col>
                          <Col xs={4}>
                            <a href={this.data.sc} className="btn btn-1" >play</a>
                          </Col>
                        </Row>
                      </div>
                    </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Release;
