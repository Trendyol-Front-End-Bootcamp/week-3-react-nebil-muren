import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getChainQuery, getCharacterById } from "service/characters";
import CharacterStats from "views/content/CharacterStats";
import LoadingSpinner from "components/LoadingSpinner";

const CharacterDetail = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [character, setCharacter] = useState({});
  const { characterId } = useParams();

  useEffect(() => {
    if (characterId) {
      getCharacterById(characterId).then((res) => {
        const episodePromise = res.episode
          .slice(Math.max(res.episode.length - 5, 0))
          .map(
            (episode) =>
              new Promise((resolve) => {
                getChainQuery(episode).then((res) => {
                  resolve(res);
                });
              })
          );

        Promise.all(episodePromise)
          .then((episodeData) => {
            res.episodes = episodeData.map((item) => ({
              name: item.name,
              id: item.id,
            }));

            setCharacter(res);
            setIsLoading(false);
          })
          .catch(console.error);
      });
    }
  }, [characterId]);

  return isLoading ? (
    <LoadingSpinner />
  ) : (
    <CharacterStats character={character} />
  );
};

export default CharacterDetail;
