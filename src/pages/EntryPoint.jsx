import { useNavigate } from "react-router-dom";

import GestureCircleCursor from "@/assets/circle-gesture.svg";
import LogoSwaii from "@/assets/logo-swaii.svg?react";
import { gestureItems } from "@/constants/gestureItems";

const EntryPoint = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[480px] w-[640px] overflow-hidden bg-slate-900 p-6 text-white">
      <img
        src={GestureCircleCursor}
        alt="Gesture Circle"
        className="absolute right-6 top-20 w-[160px]"
      />
      <LogoSwaii />

      <div className="mt-8 text-4xl font-bold">
        마우스 패턴으로 웹을 <br /> 더 빠르게 제어하세요
      </div>

      <p className="mt-4 text-xl text-gray-300">
        같은 제스처도, 사이트마다 다른 동작을 하도록!
      </p>

      <ul className="mt-9 space-y-4 text-lg">
        {gestureItems.map(({ icon, site, gesture, action }) => (
          <li key={site} className="flex items-center">
            <img src={icon} className="mr-3" />
            <span>
              {site}에서 <b>"{gesture}"</b> → {action}
            </span>
          </li>
        ))}
      </ul>

      <button
        className="absolute bottom-5 right-5 rounded-md bg-zinc-600 px-4 py-2 text-lg font-semibold text-white"
        onClick={() => navigate("/settings")}
      >
        시작하기
      </button>
    </div>
  );
};

export default EntryPoint;
