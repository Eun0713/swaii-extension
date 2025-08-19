import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant =
  | "default"
  | "primary"
  | "danger"
  | "neutralDanger"
  | "muted"
  | "google";

type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  onClick?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
}

const Button = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  className = "",
  type = "button",
  ...props
}: ButtonProps) => {
  const base = "rounded-md px-4 py-1 font-semibold";

  const variants: Record<ButtonVariant, string> = {
    default: "bg-white text-black border border-gray-300 hover:brightness-90",
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
    neutralDanger: "bg-zinc-600 text-white hover:bg-zinc-700",
    muted: "bg-slate-900 text-white hover:bg-slate-800",
    google: "bg-white text-black hover:brightness-90",
  };

  const sizes: Record<ButtonSize, string> = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-1",
    lg: "text-base px-4 py-2",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
