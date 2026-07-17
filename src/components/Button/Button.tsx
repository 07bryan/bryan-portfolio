import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  target?: AnchorHTMLAttributes<HTMLAnchorElement>["target"];
  rel?: string;
  download?: boolean | string;
}

function Button({
  children,
  className = "",
  href,
  target,
  rel,
  download,
  ...props
}: ButtonProps) {
  const classes = `
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
  `;

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={rel}
        download={download}
        className={classes}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}

export default Button;