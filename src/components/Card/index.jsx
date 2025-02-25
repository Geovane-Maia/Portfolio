import styles from '../Card/Card.module.css'
import { FaHtml5 } from "react-icons/fa6";
import { IoLogoCss3 } from "react-icons/io";
import { FaJsSquare, FaReact, FaNode } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { Link } from 'react-router-dom';
function Card({name, description, html_url }){
    return(
        <section className={styles.card}>
            <h3>{name}</h3>
            <p>{description}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 className={styles.icone}/>
                    <IoLogoCss3 className={styles.icone}/>
                    <FaJsSquare className={styles.icone}/>
                    <FaReact className={styles.icone}/>
                    <FaNode className={styles.icone}/>
                    <SiMysql className={styles.icone}/>
                </div>
                <a href={html_url} target='_blank' rel='noopenner norefferer' className={styles.botao}>
                    <BsArrowRight />
                </a>
            </div>
        </section>
    )

}
export default Card;