import { ReactNode } from "react";

import CloseButton from "@/assets/icons/icon-close.svg?react";

interface HeaderLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const HeaderLayout = ({ title, description, children }: HeaderLayoutProps) => {
  const handleClose = () => {
    window.close();
  };

  return (
    <div className="relative h-[480px] w-[640px] overflow-hidden bg-slate-900 p-5 text-white">
      <button
        onClick={handleClose}
        className="absolute right-6 top-6 h-5 w-5 cursor-pointer"
      >
        <CloseButton />
      </button>

      <div className="mt-3 text-2xl font-bold">{title}</div>
      <p className="mt-2 whitespace-pre-line text-base text-gray-300">
        {description}
      </p>

      {children}
    </div>
  );
};

export default HeaderLayout;
