import { Header } from './components/Header'
import { Tarefa } from './components/Tarefa'
import { ContadorDeTarefas } from './components/ContadorDeTarefas'



import './global.css'
import { TarefaCriada } from './components/TarefaCriada'


function App() {
  return (
    <div>
      <Header />
      <Tarefa />
      <ContadorDeTarefas />
      <TarefaCriada />
    </div>
  )
}

export default App
