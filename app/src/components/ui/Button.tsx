import type { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  fullWidth?: boolean;
  isLoading?: boolean;
};

export function Button({
  variant = 'primary',
  fullWidth = false,
  isLoading = false,
  className,
  disabled,
  children,
  ...props
}: ButtonProps) {
  const classes = [styles.button, styles[variant], fullWidth && styles.fullWidth, className].filter(Boolean).join(' ');
  return (
    <button className={classes} disabled={disabled || isLoading} aria-busy={isLoading} {...props}>
      {isLoading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
}
