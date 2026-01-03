import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { TextInput } from '../../components/TextInput';
import { useTasksContext } from '../../context/tasksContext';
import { Priority } from '../../types';
import styles from './index.module.css';

export const TaskForm: React.FC = () => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState<Priority>('medium');
  const { addTask } = useTasksContext();

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (taskName.trim()) {
      addTask(taskName, priority);
      setTaskName('');
      setPriority('medium');
    }
  };

  return (
    <form
      className={styles.formContainer}
      onSubmit={handleAddTask}
      aria-label="Add new task"
    >
      <div className={styles.inputWrapper}>
        <TextInput
          id="task-input"
          value={taskName}
          onChange={e => setTaskName(e.target.value)}
          placeholder="Add a task to do."
          ariaLabel="Task name"
        />
        <div
          className={styles.prioritySelector}
          role="group"
          aria-label="Task priority"
        >
          <button
            type="button"
            className={`${styles.priorityButton} ${styles.high} ${priority === 'high' ? styles.active : ''}`}
            onClick={() => setPriority('high')}
            aria-label="Set priority to high"
            aria-pressed={priority === 'high'}
            title="High priority"
          >
            <span className={styles.priorityDot} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.priorityButton} ${styles.medium} ${priority === 'medium' ? styles.active : ''}`}
            onClick={() => setPriority('medium')}
            aria-label="Set priority to medium"
            aria-pressed={priority === 'medium'}
            title="Medium priority"
          >
            <span className={styles.priorityDot} aria-hidden="true" />
          </button>
          <button
            type="button"
            className={`${styles.priorityButton} ${styles.low} ${priority === 'low' ? styles.active : ''}`}
            onClick={() => setPriority('low')}
            aria-label="Set priority to low"
            aria-pressed={priority === 'low'}
            title="Low priority"
          >
            <span className={styles.priorityDot} aria-hidden="true" />
          </button>
        </div>
      </div>
      <Button
        type="submit"
        disabled={taskName.trim() === ''}
        variant="text-primary"
        ariaLabel="Add task"
      >
        Do it.
      </Button>
    </form>
  );
};
