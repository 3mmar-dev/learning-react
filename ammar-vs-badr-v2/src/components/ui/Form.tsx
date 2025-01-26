import { useEffect, useState } from "react";
import { TUser } from "../../types/TUser";
import Button from "./Button";
import useValidateUser from "../../hooks/useValidateUser";
import Input from "./Input";
import { TInput } from "../../types/TInput";

type TProps = {
  inputs: TInput[];
};

const Form = ({ inputs }: TProps) => {
  const [user, setUser] = useState<TUser>({
    email: "",
    password: "",
    phone: "",
    name: "",
    passwordConfirmation: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const errors: { [key: string]: string[] } = useValidateUser(user);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (Object.values(user).every((value) => value !== "")) {
      setIsSubmitted(true);
    }

    console.log(Object.keys(errors));
  }

  useEffect(() => {
    if (
      isSubmitted &&
      Object.values(errors).some((errorArray) => errorArray.length > 0)
    ) {
      setIsSubmitted(false);
    }
  }, [errors, isSubmitted]);

  return (
    <>
      {isSubmitted ? (
        <div>
          <h1 className="font-bold text-3xl ">مرحبًا، {user.name} 🎉!</h1>
        </div>
      ) : (
        <div className="flex flex-col gap-4 max-lg:ms-4  min-w-full">
          <h2 className="font-bold text-3xl lg:text-4xl">أنشء حسابك الأن</h2>

          <form
            className="flex flex-col gap-4 min-w-full"
            onSubmit={handleSubmit}
          >
            {inputs.map((input) => (
              <Input
                onInput={(e) =>
                  setUser({ ...user, [input.name]: e.target.value })
                }
                key={input.id}
                name={input.name}
                id={input.id}
                type={input.type}
                placeholder={input.placeholder}
                icon={input.icon}
                label={input.label}
                error={errors[input.name]?.join(", ")}
              />
            ))}
            <Button>أنشئ الآن</Button>
          </form>
        </div>
      )}
    </>
  );
};

export default Form;
