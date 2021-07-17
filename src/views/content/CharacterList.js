import React, { useContext, useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { getAllCharacters } from "service/characters";
import { keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import CharacterCard from "views/content/CharacterCard";
import { MainContext } from "store/MainStore";
import LoadingSpinner from "components/LoadingSpinner";
import { QUERY_LIMIT } from "contants/listContants";

const CharacterList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [active, setActive] = useState(1);
  const store = useContext(MainContext);

  useEffect(() => {
    setIsLoading(true);
    getAllCharacters([...Array(QUERY_LIMIT).keys()].map((item) => ++item)).then(
      (res) => {
        setData(res);
        setTotalCount(res.length);
        setIsLoading(false);
      }
    );
  }, [active]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Row>
          {data.length > 0 ? (
            data
              .slice(
                (active - 1) * store.itemPerPage,
                active * store.itemPerPage
              )
              .map((item) => (
                <CharacterCard
                  character={item}
                  key={item.id || keyGenerator()}
                />
              ))
          ) : (
            <Col className="mt-4">No data found...</Col>
          )}
        </Row>
      )}

      {totalCount > 0 && Math.ceil(totalCount / store.itemPerPage) > 1 && (
        <Row>
          <Col className="d-flex justify-content-center mt-4">
            <Pagination
              active={active}
              total={totalCount}
              dataPerPage={store.itemPerPage}
              onChange={setActive}
            />
          </Col>
        </Row>
      )}
    </>
  );
};

export default observer(CharacterList);
