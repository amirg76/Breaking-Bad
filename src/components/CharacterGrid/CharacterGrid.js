import "./CharacterGrid.css";
import CharacterCard from "../CharacterCard/CharacterCard";

const CharacterGrid = ({ data }) => {
  return (
    <>
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
    </>
  );
};

export default CharacterGrid;
