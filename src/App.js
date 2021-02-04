import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import FirstPage from "./components/FirstPage";
import Detail from "./components/Detail";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <>
        <Nav />

        <div className="container mt-3">
          <Router>
            <FirstPage path="/" />
            <Detail path="/detail/:id" />
          </Router>
        </div>
      </>
    );
  }
}

export default App;
