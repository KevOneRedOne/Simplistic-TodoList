import React from 'react';
import styles from './index.module.css';

interface TextInputProps {
  value: string;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  ariaLabel?: string;
  id?: string;
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChange,
  placeholder,
  ariaLabel,
  id,
}) => {
  return (
    <input
      id={id}
      className={styles.input}
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      aria-label={ariaLabel || placeholder}
      autoComplete="off"
    />
  );
};
