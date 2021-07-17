import React from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Link, useHistory, useLocation } from "react-router-dom";

import search from "assets/img/search-alternative-icon.png";

const SearchBox = ({
  className = "",
  placeholder = "",
  baseUrl = "/",
  value = "",
  onSearchChanged = () => {},
}) => {
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Card className={className}>
      <Card.Body className="p-0">
        <InputGroup className="custom-searcbox">
          <Form.Control
            type="search"
            placeholder={placeholder}
            autoComplete="off"
            spellCheck="false"
            value={value}
            onChange={(event) => {
              onSearchChanged(event.target.value);
            }}
          />
          <InputGroup.Append>
            <Link
              to={`${baseUrl}`}
              className="h-100"
              onClick={() => {
                history.push(pathname);
              }}
            >
              <img src={search} alt="search" width="24" height="24" />
            </Link>
          </InputGroup.Append>
        </InputGroup>
      </Card.Body>
    </Card>
  );
};
export default SearchBox;
