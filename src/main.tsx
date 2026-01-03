import ReactDOM from 'react-dom/client';
import TodoApp from './TodoList';
import { TasksProvider } from './context/tasksContext';
import './main.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <TasksProvider>
    <TodoApp />
  </TasksProvider>
);
