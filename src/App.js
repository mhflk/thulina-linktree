import React, { Component } from "react";
import { HashRouter, Route, Switch} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "./pages/home";

import Footer from "./components/footer";
class App extends Component {
  render() {
    return (
      <div>
        <HashRouter basename={process.env.PUBLIC_URL}>
            <Route exact path="/"  component={home}/>
            
            <Footer/>
        </HashRouter>
      </div>
    );
  }
}

export default App;
