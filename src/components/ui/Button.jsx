const Button = ({
  children,
  onClick,
  variant = "default",
  size = "sm",
  className = "",
  type = "button",
  ...props
}) => {
  const base = "rounded-md px-4 py-1 font-semibold";

  const variants = {
    default: "bg-white text-black border border-gray-300",
    primary: "bg-indigo-600 text-white",
    danger: "bg-zinc-600 text-white",
    muted: "bg-slate-900 text-white",
  };

  const sizes = {
    sm: "text-sm px-5 py-1",
    md: "text-base px-5 py-2",
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
