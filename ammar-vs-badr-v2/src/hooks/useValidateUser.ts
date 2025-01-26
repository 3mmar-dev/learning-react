import { useState, useEffect } from "react";
import { TUser } from "../types/TUser";

function useValidateUser(user: TUser) {
  const [errors, setErrors] = useState({
    email: [] as string[],
    password: [] as string[],
    phone: [] as string[],
    name: [] as string[],
    passwordConfirmation: [] as string[],
  });

  const validateUser = (user: TUser) => {
    const emailErrors: string[] = [];
    const passwordErrors: string[] = [];
    const phoneErrors: string[] = [];
    const nameErrors: string[] = [];
    const passwordConfirmationErrors: string[] = [];

    // Email validation
    if (user.email !== "") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(user.email)) {
        emailErrors.push("البريد الإلكتروني غير صالح");
      }
    }

    // Password validation
    if (user.password !== "") {
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(user.password)) {
        passwordErrors.push(
          "يجب أن تحتوي كلمة المرور على 8 أحرف على الأقل، حرف كبير، حرف صغير، رقم، ورمز خاص"
        );
      }
      if (user.password !== user.passwordConfirmation) {
        passwordConfirmationErrors.push("كلمة المرور غير متطابقة");
      }
    }

    // Phone validation
    if (user.phone !== "") {
      const phoneRegex = /^\d{11}$/;
      if (!phoneRegex.test(user.phone)) {
        phoneErrors.push("يجب أن يكون رقم الهاتف 11 رقماً");
      }
    }

    // Name validation
    if (user.name !== "") {
      if (user.name.length < 5) {
        nameErrors.push("يجب أن يحتوي الإسم على 5 أحرف على الأقل");
      }
    }

    setErrors({
      email: emailErrors,
      password: passwordErrors,
      phone: phoneErrors,
      name: nameErrors,
      passwordConfirmation: passwordConfirmationErrors,
    });
  };

  useEffect(() => {
    validateUser(user);
  }, [user]);

  return errors;
}

export default useValidateUser;
