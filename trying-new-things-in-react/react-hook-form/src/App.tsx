import { SubmitHandler, useForm } from "react-hook-form";
import { twMerge } from "tailwind-merge";

type FormType = {
  blah: string;
};

function App() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = ({ blah }) => {
    console.log(blah);
  };

  const err = errors.blah?.message && "-translate-y-4";

  return (
    <div className="overflow-hidden relative p-8 w-screen h-screen bg-gray-300">
      <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("blah", {
            minLength: {
              message: "10 characters as a minimum!",
              value: 10,
            },
          })}
          type="text"
          className="focus-within:outline-none text-white bg-indigo-900 rounded-lg px-2 py-1 shadow-2xl"
        />
        <button className="cursor-pointer bg-indigo-900 rounded-lg px-3 py-2 text-white">
          submit
        </button>
      </form>

      <div
        className={twMerge(
          "absolute w-1/2 min-h-8 bottom-0 translate-x-1/2 translate-y-16 bg-red-400 text-red-700 px-3 py-2 rounded shadow-2xl transition-transform duration-500",
          `${err}`
        )}
      >
        <p>{errors.blah?.message}</p>
      </div>
    </div>
  );
}

export default App;
