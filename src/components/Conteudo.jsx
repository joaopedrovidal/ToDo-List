import styles from "./Conteudo.module.css";
import Clipboard from '../assets/Clipboard.svg';
import { TarefaCriada } from "./TarefaCriada";
import { useState } from "react";

export function Conteudo({ tarefas, setTarefas, removerTarefa, tarefasConcluidas, atualizarConcluidas }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.registro}>
        <div className={styles.criadas}>
          <p>Tarefas criadas</p>
          <span className={styles.contador}>{tarefas.length}</span>
        </div>
        <div className={styles.concluidas}>
          <p>Concluídas</p>
          <span className={styles.contador}>{tarefasConcluidas} de {tarefas.length}</span>
        </div>
      </div>
      <div className={styles.aviso}>
        {tarefas.length === 0 ? (
          <div className={styles.alinhamento}>
            <img src={Clipboard} alt="clipboard" className={styles.clipboard} />
            <strong><span>Você ainda não tem tarefas cadastradas</span></strong>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        ) : (
          tarefas.map((tarefa) => (
            <TarefaCriada 
              key={tarefa.id} 
              id={tarefa.id}
              descricao={tarefa.descricao} 
              atualizarConcluidas={atualizarConcluidas}
              removerTarefa={removerTarefa}
            />
          ))
        )}
      </div>
    </div>
  );
}

