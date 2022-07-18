//import {ReactComponent as GithubIcon} from 'assets/github.svg';
import './styles.css';
import { Link } from "react-router-dom";


function Navbar() {

  return (
    <ul>
    <li> <Link to="/">Brasileiro</Link></li>
    <li><Link to="/libertadores">Libertadores</Link></li>
    <li><Link to="/sulamericana">Sulamericana</Link></li>
    <li><Link to="/copabrasil">CopaBrasil</Link></li>
    <li><Link to="/serieb">Serie B</Link></li>
    <li style={{float: "right"}}><a href="about.asp">About</a></li>
  </ul>
  );
}

export default Navbar;