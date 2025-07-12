const Button = ({
  children,
  onClick,
  variant = "default",
  size = "md",
  className = "",
  type = "button",
  ...props
}) => {
  const base = "rounded-md px-4 py-1 font-semibold";

  const variants = {
    default: "bg-white text-black border border-gray-300 hover:brightness-90",
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    danger: "bg-red-500 text-white hover:bg-red-600",
    neutralDanger: "bg-zinc-600 text-white hover:bg-zinc-700",
    muted: "bg-slate-900 text-white hover:bg-slate-800",
    kakao: "bg-[#FEE500] text-black hover:brightness-90",
  };

  const sizes = {
    sm: "text-sm px-3 py-1",
    md: "text-base px-4 py-1",
    lg: "text-base px-6 py-2",
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
