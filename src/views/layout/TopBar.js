import React, { useContext } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";
import { Link, useHistory, useLocation } from "react-router-dom";

import { MainContext } from "store/MainStore";
import {
  GENDER_LIST,
  ITEM_PER_PAGE_LIST,
  STATUS_LIST,
} from "contants/listContants";
import DropdownCard from "components/DropdownCard";
import SearchBox from "components/SearchBox";
import favoriteFilled from "assets/img/favorite-filled-icon.png";
import leftIcon from "assets/img/left-icon.png";
import doubleLeftIcon from "assets/img/double-left-icon.png";
import remove from "assets/img/remove-icon.png";

const TopBar = () => {
  const store = useContext(MainContext);
  const { pathname } = useLocation();
  const history = useHistory();

  return (
    <Row className="pt-3 gap-2">
      <Col md={12} lg={6} className="h-100 d-flex gap-2">
        <Link
          to="/"
          className="btn topbar-button"
          onClick={() => {
            history.push(pathname);
          }}
        >
          <img src={doubleLeftIcon} alt="go main" width="30" className="mx-1" />
          <span>Go to main</span>
        </Link>

        <div
          className="btn topbar-button"
          onClick={() => {
            history.goBack();
            history.push(pathname);
          }}
        >
          <img src={leftIcon} alt="go back" width="30" className="mx-1" />
          <span>Go back</span>
        </div>

        {pathname !== "/myCharacters" ? (
          <Link
            to="/myCharacters"
            className="btn topbar-button"
            onClick={() => {
              history.push(pathname);
            }}
          >
            <img src={favoriteFilled} alt="my characters" width="30" />{" "}
            <span>My Characters</span>
          </Link>
        ) : (
          store.favoriteCharacters.length > 0 && (
            <div onClick={store.clearFavorites} className="btn topbar-button">
              <img src={remove} alt="clear favorites" width="30" />{" "}
              <span>Clear all</span>
            </div>
          )
        )}
      </Col>
      <Col className="d-flex flex-column gap-2">
        <div className="d-flex justify-content-end gap-2">
          <DropdownCard
            className="p-2"
            text="Items:"
            value={store.itemPerPage}
            itemList={ITEM_PER_PAGE_LIST}
            onClick={(event) => {
              store.setValue("itemPerPage", event.target.innerText);
            }}
          />
          <SearchBox
            className="p-2"
            onSearchChanged={(searchKey) => {
              store.setValue("searchKey", searchKey);
            }}
            value={store.searchKey}
            placeholder="Search"
          />
        </div>
        <div className="d-flex justify-content-end gap-2">
          <DropdownCard
            className="p-2"
            text="Gender:"
            value={store.apiFilters.gender}
            itemList={GENDER_LIST}
            onClick={(event) => {
              store.setObjectValue(
                "apiFilters",
                "gender",
                event.target.innerText
              );
            }}
          />
          <DropdownCard
            className="p-2"
            text="Status:"
            value={store.apiFilters.status}
            itemList={STATUS_LIST}
            onClick={(event) => {
              store.setObjectValue(
                "apiFilters",
                "status",
                event.target.innerText
              );
            }}
          />
        </div>
      </Col>
    </Row>
  );
};
export default observer(TopBar);
