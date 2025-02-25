
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import { LuInstagram } from "react-icons/lu";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
function Contatos(){
    return (
       
      <>

        <section className={styles.contatos}>
          <h2>Contatos</h2>
          <h3>Entre em contato</h3>
          <p>Para que possamos conversar mais sobre.</p>
          <div className={styles.icones}>
            <a href="mailto:dartanha272@gmail.com" target="_blank" rel="noopener noreferrer">
            <GoMail className={styles.icone} />
            </a>
            <a href="https://www.instagram.com/geovane__maia" target="_blank" rel="noopener noreferrer">
            <LuInstagram className={styles.icone} />
            </a>
            <a href="https://www.github.com/geovane-maia" target="_blank" rel="noopener noreferrer">
            <FiGithub className={styles.icone} />
            </a>
            <a href="https://www.linkedin.com/geovanemaia" target="_blank" rel="noopener noreferrer">
            <SlSocialLinkedin className={styles.icone} />
            </a>
          </div>

        </section>
        </>
    )
}
export default Contatos