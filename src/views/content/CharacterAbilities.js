import React from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { readableTextFormat } from "utils/commonUtils";

const PokemonAbilities = ({ pokemon = {}, pokemonVariant }) => {
  return (
    <Row className="mt-2 abilities-row">
      <Col sm={12} md={4}>
        <Card className="h-100">
          <Card.Title className="pt-3 px-3">Top Moves</Card.Title>
          <Card.Body>
            <ul>
              {pokemon.moves.slice(0, 4).map(({ move: { name } }) => (
                <li key={name}>{readableTextFormat(name)}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card className="h-100">
          <Card.Title className="pt-3 px-3">Abilities</Card.Title>
          <Card.Body>
            <ul>
              {pokemon.abilities.slice(0, 4).map(({ ability: { name } }) => (
                <li key={name}>{readableTextFormat(name)}</li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={12} md={4}>
        <Card className="h-100">
          <Card.Title className="pt-3 px-3">Characteristics</Card.Title>
          <Card.Body className="d-flex flex-column">
            <span>
              Types:{" "}
              {pokemon.types.map(
                ({ type: { name } }, index) =>
                  `${index > 0 ? ", " : ""}${readableTextFormat(name)}`
              )}
            </span>
            <span>Height: {pokemon.height / 10}m</span>
            <span>Weight: {pokemon.weight / 10}kg</span>
            <span>
              Forms:{" "}
              {pokemon.forms.map(
                ({ name }, index) =>
                  `${index > 0 ? ", " : ""}${readableTextFormat(name)}`
              )}
            </span>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};
export default PokemonAbilities;
