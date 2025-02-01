import styles from './TarefaCriada.module.css'
import excluir from '../assets/trash.svg'
import { useState } from 'react'


export function TarefaCriada({ id, descricao, atualizarConcluidas, removerTarefa }) {
    const [tarefaConcluida, setTarefaConcluida] = useState(false);

    function handleChecked(event) {
        const isChecked = event.target.checked;
        setTarefaConcluida(isChecked);
        atualizarConcluidas(isChecked);
    }

    function handleExcluir() {
        removerTarefa(id, tarefaConcluida);
    }

    return (
        <div className={styles.container}>
            <div>
                <input 
                    type="checkbox" 
                    className={styles.marcacao} 
                    onChange={handleChecked}
                    checked={tarefaConcluida}
                />
            </div>
            <main>
                <span className={tarefaConcluida ? styles.concluida : ""}>
                    {descricao}
                </span>
            </main>
            <div>
                <img 
                    src={excluir}  
                    className={styles.excluir} 
                    alt="Imagem de para exclusão da tarefa" 
                    onClick={handleExcluir}
                />
            </div>
        </div>
    );
}
