import { useId, useState, type InputHTMLAttributes } from 'react';
import styles from './TextField.module.css';

type TextFieldProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> & {
  label: string;
  error?: string;
  hint?: string;
};

/** Campo de formulário com rótulo, mensagem de erro e botão de mostrar senha. */
export function TextField({ label, error, hint, type = 'text', ...props }: TextFieldProps) {
  const id = useId();
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === 'password';
  const describedBy = error ? `${id}-error` : hint ? `${id}-hint` : undefined;

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      <div className={[styles.inputWrapper, error && styles.hasError].filter(Boolean).join(' ')}>
        <input
          id={id}
          type={isPassword && showPassword ? 'text' : type}
          className={styles.input}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? 'Ocultar senha' : 'Mostrar senha'}
          >
            {showPassword ? '🙈' : '👁️'}
          </button>
        )}
      </div>
      {error ? (
        <p id={`${id}-error`} className={styles.eֻǱ˞