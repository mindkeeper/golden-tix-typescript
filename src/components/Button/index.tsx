import clsx from "clsx";
import { ButtonHTMLAttributes, ReactNode } from "react";
import { variants, sizes, buttonSize, buttonVariant } from "./constant";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: buttonSize;
  variant?: buttonVariant;
  children: ReactNode;
}
const Button = ({
  size = "regular",
  variant = "regular",
  children,
  className,
  ...props
}: Props) => {
  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {}
  return (
    <button
      className={clsx(
        "w-fit h-fit rounded-md text-xs font-medium hover:font-semibold transition-all duration-500",
        "disabled:opacity-50 disabled:cursor-not-allowed",
        sizes[size],
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
