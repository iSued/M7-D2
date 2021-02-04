import React, { Component } from "react";
import { TextField, Switch, Button, FormControlLabel } from "@material-ui/core";
import Jobs from "./Jobs";
import Detail from "./Detail";

class FirstPage extends Component {
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
      `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${this.state.position}&full_time=${this.state.checked}&location=${this.state.location}`
    );
    let data = await response.json();
    console.log(data);
    this.setState({ jobs: [...data] });
  };
  render() {
    return (
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
    );
  }
}

export default FirstPage;
