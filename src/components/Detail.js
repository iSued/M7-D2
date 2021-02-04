import React, { Component } from "react";
import ErrorBoundary from "./ErrorBoundary";
import { Container, Row, Col, Image } from "react-bootstrap";

class Detail extends Component {
  state = { loading: true };

  componentDidMount = async () => {
    console.log(this.props.id);
    try {
      let response = await fetch(
        `https://yabba-dabba-duls-cors-anywhere.herokuapp.com/https://jobs.github.com/positions/${this.props.id}.json`
      );
      let data = await response.json();
      console.log(data);
      this.setState({ job: { ...data } });
    } catch (err) {
      this.setState({ error: err });
      this.next(err);
    }
  };

  render() {
    return <h1>hello</h1>;
  }
}

export default function DetailsErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Detail {...props} />
    </ErrorBoundary>
  );
}
