import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`
        inline-flex items-center gap-2
        rounded-lg
        bg-blue-600
        px-6
        py-3
        font-medium
        text-white
        transition-all
        duration-300
        hover:-translate-y-1
        hover:bg-blue-500
        hover:shadow-lg
        hover:shadow-blue-500/20
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;