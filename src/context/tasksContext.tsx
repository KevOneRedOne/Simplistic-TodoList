import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Priority, Task } from '../types';

interface TasksContextType {
  tasks: Task[];
  addTask: (taskName: string, priority?: Priority) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  updateTaskPriority: (id: number, priority: Priority) => void;
  clearAllTasks: () => void;
  filterTasks: 'all' | 'completed' | 'incomplete';
  setFilterTasks: (filter: 'all' | 'completed' | 'incomplete') => void;
  hasPendingTasks: boolean;
  isTaskListEmpty: boolean;
}

const TasksContext = createContext<TasksContextType | undefined>(undefined);

export const TasksProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<
    'all' | 'completed' | 'incomplete'
  >('all');

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      setTasks(storedTasks);
    } catch (error) {
      console.error('Failed to load tasks:', error);
      setTasks([]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = useCallback(
    (taskName: string, priority: Priority = 'medium') => {
      if (taskName.trim()) {
        const newTask = {
          id: Date.now(),
          name: taskName,
          dateCompleted: '',
          completed: false,
          priority,
        };
        setTasks(prevTasks => [...prevTasks, newTask]);
      }
    },
    []
  );

  const removeTask = useCallback((id: number) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  }, []);

  const toggleTask = useCallback((id: number) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id
          ? {
              ...task,
              completed: !task.completed,
              dateCompleted: !task.completed ? new Date().toLocaleString() : '',
            }
          : task
      )
    );
  }, []);

  const updateTaskPriority = useCallback((id: number, priority: Priority) => {
    setTasks(prevTasks =>
      prevTasks.map(task => (task.id === id ? { ...task, priority } : task))
    );
  }, []);

  const clearAllTasks = useCallback(() => {
    setTasks([]);
  }, []);

  const filteredTasks = useMemo(() => {
    let filtered: Task[];
    switch (filterTasks) {
      case 'completed':
        filtered = tasks.filter(task => task.completed);
        break;
      case 'incomplete':
        filtered = tasks.filter(task => !task.completed);
        break;
      default:
        filtered = tasks;
    }

    // Sort by priority: high → medium → low
    const priorityOrder: Record<Priority, number> = {
      high: 0,
      medium: 1,
      low: 2,
    };
    return filtered.sort(
      (a, b) => priorityOrder[a.priority] - priorityOrder[b.priority]
    );
  }, [tasks, filterTasks]);

  const isTaskListEmpty = useMemo(() => tasks.length === 0, [tasks]);
  const hasPendingTasks = useMemo(
    () => tasks.some(task => !task.completed),
    [tasks]
  );

  return (
    <TasksContext.Provider
      value={{
        tasks: filteredTasks,
        addTask,
        removeTask,
        toggleTask,
        updateTaskPriority,
        clearAllTasks,
        filterTasks,
        setFilterTasks,
        hasPendingTasks,
        isTaskListEmpty,
      }}
    >
      {children}
    </TasksContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTasksContext = () => {
  const context = useContext(TasksContext);
  if (!context) {
    throw new Error('useTasksContext must be used within a TasksProvider');
  }
  return context;
};
