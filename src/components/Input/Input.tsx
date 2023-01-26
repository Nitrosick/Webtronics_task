import { FC } from 'react';
import { Path, UseFormRegister } from "react-hook-form";
import { IFormInput } from '../../sections/ContactUs/ContactUs';
import './Input.css';

interface InputProps {
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  register: UseFormRegister<IFormInput>;
  value: Path<IFormInput>;
}

export const Input: FC<InputProps> = ({
  placeholder,
  disabled = false,
  error = false,
  register,
  value
}) => {
  return (
    <div className={`input_wrapper ${error ? 'error' : ''}`}>
      <input
        type="text"
        className="custom_input"
        placeholder={placeholder}
        disabled={disabled}
        {...register(value, { required: true })}
      />
    </div>
  );
}
