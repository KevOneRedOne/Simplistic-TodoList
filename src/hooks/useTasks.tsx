import { useEffect, useState, useMemo, useCallback } from 'react';
import { Task, Priority } from '../types';

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterTasks, setFilterTasks] = useState<
    'all' | 'completed' | 'incomplete'
  >('all');

  useEffect(() => {
    try {
      const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
      // Migration: add default priority to old tasks
      const migratedTasks = storedTasks.map((task: Task) => ({
        ...task,
        priority: task.priority || 'medium',
      }));
      setTasks(migratedTasks);
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
        const newTask: Task = {
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

  const isTaskListEmpty = useMemo(() => {
    return tasks.length === 0;
  }, [tasks]);

  const hasPendingTasks = useMemo(
    () => tasks.some(task => !task.completed),
    [tasks]
  );

  const setFilter = useCallback(
    (filter: 'all' | 'completed' | 'incomplete') => {
      setFilterTasks(filter);
    },
    []
  );

  return {
    tasks: filteredTasks,
    addTask,
    removeTask,
    toggleTask,
    updateTaskPriority,
    clearAllTasks,
    setFilterTasks: setFilter,
    hasPendingTasks,
    isTaskListEmpty,
  };
};
