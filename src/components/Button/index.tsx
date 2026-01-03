import React from 'react';
import styles from './index.module.css';

interface ButtonProps {
  onClick?: () => void;
  disabled?: boolean;
  icon?: React.ReactNode;
  children?: React.ReactNode;
  variant?: 'text-primary' | 'text-secondary' | 'icon';
  type?: 'button' | 'submit' | 'reset';
  deleteButton?: boolean;
  ariaLabel?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  children,
  icon,
  variant = 'text-primary',
  type = 'button',
  deleteButton,
  ariaLabel,
}) => {
  let className =
    variant === 'icon'
      ? styles.iconButton
      : variant === 'text-secondary'
        ? styles.textButtonSecondary
        : styles.textButtonPrimary;

  if (deleteButton) {
    className = `${className} ${styles.deleteButton}`;
  }

  return (
    <button
      type={type}
      className={className}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || (children ? undefined : 'Button')}
    >
      {typeof icon === 'string' && (
        <img className={styles.icon} src={icon} alt="" aria-hidden="true" />
      )}
      {children && <span className={styles.text}>{children}</span>}
    </button>
  );
};
