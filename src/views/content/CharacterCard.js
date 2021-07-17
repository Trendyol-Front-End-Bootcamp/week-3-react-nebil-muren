import React, { useContext } from "react";
import Col from "react-bootstrap/Col";
import { observer } from "mobx-react-lite";

import StyledCard from "components/StyledCard";
import { MainContext } from "store/MainStore";
import FavoriteIcon from "components/FavoriteIcon";

const CharacterCard = ({ character }) => {
  const store = useContext(MainContext);

  return (
    <Col className="mt-3 character-card" xs={12} sm={6} md={4} xl={3}>
      <FavoriteIcon
        className="character-card-favorite"
        status={store.favoriteCharacters.some(
          (item) => item.id === character.id
        )}
        onChecked={() => {
          store.addFavorite(character);
        }}
        onUnchecked={() => {
          store.removeFavorite(character.id);
        }}
      />
      <StyledCard
        url={`/character/${character.id}`}
        title={character.name}
        gender={character.gender}
        type={character.species}
        status={character.status}
        image={character.image}
        location={character.location.name}
        text={`#${character.id.toString().padStart(3, 0)}`}
      />
    </Col>
  );
};

export default observer(CharacterCard);
