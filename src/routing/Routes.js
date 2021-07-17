import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CharacterDetail from "views/content/CharacterDetail";
import CharacterFavorites from "views/content/CharacterFavorites";
import CharacterSearchList from "views/content/CharacterSearchList";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <CharacterSearchList />
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
