import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { SiMysql } from "react-icons/si";
import styles from './Sobre.module.css'
import avatar from './imagens/eu.png'
function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt="imagem" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span className={styles.spa}>Geovane Maia </span><br />
                        <strong>Dev Full Stack.</strong></p>

                    <p>Trabalho com desenvolvimento desde 2023.</p>
                    <p>Sou apaixonado por transformar ideias em realidade digital.</p>
                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                        Com foco na expereiência do Usuário.</p>
                </div>
            </div>

            <div className={styles.tech}>
                <h3>Techs</h3>
                <FaHtml5 className={styles.icone}/>
                <IoLogoCss3 className={styles.icone}/>
                <FaJsSquare className={styles.icone}/>
                <FaReact className={styles.icone}/>
                <FaNode className={styles.icone}/>
                <SiMysql className={styles.icone}/>
            </div>
        </section>
    )
}
export default Sobre