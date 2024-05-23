import styles from '../sections/Navbar.module.css'
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import NavLink from 'react-bootstrap/esm/NavLink';

function Navbar() {
    return (
        <div className={styles.navbar}>
            
                <ul>
                    <li><NavLink href='#Presentation'>Apresentação</NavLink></li>
                    <li><NavLink href='#Projects'>Tecnologias</NavLink></li>
                    <li><NavLink href='#About'>Sobre mim</NavLink></li>
                </ul>

                <ul>
                
                    <a href='https://www.linkedin.com/in/patrick-moraes-477a7b308/' ><li><FaLinkedin size={50}></FaLinkedin></li></a>
                    <a href='https://github.com/PatrickSergio'><li><FaGithub size={50}></FaGithub></li></a> 
                </ul>
        
            
        </div>
        
    )
}

export default Navbar    