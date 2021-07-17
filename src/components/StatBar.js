import React from "react";
import ProgressBar from "react-bootstrap/ProgressBar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const StatBar = ({ value = 0, title = "", variant }) => {
  return (
    <Row className="align-items-center">
      <Col md={12} lg={4} xl={3}>
        {title}
      </Col>
      <Col md={12} lg={8} xl={9}>
        <ProgressBar now={value} label={value} variant={variant} />
      </Col>
    </Row>
  );
};
export default StatBar;
