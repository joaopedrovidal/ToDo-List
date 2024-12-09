import styles from './TarefaCriada.module.css'
import excluir from '../assets/trash.svg'


export function TarefaCriada(){
    return(
        <div className={styles.container}>
            <div>
                <input type="checkbox" className={styles.marcacao} />
            </div>
                <span className={styles.conteudo}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</span>
            <div>
                <img src={excluir}  className={styles.excluir} alt="Imagem de para exclusão da tarefa" />
            </div>
        </div>
    )
}