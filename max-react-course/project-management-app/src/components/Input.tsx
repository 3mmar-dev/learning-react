import { ComponentProps, Ref } from "react";

interface InputProps {
  label: string;
  isTextArea?: boolean;
  ref?: Ref<HTMLInputElement> | Ref<HTMLTextAreaElement>;
  inputProps?: ComponentProps<"input">;
  textareaProps?: ComponentProps<"textarea">;
}

const classes =
  "w-full p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";

const Input = ({
  label,
  isTextArea = false,
  ref,
  inputProps,
  textareaProps,
}: InputProps) => {
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-stone-500">
        {label}
      </label>
      {isTextArea ? (
        <textarea
          className={classes}
          {...textareaProps}
          ref={ref as React.Ref<HTMLTextAreaElement>}
        />
      ) : (
        <input
          className={classes}
          {...inputProps}
          ref={ref as React.Ref<HTMLInputElement>}
        ></input>
      )}
    </p>
  );
};

export default Input;
