import { useState } from 'react';
import styles from './Header.module.css';
import {Link} from 'react-router-dom';
function Header(){

    const [showMenu, setShowMenu] = useState(false)
    const togleMenu = () => {
        setShowMenu(!showMenu)
    }


    // opcoes da tag nav para habilitar o menu sanduiche 
    // className={`${styles.menuSandwich} ${showMenu ? styles.show : ''}`}
    return(
        <header className={styles.header}>
            <Link to='/'>
            <span>Geovane Maia.dev</span>
            </Link>
            <nav className={`${styles.menuSandwich} ${showMenu ? styles.show : ''}`} 
            onClick={togleMenu}>
                <Link to="/">Home</Link>
                <Link to="/sobre">Sobre</Link>
                <Link to="/projetos">Projetos</Link>
                <Link to="/contatos">Contatos</Link>
            </nav>
            <div className={styles.menuButton}
                 onClick={togleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </header>
    )
}
export default Header