import React from 'react';

interface InputFieldProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  type?: 'text' | 'password' | 'email';
  disabled?: boolean;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  value,
  onChange,
  type = 'text',
  disabled = false,
}) => {
  const id = `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="relative">
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder=" " 
        disabled={disabled}
        className={`
          block w-full px-1 pt-4 pb-1 text-sm bg-transparent 
          border-0 border-b-2 appearance-none 
          text-text-primary 
          focus:outline-none focus:ring-0 peer
          disabled:opacity-50 disabled:cursor-not-allowed
          border-border focus:border-interactive-default
        `}
      />
      <label
        htmlFor={id}
        className={`
          absolute text-sm duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0]
          peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
          peer-focus:scale-75 peer-focus:-translate-y-4
          text-text-secondary peer-focus:text-interactive-default
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default InputField;
