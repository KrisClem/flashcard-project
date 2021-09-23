import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Home } from "./Home";
import { CreateDeck } from "../Decks/CreateDeck";
import { Switch, Route } from "react-router";
import { Deck } from "../Decks/Deck";
import { EditDeck } from "../Decks/EditDeck";
import { Study } from "../Decks/Study";
import { AddCard } from "../Cards/AddCard";
import { EditCard } from "../Cards/EditCard";


function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route>
        <NotFound />
        </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
