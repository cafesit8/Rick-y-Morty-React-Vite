import React from "react";

export default function Form({ setFindCharacter, setCharacter, character }) {
  function handleSubmit(e) {
    e.preventDefault();
    setFindCharacter(character);
  }

  function handleInput(e) {
    setCharacter(e.target.value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleInput}
        className="py-1 px-3 rounded-lg w-[250px]"
        placeholder="Buscar personaje"
        type="text"
      />
    </form>
  );
}
