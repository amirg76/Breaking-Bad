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
            <>
              <CharacterCard key={element.char_id} card={element} />
            </>
          )
      )}
    </section>
  );
};

export default CharacterGrid;
