import { ReactNode } from "react";

type TProps = {
  name: string;
  id: string;
  type: string;
  placeholder: string;
  icon: ReactNode;
  label: string;
  error: string;
  onInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  name,
  icon,
  id,
  type,
  placeholder,
  label,
  onInput,
  error,
}: TProps) => {
  return (
    <div className="relative flex flex-col w-full">
      <label
        htmlFor={id}
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        {label}
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
          {icon}
        </div>
        <input
          type={type}
          id={id}
          name={name}
          className={
            !error
              ? "block w-full p-4 ps-10 text-sm transition-all duration-300 outline-none focus:ring-black focus:ring-1 ring-0"
              : "block w-full p-4 ps-10 text-sm transition-all duration-300 outline-none ring-red-600 ring-1"
          }
          placeholder={placeholder}
          required
          onInput={onInput}
        />
      </div>
      <p className="text-red-600 h-max mt-1">{error}</p>
    </div>
  );
};

export default Input;
