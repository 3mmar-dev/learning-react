import { Fragment, useState } from "react";
import { TUser } from "../types/TUser";
import { RegisterInputs } from "../utils/Inputs";
import Input from "./Input";
import Button from "./Button";
import { RegisterValidators } from "../utils/validators";

const RegisterForm = () => {
  const [user, setUser] = useState<TUser>({
    email: "",
    password: "",
    username: "",
    passwordRepeat: "",
  });

  const [errors, setErrors] = useState<string[]>([]);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    validate(user);
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
    validate({
      ...user,
      [name]: value,
    });
  }

  function validate(user: TUser) {
    let validationErrors: string[] = [];

    if (
      !user.username ||
      !user.email ||
      !user.password ||
      !user.passwordRepeat
    ) {
      validationErrors.push("كل البيانات يجب أن تملئ");
    }

    if (user.email && !user.email.match(RegisterValidators.emailRegex)) {
      validationErrors.push("تأكد من كتابة بريدك بشكل صحيح");
    }

    if (user.password !== user.passwordRepeat) {
      validationErrors.push("يجب ان تكون كلمتا المرور متطابقتين");
    }

    // if (
    //   user.password &&
    //   !user.password.match(RegisterValidators.passwordRegex)
    // ) {
    //   validationErrors.push(
    //     "كلمة المرور يجب أن تحتوي على 8 أحرف على الأقل مع مزيج من الحروف الكبيرة والصغيرة والأرقام."
    //   );
    // }

    setErrors(validationErrors);
  }

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 mt-8">
      <ul
        className={`flex flex-col items-start justify-center gap-3 font-bold text-black bg-red-600 px-4 py-2 rounded w-full transition-all duration-300 ${
          errors.length > 0 ? "opacity-100 h-auto" : "opacity-0 h-0"
        }`}
        style={{ height: errors.length > 0 ? "auto" : "0" }} // Optional, to prevent content from shifting
      >
        {errors.map((err, idx) => (
          <li key={idx}>{err}</li>
        ))}
      </ul>

      {RegisterInputs.map((i) => {
        return (
          <Fragment key={i.id}>
            <label className="text-xl font-medium" htmlFor={i.name}>
              {i.label}
            </label>
            <input
              className="px-3 py-2 rounded-md min-w-full transition-all duration-300 outline-none focus:outline focus:outline-orange-500 text-black"
              type={i.type}
              name={i.name}
              id={i.id}
              value={user[i.name as keyof TUser]}
              onChange={handleChange}
            />
          </Fragment>
        );
      })}

      <Button
        disabled={errors.length > 0}
        className="mt-2 disabled:bg-slate-700 disabled:transition-none disabled:scale-100"
      >
        <p>أنشء حسابك الأن!</p>
      </Button>
    </form>
  );
};

export default RegisterForm;
