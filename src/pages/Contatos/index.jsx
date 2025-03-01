import { FiGithub } from "react-icons/fi";
import { GoMail } from "react-icons/go";
import { LuInstagram } from "react-icons/lu";
import { SlSocialLinkedin } from "react-icons/sl";
import styles from "./Contatos.module.css";
function Contatos() {
  return (
    <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>
        <h3>Entre em contato</h3>
        <p>Para que possamos conversar mais sobre.</p>
        <section className={styles.container}>
          <div className={styles.icones}>
            <a
              href="mailto:dartanha272@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GoMail className={styles.iconeG} />
            </a>
          </div>
          <div className={styles.icones}>
            <a
              href="https://www.instagram.com/geovane__maia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LuInstagram className={styles.icone} />
            </a>
          </div>
          <div className={styles.icones}>
            <a
              href="https://www.github.com/geovane-maia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiGithub className={styles.icone} />
            </a>
          </div>
          <div className={styles.icones}>
            <a
              href="https://www.linkedin.com/geovanemaia"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialLinkedin className={styles.icone} />
            </a>
          </div>
        </section>
      </section>
    </>
  );
}
export default Contatos;
