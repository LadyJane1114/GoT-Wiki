import CharacterDetails from "./CharacterDetails" 
import Searchbar from "./Searchbar"

const CharacterList = ({characters, setSearchResults, searchResults}) => {
    const results = searchResults.map(character => <CharacterDetails key={character.id} character={character}/>)
    const content = results?.length ? results : <article><p>The Maesters could not find that information within their texts...</p></article>


  return (
    <>
    <Searchbar characters={characters} setSearchResults={setSearchResults}/>
    {content}
    </>
  )
}

export default CharacterList