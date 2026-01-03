import React from 'react';
import { Priority } from '../../types';
import styles from './index.module.css';

interface PriorityBadgeProps {
  priority: Priority;
  editable?: boolean;
  onChange?: (priority: Priority) => void;
}

export const PriorityBadge: React.FC<PriorityBadgeProps> = ({
  priority,
  editable = false,
  onChange,
}) => {
  const handleClick = () => {
    if (editable && onChange) {
      // Cycle through priorities: low → medium → high → low
      const nextPriority: Record<Priority, Priority> = {
        low: 'medium',
        medium: 'high',
        high: 'low',
      };
      onChange(nextPriority[priority]);
    }
  };

  const priorityLabels: Record<Priority, string> = {
    high: 'High',
    medium: 'Medium',
    low: 'Low',
  };

  return (
    <button
      type="button"
      className={`${styles.badge} ${styles[priority]} ${editable ? styles.editable : ''}`}
      onClick={handleClick}
      disabled={!editable}
      aria-label={`Priority: ${priorityLabels[priority]}${editable ? '. Click to change' : ''}`}
      title={editable ? 'Click to change priority' : priorityLabels[priority]}
    >
      <span className={styles.dot} />
      <span className={styles.label}>{priorityLabels[priority]}</span>
    </button>
  );
};
