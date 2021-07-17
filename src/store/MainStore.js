import React, { createContext } from "react";
import { makeAutoObservable } from "mobx";
import { CLEAR_JOKER } from "contants/listContants";

export const MainContext = createContext(null);

export const MainProvider = ({ store, children }) => (
  <MainContext.Provider value={store}>{children}</MainContext.Provider>
);
class MainStore {
  //#region observable
  itemPerPage = 12;

  searchKey = "";

  apiFilters = { gender: CLEAR_JOKER, status: CLEAR_JOKER };

  favoriteCharacters = [];
  //#endregion observable

  constructor({ storedFavoriteCharacters }) {
    this.favoriteCharacters = storedFavoriteCharacters;
    makeAutoObservable(this);
  }

  //#region action
  setValue = (key, value) => {
    this[key] = value;
  };

  setObjectValue = (objKey, key, value) => {
    this[objKey][key] = value;
  };

  addFavorite = (character) => {
    this.favoriteCharacters.push(character);
  };

  removeFavorite = (id) => {
    this.favoriteCharacters = this.favoriteCharacters.filter(
      (character) => character.id !== id
    );
  };

  clearFavorites = () => {
    this.favoriteCharacters = [];
  };
  //#endregion action
}
export default MainStore;
