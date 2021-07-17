import React from "react";
import Card from "react-bootstrap/Card";
import { Link, useHistory, useLocation } from "react-router-dom";

const StyledCard = ({
  url = "",
  title = "",
  gender = "",
  type = "",
  status = "",
  image = "",
  location = "",
  text = "",
}) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Link
      to={url}
      onClick={() => {
        history.push(pathname);
      }}
    >
      <Card className="h-100">
        <Card.Img
          variant="top"
          src={image}
          className="pt-2 align-self-center sized-img"
        />
        <Card.Body>
          <Card.Title className="mb-3">
            <span className="text-muted text-medium mx-1 ">{text}</span>
            {title}
          </Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {status} ~ {type}
          </Card.Subtitle>
          <Card.Text className="d-flex flex-column">
            <small>Gender: </small>
            {gender}
            <small>Last known location: </small>
            {location}
          </Card.Text>
        </Card.Body>
      </Card>
    </Link>
  );
};

export default StyledCard;
