const Button = ({
  children,
  disabled,
  className,
}: {
  children: JSX.Element | JSX.Element[] | string;
  disabled?: boolean;
  className: string;
}) => {
  return (
    <button
      className={
        "px-4 py-3 rounded bg-orange-400 transition duration-300 hover:scale-105 active:scale-100 " +
        className
      }
      disabled={disabled || false}
    >
      {children}
    </button>
  );
};

export default Button;
