import React, { useEffect } from "react";
import Character from "./Character";

export default function ContentCharacters({
  setFilterCharacter,
  filterCharacter,
  findCharacter,
  character,
}) {
  useEffect(() => {
    const fecthCharacter = async () => {
      const url = await fetch(
        `https://rickandmortyapi.com/api/character/?name=${character}`
      );
      const data = await url.json();
      setFilterCharacter(data.results);
    };
    fecthCharacter();
  }, [findCharacter]);

  return (
    <div className="w-[1000px] mt-7 flex flex-wrap gap-10 justify-center max-[1000px]:w-[100%] max-[550px]:gap-5">
      {typeof filterCharacter === "undefined" ? (
        <h1 className="text-[20px]">Personaje no encontrado</h1>
      ) : (
        filterCharacter.map((item) => <Character key={item.id} item={item} />)
      )}
    </div>
  );
}
