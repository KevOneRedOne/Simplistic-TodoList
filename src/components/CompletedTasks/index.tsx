import React, { useState } from 'react';
import { useTasksContext } from '../../context/tasksContext';
import styles from './index.module.css';
import { TaskItem } from '../TaskItem';

const CompletedTasks: React.FC = () => {
  const { tasks, toggleTask, removeTask, updateTaskPriority } =
    useTasksContext();

  const completedTasks = tasks.filter(task => task.completed);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(prev => !prev);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleSection();
    }
  };

  if (completedTasks.length === 0) {
    return null;
  }

  return (
    <div className={styles.completedTasks}>
      <button
        onClick={toggleSection}
        onKeyDown={handleKeyDown}
        className={styles.completedHeader}
        aria-expanded={isOpen}
        aria-controls="completed-tasks-list"
        type="button"
      >
        <span>Completed Tasks ({completedTasks.length})</span>
        <span className={styles.toggleIcon} aria-hidden="true">
          {isOpen ? '▼' : '►'}
        </span>
      </button>
      {isOpen && (
        <ul
          id="completed-tasks-list"
          className={styles.completedTaskList}
          aria-label="Completed tasks"
        >
          {completedTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              toggleTask={toggleTask}
              removeTask={removeTask}
              updateTaskPriority={updateTaskPriority}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTasks;
