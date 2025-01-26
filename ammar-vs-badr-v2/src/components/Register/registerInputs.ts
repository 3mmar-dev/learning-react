import { CircleUser, AtSign, Phone, KeyRound } from "lucide-react";
import React from "react";
import { TInput } from "../../types/TInput";

export const registerInputs: TInput[] = [
  {
    label: "ما هو إسمك؟",
    name: "name",
    id: "name",
    type: "text",
    placeholder: "أدخل إسمك",
    icon: React.createElement(CircleUser),
  },
  {
    label: "ما هو إيميلك؟",
    name: "email",
    id: "email",
    type: "email",
    placeholder: "أدخل إيميلك",
    icon: React.createElement(AtSign),
  },
  {
    label: "ما هو رقم هاتفك؟",
    name: "phone",
    id: "phone",
    type: "number",
    placeholder: "أدخل رقم هاتفك",
    icon: React.createElement(Phone),
  },
  {
    label: "ما هو كلمة المرور؟",
    name: "password",
    id: "password",
    type: "password",
    placeholder: "أدخل كلمة المرور",
    icon: React.createElement(KeyRound),
  },
  {
    label: "تأكيد كلمة المرور",
    name: "passwordConfirmation",
    id: "passwordConfirmation",
    type: "password",
    placeholder: "تأكيد كلمة المرور",
    icon: React.createElement(KeyRound),
  },
];
