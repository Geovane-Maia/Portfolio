import { useEffect, useState } from "react";
import Card from "../../components/Card"
import styles from "../Projetos/Projetos.module.css";

function Projetos(){

  const [repositories, setRepositories] = useState([])

  useEffect(() =>{
    const buscarRepositorios = async () => {
      const response = await fetch('https://api.github.com/users/geovane-maia/repos?page=1$per_page=50')
      const data = await response.json()
      setRepositories(data)
    }
    buscarRepositorios()
  },[])
    return (
      <section className={styles.projetos}>
        <h2>Projetos</h2>
       {
        repositories.length > 0 ? (
          <div className={styles.cards}>
           {
            repositories.map((repo) => (
              <Card
                key={repo.id}
                name={repo.name}
                description={repo.description}
                html_url={repo.html_url}
                
              />
            ))
 
           }
          
          </div>
        ) : (
          <p>Carregando projetos...</p>
        )
       }
        </ section>
    )
}
export default Projetos