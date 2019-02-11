import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import Player from "./components/Player";

class App extends Component {
  state = {
    players: [
      { name: "Mario", id: 0, score:0 },
      { name: "Alex", id: 1 },
      { name: "Andrei", id: 2 }, 
      { name: "Ioana", id: 3 },
      { name: "Gabriel", id: 4}
    ]
  };

  handleScoreChange = (id, direction) => {
    // operatiune de modificare a state-ului
  }

  render() {
    return (
      <div className="scoreboard">
        <Header titlu="Scoreboard" totalPlayers={this.state.players.length} />
        { 
          this.state.players.map(player => (
            <Player key={player.id.toString()} name={player.name} handleScoreChange={this.handleScoreChange}/>
          ))   
        }
      </div>
    );
  }
}

export default App;
