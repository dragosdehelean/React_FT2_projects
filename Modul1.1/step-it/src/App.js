import React, { Component } from "react";
import logo from "./logo.svg";
import Header from "./components/Header";
import "./App.css";
import Player from "./components/Player";

class App extends Component {
  state = {
    players: [{ name: "Mario", id: 0 }, { name: "Alex", id: 1 }, { name: "Andrei", id: 2 }]
  };

  render() {
    const jucatori = this.state.players.map(item => {
      return (
        <Player name={item.name} />
      );
    });

    return (
      <div class="scoreboard">
        <Header title="Titlul meu" />

        {jucatori}
      </div>
    );
  }
}

export default App;
