import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from "react-bootstrap/Spinner";

const LoadingSpinner = () => {
  return (
    <Row>
      <Col className="d-flex justify-content-center my-4">
        <Spinner animation="border" role="status" />
      </Col>
    </Row>
  );
};
export default LoadingSpinner;
