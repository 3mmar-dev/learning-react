import { ComponentProps } from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/utils/cn";

interface ButtonProps extends ComponentProps<"button"> {
  variant?: "primary" | "secondary" | "danger";
}

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(buttonVariants({ variant }), className)}
    ></button>
  );
};

export default Button;

const buttonVariants = cva(
  "py-sm px-lg rounded-md font-semibold hover:opacity-80 transition active:scale-95",
  {
    variants: {
      variant: {
        primary: "bg-primary text-content",
        secondary: "text-content hover:ring-2 hover:ring-content transition",
        danger: "bg-accent text-content",
      },
    },
    defaultVariants: { variant: "primary" },
  }
);
