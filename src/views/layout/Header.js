import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import { Link, useHistory, useLocation } from "react-router-dom";

import logoAlt from "assets/img/logo-alternative.png";
import { MainContext } from "store/MainStore";
import { CLEAR_JOKER } from "contants/listContants";

const Header = () => {
  const store = useContext(MainContext);
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Container fluid>
      <div className="d-flex justify-content-center my-4">
        <Link
          to="/"
          onClick={() => {
            store.setValue("searchKey", "");
            store.setValue("apiFilters", {
              gender: CLEAR_JOKER,
              status: CLEAR_JOKER,
            });
            history.push(pathname);
          }}
        >
          <img src={logoAlt} alt="logo" height="100" />
        </Link>
      </div>
    </Container>
  );
};
export default Header;
