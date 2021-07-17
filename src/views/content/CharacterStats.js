import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import { MainContext } from "store/MainStore";
import FavoriteIcon from "components/FavoriteIcon";

const CharacterStats = ({ character = {}, characterVariant }) => {
  const store = useContext(MainContext);

  return (
    <Card className="w-100 mt-3">
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-end">
          <span className="text-muted text-medium mx-1 ">
            {`#${character.id.toString().padStart(3, 0)}`}
          </span>
          <h4 className="mb-0 h-100 ">{character.name}</h4>
        </div>
        <FavoriteIcon
          status={store.favoriteCharacters.some(
            (item) => item.id === character.id
          )}
          checkText="Add to favorites"
          onChecked={() => {
            store.addFavorite(character);
          }}
          uncheckText="Remove from favorites"
          onUnchecked={() => {
            store.removeFavorite(character.id);
          }}
        />
      </Card.Header>
      <Card.Body>
        <Row className="d-flex align-items-center">
          <Col sm={12} md={6} lg={4} className="d-flex justify-content-center ">
            <img
              src={character.image}
              alt={character.name || "character image"}
              width="250"
              height="250"
            />
          </Col>
          <Col sm={12} md={6} lg={8} className="d-flex flex-column">
            <span>
              <small>Status: </small>
              {character.status}
            </span>
            <span>
              <small>Species: </small>
              {character.species}
            </span>
            <span>
              <small>Gender: </small>
              {character.gender}
            </span>
            <span>
              <small>Last known location: </small>
              {character.location.name}
            </span>

            <span>
              <small>Last Episodes: </small>
              <ul>
                {character.episodes.map((episode) => (
                  <li key={episode.id}>{episode.name}</li>
                ))}
              </ul>
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};
export default observer(CharacterStats);
