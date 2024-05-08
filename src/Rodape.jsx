import './Rodape.css'
import { FaFacebookSquare, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Rodape(){
    return(
        <div className='rodape' id='footer'>
            <ul>
                <li><a target='_blanc' href='https://www.facebook.com/rafael.francamanganiello/'><FaFacebookSquare size={30}/></a></li>
                <li><a target='_blanc' href='https://www.instagram.com/rafamanganiello/'><FaInstagram size={30}/></a></li>
                <li><a target='_blanc' href='https://twitter.com/ManganielloRafa'><FaXTwitter size={30}/></a></li>
                <li><a target='_blanc' href='https://www.linkedin.com/in/rafael-manganiello-594600295/'><FaLinkedin size={30}/></a></li>
            </ul>
            <p>Rafael Manganiello ©2024 All rights reserved</p>
        </div>
    )
}

export default Rodape