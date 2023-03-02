import { useState, useEffect } from 'react'
import Form from "../components/Form";
import ContentCharacters from "../components/ContentCharacters";

export function ContainerGlobal() {

    const [character, setCharacter] = useState("");
  const [findCharacter, setFindCharacter] = useState("");
  const [filterCharacter, setFilterCharacter] = useState([]);

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
    <div className="App p-5 text-white">
        <section className="p-5 flex flex-col items-center max-[550px]:p-0">
            <h1 className="text-[40px] mb-5">Rick y Morty</h1>
            <Form
              setFindCharacter={setFindCharacter}
              setCharacter={setCharacter}
              character={character}
            />
            <ContentCharacters
              setFilterCharacter={setFilterCharacter}
              character={character}
              filterCharacter={filterCharacter}
            />
          </section>
    </div>
  )
}
