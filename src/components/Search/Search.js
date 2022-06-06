import React, { useState } from "react";
import "../Search/Search.css";

const Search = ({ getQuery }) => {
  const [userInput, setUserInput] = useState("");
  const handleInput = (event) => {
    setUserInput(event.target.value);
    getQuery(event.target.value);
  };
  return (
    <section className="search">
      <form>
        <input
          type="text"
          className="search-input"
          placeholder="Search characters"
          value={userInput}
          onChange={handleInput}
        />
      </form>
    </section>
  );
};

export default Search;
