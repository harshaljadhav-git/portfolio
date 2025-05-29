import { ButtonHTMLAttributes, DetailedHTMLProps, ReactNode } from "react";

type Variant = "default" | "outline";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children: ReactNode;
  className?: string;
  variant?: Variant;
}

export function Button({
  children,
  className = "",
  variant = "default",
  ...props
}: ButtonProps) {
  const baseStyles =
    "px-4 py-2 rounded-lg font-medium transition-all duration-300";
  const variantStyles = {
    default: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline:
      "border border-indigo-600 text-indigo-600 hover:bg-indigo-50 hover:text-indigo-700",
  };

  return (
    <button
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
