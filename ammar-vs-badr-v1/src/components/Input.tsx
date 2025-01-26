const Input = (props: { type: string; name: string; id: string }) => {
  const { type, name, id } = props;
  return (
    <input
      className="px-3 py-2 rounded-md min-w-full transition-all duration-300 outline-none focus:outline focus:outline-orange-500"
      type={type}
      name={name}
      id={id}
    />
  );
};

export default Input;
