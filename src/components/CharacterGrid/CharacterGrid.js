import React from "react";
import "./CharacterGrid.css";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterGrid = ({ isLoading, data }) => {
  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {data.map(
        (element) =>
          element.char_id !== 39 && (
            <div key={element.char_id}>
              <CharacterCard card={element} />
            </div>
          )
      )}
    </section>
  );
};

export default CharacterGrid;
