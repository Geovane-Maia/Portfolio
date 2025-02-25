
import { Link } from 'react-router-dom'
import styles from './Home.module.css'
function Home(){
    return(
        <>

        <section className={styles.home}>
          <div className={styles.apresetacao}>
            <p>
              Olá, Sou <br />
              <span>Geovane Maia</span><br />
              Dev Full Stack
            </p>
            <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}` }>
              Saiba Mais Sobre Mim
            </Link>
          </div>
          <figure>
            <img src="/imagem.svg" alt="imagem principal" className={styles.img_home} />
          </figure>
        </section>
      </>
   
    )
}
export default Home