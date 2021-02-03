import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Nav from "./components/Nav";
import { Route, Link } from "react-router-dom";
import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";
import Jobs from "./components/Jobs";

class App extends Component {
  state = {
    location: "",
    position: "",
    checked: false,
    jobs: [],
  };
  handleLocation = (event) => {
    this.setState({ location: event.target.value });
  };
  handlePosition = (event) => {
    this.setState({ position: event.target.value });
  };
  handleCheck = (event) => {
    this.setState({ checked: event.target.checked });
  };
  handleSubmit = async () => {
    let response = await fetch(
      `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.position}&full_time=${this.state.checked}&location=${this.state.location}`
    );
    let data = await response.json();
    console.log(data);
    this.setState({ jobs: [...data] });
  };
  componentDidUpdate = (event) => {
    console.log(this.state.checked);
  };
  render() {
    return (
      <>
        <Nav />
        <div className="container mt-3">
          <div className="row">
            <div className="justify-content-center align-items-center col-3">
              <form>
                <TextField
                  id="outlined-basic"
                  label="Location"
                  variant="outlined"
                  className="mb-3"
                  onChange={this.handleLocation}
                />
                <TextField
                  id="outlined-basic"
                  label="Job-Position"
                  variant="outlined"
                  className="mb-2"
                  onChange={this.handlePosition}
                />
                <FormControlLabel
                  control={
                    <Switch
                      onChange={this.handleCheck}
                      name="checkedB"
                      color="primary"
                    />
                  }
                  label="Full Time"
                />
              </form>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleSubmit}
              >
                Submit
              </Button>
            </div>
            <div className="justify-content-center align-items-center col-9">
              <Jobs jobs={this.state.jobs} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
