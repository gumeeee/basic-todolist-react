import { useContext } from "react";
import { StatsCard } from "../StatsCard/StatsCard";
import styles from "./styles.module.scss";
import { TasksContent } from "../../context/TasksContext";

// styles.header
export const Header: React.FC = () => {
  const { tasks } = useContext(TasksContent);

  const totalTasks = tasks.length;
  const totalTasksPending = tasks.reduce((total, task) => {
    if (!task.done) return total + 1;
    return total;
  }, 0);

  const totalTasksDone = totalTasks - totalTasksPending;

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div>
          <h1>MyTodo</h1>

          <span>Bem-vindo, Guilherme!</span>
        </div>

        <div>
          <StatsCard title="Total de Tarefas" value={totalTasks} />
          <StatsCard title="Tarefas Pendentes" value={totalTasksPending} />
          <StatsCard title="Tarefas Concluidas" value={totalTasksDone} />
        </div>
      </div>
    </header>
  );
};
