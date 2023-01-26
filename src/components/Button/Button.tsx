import { FC } from 'react';
import { ButtonTypes } from '../../types';
import './Button.css';

interface ButtonProps {
  content: string;
  type?: ButtonTypes;
  disabled?: boolean
}

export const Button: FC<ButtonProps> = ({
  content,
  type = ButtonTypes.Standard,
  disabled = false
}) => {
  return (
    <button
      className="custom_button"
      disabled={disabled}
      type={type}
    >
      {content}
    </button>
  );
}
