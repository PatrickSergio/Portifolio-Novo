
import styles from "./Footer.module.css";
import { FaGithub, FaLinkedin, FaFigma } from "react-icons/fa"; // Using react-icons for the icons

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contact}>
        <div className={styles.contactItem}>
          <span>Meu contato:</span><br/>
          <span>(98) 98471-1005</span>
        </div>
        <div className={styles.contactItem}>
          <span>Email:</span><br/>
          <span>sicck3@hotmail.com</span>
        </div>
      </div>
      <div className={styles.socials}>
        <a href="https://github.com/PatrickSergio" className={styles.icon} aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/patrick-moraes-477a7b308/" className={styles.icon} aria-label="LinkedIn">
          <FaLinkedin />
        </a>
        <a href="https://figma.com" className={styles.icon} aria-label="Figma">
          <FaFigma />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
