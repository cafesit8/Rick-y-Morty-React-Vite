import {createContext, useEffect, useState} from 'react'

export const CharacterDetails = createContext()

export const CharacterDetailsProvider=(props)=>{

    const [character, setCharacter] = useState({})

    useEffect(()=>{
        const characterItem = JSON.parse(localStorage.getItem('character'))
        setCharacter(characterItem)
    }, [])

    return(
        <CharacterDetails.Provider value={{
            character,
            setCharacter
        }}>
            {props.children}
        </CharacterDetails.Provider>
    )

}