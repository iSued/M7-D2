import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

class Nav extends Component {
  render() {
    return (
      <>
        <Navbar className="mb-3" bg="dark" variant="dark">
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            React Bootstrap
          </Navbar.Brand>
        </Navbar>
      </>
    );
  }
}
export default Nav;
