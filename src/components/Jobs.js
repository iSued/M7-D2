import React, { Component } from "react";
import { Card, Row, Col, Image } from "react-bootstrap";

import { Button } from "@material-ui/core";

class Jobs extends Component {
  render() {
    return this.props.jobs.length > 0 ? (
      <Row className="row-cols-1" text-center>
        {this.props.jobs.map((job) => {
          return (
            <Col className="mx-3 mb-3 " key={job.id}>
              <Row>
                <Col className="d-flex justify-content-center align-items-center col-3">
                  <Image
                    src={`${job.company_logo}`}
                    rounded
                    style={{ width: "100%" }}
                  />
                </Col>
                <Col className="d-flex justify-content-center align-items-center col-9">
                  <Card style={{ width: "100%" }}>
                    <Card.Header as="h5">{job.company}</Card.Header>
                    <Card.Body>
                      <Card.Title>{job.title}</Card.Title>
                      <Card.Text>
                        {job.location}-{job.type}
                      </Card.Text>
                      <Button variant="contained" color="primary">
                        See Details
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
            </Col>
          );
        })}
      </Row>
    ) : (
      <div className="d-flex justify-content-center align-items-center col-12">
        No results
      </div>
    );
  }
}
export default Jobs;
