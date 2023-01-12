import React, { useState, useEffect } from "react";

export default function Api() {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div>
      <h1>Name: {data.name}</h1>
      <h3>Moves:</h3>
      <ul>{data.moves && data.moves.map((move) => <li>{move}</li>)}</ul>
    </div>
  );
}
