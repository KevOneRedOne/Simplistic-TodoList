import React from 'react';
import FilterIcon from '../../assets/icon/filter.svg';
import { useTasksContext } from '../../context/tasksContext';
import styles from './index.module.css';

export const TaskFilter: React.FC = () => {
  const { setFilterTasks, isTaskListEmpty } = useTasksContext();

  if (isTaskListEmpty) {
    return null;
  }

  return (
    <div className={styles.selectContainer}>
      <img
        className={styles.selectIcon}
        src={FilterIcon}
        alt=""
        aria-hidden="true"
      />
      <select
        className={styles.selectSection}
        onChange={e =>
          setFilterTasks(e.target.value as 'all' | 'completed' | 'incomplete')
        }
        aria-label="Filter tasks by status"
        defaultValue="all"
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
    </div>
  );
};
