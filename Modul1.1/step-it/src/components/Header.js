import React from "react";

const Header = (props) => {
  return (
    <header>
      <h1>{props.title}</h1>
      <span class="stats">Players: 4</span>
    </header>
  );
};

export default Header;
