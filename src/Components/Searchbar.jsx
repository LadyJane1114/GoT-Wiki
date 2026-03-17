import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"
import { Form, InputGroup, Button } from "react-bootstrap";


const Searchbar = ({characters, setSearchResults}) => {
    const handleSubmit = (e) => e.preventDefault()

    const searchFields = ['firstName', 'lastName', 'fullName', 'title', 'family']

    const handleSearchChange = (e) => {
      if (!e.target.value) return setSearchResults(characters)

        const resultsArray = characters.filter(character => {
          const searchWords = e.target.value.toLowerCase().split(' ').filter(Boolean);
        
          return searchWords.every(word =>
            searchFields.some(field =>
              character[field]?.toLowerCase().includes(word)
            )
          );
        });
        setSearchResults(resultsArray);
    }

  return (
    <>
      <Form className="search d-flex justify-content-center" onSubmit={handleSubmit}>
        <InputGroup className="searchInput">
          <Form.Control
            type="text"
            id="search"
            onChange={handleSearchChange}
            placeholder="Search Characters..."
            aria-label="Search Characters"
            className="searchInputField"
          />
          <Button variant="outline-danger" className="searchBtn">
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </Button>
        </InputGroup>
      </Form>
    </>
  )
}

export default Searchbar