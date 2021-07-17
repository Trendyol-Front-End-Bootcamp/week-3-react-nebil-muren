import React, { useContext } from "react";
import { observer } from "mobx-react-lite";

import CharacterList from "views/content/CharacterList";
import CharacterSearchList from "views/content/CharacterSearchList";
import { MainContext } from "store/MainStore";

const CharacterListContainer = () => {
  const store = useContext(MainContext);

  return store.searchKey ? <CharacterSearchList /> : <CharacterList />;
};

export default observer(CharacterListContainer);
