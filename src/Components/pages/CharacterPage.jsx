import CharacterList from "../CharacterList"
import Searchbar from "../Searchbar"
import NavOfThrones from "../NavOfThrones"


const CharacterPage = ({characters, setSearchResults, searchResults}) => {
  return (
    <>
    <CharacterList characters={characters} setSearchResults={setSearchResults} searchResults={searchResults}/>
    </>
  )
}

export default CharacterPage