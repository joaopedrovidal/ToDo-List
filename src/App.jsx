import { Header } from './components/Header'
import { Conteudo } from './components/Conteudo'
import { Input } from './components/Input'
import styles from './App.module.css'
import './global.css'
import { useState } from 'react'

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [tarefasConcluidas, setTarefasConcluidas] = useState(0);

  function adicionarTarefa(descricao) {
    const novaTarefa = {
      id: tarefas.length + 1,
      descricao
    };
    setTarefas([...tarefas, novaTarefa]);
  }

  function removerTarefa(id, concluida) {
    setTarefas((prevTarefas) => prevTarefas.filter(tarefa => tarefa.id !== id));

    // Se a tarefa estava concluída, decrementa o contador
    if (concluida) {
      setTarefasConcluidas((prev) => Math.max(0, prev - 1));
    }
  }

  function atualizarConcluidas(concluida) {
    setTarefasConcluidas((prev) => (concluida ? prev + 1 : prev - 1));
  }

  return (
    <div>
      <Header />
      <main>
        <Input onAdicionartarefa={adicionarTarefa} />
        <div className={styles.caixaCentral}>
          <Conteudo 
            tarefas={tarefas} 
            setTarefas={setTarefas}
            removerTarefa={removerTarefa}
            tarefasConcluidas={tarefasConcluidas}
            atualizarConcluidas={atualizarConcluidas}
          />
        </div>
      </main>
    </div>
  );
}


export default App;