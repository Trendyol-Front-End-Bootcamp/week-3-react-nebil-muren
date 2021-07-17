import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { reaction } from "mobx";

import Routes from "routing/Routes";
import Header from "views/layout/Header";
import Footer from "views/layout/Footer";
import TopBar from "views/layout/TopBar";
import MainStore, { MainProvider } from "store/MainStore";

function App() {
  const storedFavoriteCharacters =
    JSON.parse(localStorage.getItem("favoriteCharacters")) || [];
  const store = new MainStore({ storedFavoriteCharacters });

  reaction(
    () => JSON.stringify(store.favoriteCharacters),
    (favoriteCharacters) => {
      localStorage.setItem("favoriteCharacters", favoriteCharacters);
    }
  );

  return (
    <MainProvider store={store}>
      <Router>
        <Header />
        <div className="content">
          <Container className="pb-3">
            <TopBar />
            <Routes />
          </Container>
        </div>
        <Footer />
      </Router>
    </MainProvider>
  );
}

export default App;
