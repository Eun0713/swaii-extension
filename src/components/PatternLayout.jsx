import CloseButton from "@/assets/icon-close.svg?react";

const PatternLayout = ({ title, description, children }) => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="relative h-[480px] w-[640px] bg-slate-900 p-5 text-white">
      <button
        onClick={handleClose}
        className="absolute right-6 top-6 h-5 w-5 cursor-pointer"
      >
        <CloseButton />
      </button>

      <div className="mt-4 text-2xl font-bold">{title}</div>
      <p className="mt-2 whitespace-pre-line text-lg text-gray-300">
        {description}
      </p>

      {children}
    </div>
  );
};

export default PatternLayout;
