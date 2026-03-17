import { Link } from "react-router-dom"
import NavOfThrones from "./NavOfThrones"


const Footer = () => {
  return (
    <>
    <footer className="footer">
        <div className="copyright">&copy; Jane Scott 2025</div>
        <Link as={Link} to="/characterPage" className="footerLink">Characters</Link>
        {/* <Link as={Link} to="/houseList">Houses - Coming Soon!</Link> */}
    </footer>
    </>
  )
}

export default Footer