// src/components/TaskItem/index.tsx
import React from 'react';
import { Task, Priority } from '../../types';
import { Button } from '../Button';
import { PriorityBadge } from '../PriorityBadge';
import CheckIcon from '../../assets/icon/check.svg';
import CrossIcon from '../../assets/icon/cross.svg';
import DeleteIcon from '../../assets/icon/trash.svg';
import styles from './index.module.css';

interface TaskItemProps {
  task: Task;
  toggleTask: (id: number) => void;
  removeTask: (id: number) => void;
  updateTaskPriority: (id: number, priority: Priority) => void;
}

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  toggleTask,
  removeTask,
  updateTaskPriority,
}) => {
  return (
    <li className={styles.taskItem}>
      <div className={styles.taskContent}>
        <PriorityBadge
          priority={task.priority}
          editable={!task.completed}
          onChange={priority => updateTaskPriority(task.id, priority)}
        />
        <span
          className={styles.taskName}
          style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
        >
          {task.name}
          {task.completed && task.dateCompleted && (
            <span className={styles.completedDate}>
              {' '}
              - Completed on {String(task.dateCompleted)}
            </span>
          )}
        </span>
      </div>
      <div
        className={styles.taskActions}
        role="group"
        aria-label="Task actions"
      >
        <Button
          onClick={() => toggleTask(task.id)}
          icon={task.completed ? CrossIcon : CheckIcon}
          variant="icon"
          ariaLabel={
            task.completed
              ? `Mark "${task.name}" as incomplete`
              : `Mark "${task.name}" as complete`
          }
        />
        <Button
          onClick={() => removeTask(task.id)}
          icon={DeleteIcon}
          variant="icon"
          deleteButton={true}
          ariaLabel={`Delete task "${task.name}"`}
        />
      </div>
    </li>
  );
};
