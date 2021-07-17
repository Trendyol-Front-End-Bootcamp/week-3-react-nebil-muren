import { responeStatusHandler } from "utils/commonUtils";

export const getAllCharacters = (criteria) => {
  return fetch(`https://rickandmortyapi.com/api/character/${criteria}`)
    .then(responeStatusHandler)
    .then((jsonData) => jsonData)
    .catch(console.error);
};

export const getCharacterById = (criteria) => {
  return fetch(`https://rickandmortyapi.com/api/character/${criteria}`)
    .then(responeStatusHandler)
    .then((jsonData) => jsonData)
    .catch(console.error);
};

export const getChainQuery = (api) => {
  return fetch(api)
    .then(responeStatusHandler)
    .then((jsonData) => jsonData)
    .catch(console.error);
};
