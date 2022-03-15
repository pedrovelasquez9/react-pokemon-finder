import React from "react";
import "./PokemonList.css";
import ListItem from "../ListItem/ListItem";

const PokemonList = ({ data }) => {
  const returnDataToDisplay = (arr) => {
    return arr.map((item, index) => {
      return <ListItem key={index} value={item}></ListItem>;
    });
  };

  return (
    <section className="data-section">
      <ul className="main-ul">{returnDataToDisplay(data)}</ul>
    </section>
  );
};

export default PokemonList;
