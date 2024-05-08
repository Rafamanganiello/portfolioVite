import './Navbar.css'
import { FaGithub } from "react-icons/fa6";
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar(){
    return(
        <div className="nav">
            <ul>
                <li><a target='_blanc' href='https://github.com/Rafamanganiello'><FaGithub size={30}/></a></li>
            </ul>
            <div id='links'>
                <a href="#pjtcts">Projetos</a>
                <a href='#bl'>Blog</a>
                <a href='#footer'>Contato</a>
            </div>
            
        </div>
    )
}

export default Navbar