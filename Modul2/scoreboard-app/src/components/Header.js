import React from "react";

const Header = (props) => {
  console.log("haideti sa studiem putin obiectul props  ")
  console.dir(props);

  return (
    <header>     
      <h1>{ props.titlu }</h1>
      <span className="stats">Players: {props.totalPlayers}</span>
    </header>
  );
};

export default Header;
