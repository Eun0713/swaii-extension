const AlertMessage = ({ message, type = "error", visible }) => {
  const bgColor = type === "error" ? "bg-red-500" : "bg-green-500";
  const visibility = visible
    ? "opacity-100 visible translate-y-0"
    : "opacity-0 invisible -translate-y-3";

  return (
    <div className="absolute left-0 top-0 z-50 flex w-full justify-center">
      <div
        className={`mt-5 rounded-md px-4 py-2 text-sm text-white shadow transition-all duration-300 ${bgColor} ${visibility}`}
      >
        {message}
      </div>
    </div>
  );
};

export default AlertMessage;
