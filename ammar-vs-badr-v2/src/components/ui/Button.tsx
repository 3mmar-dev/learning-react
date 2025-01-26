import { ReactNode } from "react";
type TProps = { children: ReactNode };

const Button = ({ children }: TProps) => {
  return (
    <button className="px-4 py-2 bg-black text-white border-2 border-black transition duration-300 ease-in-out transform hover:bg-white hover:text-black hover:scale-105 active:scale-95">
      {children}
    </button>
  );
};

export default Button;
