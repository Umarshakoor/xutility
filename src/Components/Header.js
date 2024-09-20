import React from "react";

function Header(Props) {
  console.log(Props);
  return (
    <h1>
      Hello there indeed, {Props.name}, {Props.color}
    </h1>
  );
}

export default Header;
