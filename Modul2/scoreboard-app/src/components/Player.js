import React from "react";
import Counter from "./Counter";

const Player = (props) => {
  return (
    <div className="player">
      <span className="player-name">
        <button className="remove-player">✖</button>{props.name}
      </span>
      <Counter handleScoreChange={props.handleScoreChange}/>
    </div>
  );
};

export default Player;
