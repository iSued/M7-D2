import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import { InputGroup, FormControl } from "react-bootstrap";
class App extends Component {
  state = {};
  componentDidMount = async () => {
    let response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=frontend&location=berlin`
    );
    let data = await response.json();
    console.log(data);
  };
  render() {
    return (
      <>
        <Nav />
        <div className="container">
          <div className="row">
            <div className="col-3"></div>
            <div className="col-9">
              <h1>Search results</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
