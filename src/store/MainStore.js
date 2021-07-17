import React, { createContext } from "react";
import { makeAutoObservable } from "mobx";

export const MainContext = createContext(null);

export const MainProvider = ({ store, children }) => (
  <MainContext.Provider value={store}>{children}</MainContext.Provider>
);
class MainStore {
  //#region observable
  itemPerPage = 12;

  searchKey = "";

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
