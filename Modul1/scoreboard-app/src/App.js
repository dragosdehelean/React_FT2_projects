import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Player from "./components/Player";

class App extends Component {
  state = {
    players: [
      { name: "Mario", id: 0 },
      { name: "Alex", id: 1 },
      { name: "Andrei", id: 2 }, 
      { name: "Ioana", id: 3 },
      { name: "Gabriel", id: 4}
    ]
  };

  render() {
    return (
      <div className="scoreboard">
        <Header titlu="Scoreboard" totalPlayers={this.state.players.length} />
        { 
          this.state.players.map(item => (
            <Player key={item.id.toString()} name={item.name} />
          ))   
        }
      </div>
    );
  }
}

export default App;
