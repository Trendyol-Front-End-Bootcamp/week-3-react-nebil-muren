import React, { useContext, useEffect, useMemo, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { getAllCharacters } from "service/characters";
import { isArrayContains, keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import CharacterCard from "views/content/CharacterCard";
import { MainContext } from "store/MainStore";
import LoadingSpinner from "components/LoadingSpinner";
import { QUERY_LIMIT } from "contants/listContants";

const CharacterSearchList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [active, setActive] = useState(1);
  const store = useContext(MainContext);

  const filteredData = useMemo(
    () =>
      data.filter(({ name, id, gender, species }) =>
        isArrayContains(store.searchKey, [name, id, gender, species])
      ),
    [store.searchKey, data]
  );

  useEffect(() => {
    setIsLoading(true);
    getAllCharacters([...Array(QUERY_LIMIT).keys()].map((item) => ++item)).then(
      (res) => {
        setData(res);
        setIsLoading(false);
      }
    );
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <Row>
          {filteredData.length > 0 ? (
            filteredData
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

      {filteredData.length > 0 &&
        Math.ceil(filteredData.length / store.itemPerPage) > 1 && (
          <Row>
            <Col className="d-flex justify-content-center mt-4">
              <Pagination
                active={active}
                total={filteredData.length}
                dataPerPage={store.itemPerPage}
                onChange={setActive}
              />
            </Col>
          </Row>
        )}
    </>
  );
};

export default observer(CharacterSearchList);
