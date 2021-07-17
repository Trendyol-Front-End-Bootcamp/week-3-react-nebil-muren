import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CharacterDetail from "views/content/CharacterDetail";
import CharacterFavorites from "views/content/CharacterFavorites";
import CharacterListContainer from "views/content/CharacterListContainer";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <CharacterListContainer />
    </Route>
    <Route path="/character/:characterId">
      <CharacterDetail />
    </Route>
    <Route path="/myCharacters">
      <CharacterFavorites />
    </Route>
    <Redirect to="/" />
  </Switch>
);

export default Routes;
