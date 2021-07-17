import React, { useContext, useMemo, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { isArrayContains, keyGenerator } from "utils/commonUtils";
import Pagination from "components/Pagination";
import CharacterCard from "views/content/CharacterCard";
import { MainContext } from "store/MainStore";

const CharacterFavorites = () => {
  const [active, setActive] = useState(1);
  const store = useContext(MainContext);

  const filteredData = useMemo(
    () =>
      store.favoriteCharacters.filter(({ name, id }) =>
        isArrayContains(store.searchKey, [name, id])
      ),
    [store.searchKey, store.favoriteCharacters]
  );

  return (
    <>
      <Row>
        {filteredData.length > 0 ? (
          filteredData
            .slice((active - 1) * store.itemPerPage, active * store.itemPerPage)
            .map((item) => (
              <CharacterCard character={item} key={item.id || keyGenerator()} />
            ))
        ) : (
          <Col className="mt-4">No favorites yet...</Col>
        )}
      </Row>

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

export default observer(CharacterFavorites);
