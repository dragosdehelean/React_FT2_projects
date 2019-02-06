import React from "react";

const Player = (props) => {
  return (
    <div class="player">
      <span class="player-name">
        <button class="remove-player">✖</button>{props.name}
      </span>
      <div class="counter">
        <button class="counter-action decrement">-</button>
        <span class="counter-score">0</span>
        <button class="counter-action increment">+</button>
      </div>
    </div>
  );
};

export default Player;
