import { Link } from "react-router-dom"
import { Nav, Navbar, Container } from "react-bootstrap"


const NavOfThrones = ({ characters, setSearchResults }) => {

  return (
    <>
        <Navbar className="NavOfThrones" bg="danger" data-bs-theme="dark">
            <Container className="d-flex justify-content-center">
                <Navbar.Brand as={Link} to="/">
                <img className="ironThroneNav" src="./src/assets/IronThrone.png" alt="Icon of the Iron Throne"/></Navbar.Brand>
                <Nav className="d-flex justify-content-center">
                    <Nav.Link as={Link} to="/characterPage">Characters</Nav.Link>
                    <Nav.Link as={Link} to="/comingSoon">Coming Soon!</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    </>
  )
}

export default NavOfThrones
