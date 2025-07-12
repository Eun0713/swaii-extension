import { useNavigate } from "react-router-dom";

import GestureCircleCursor from "@/assets/gestures/circle-gesture.svg";
import GoogleIcon from "@/assets/logos/logo-google-login.svg?react";
import LogoSwaii from "@/assets/logos/logo-swaii.svg?react";
import Button from "@/components/common/Button";
import { gestureItems } from "@/constants/gestureItems";

const EntryPoint = () => {
  const navigate = useNavigate();

  return (
    <div className="relative h-[480px] w-[640px] overflow-hidden bg-slate-900 p-6 text-white">
      <img
        src={GestureCircleCursor}
        alt="Gesture Circle"
        className="absolute right-6 top-16 w-[160px]"
      />
      <LogoSwaii />

      <div className="mt-7 text-4xl font-bold">
        마우스 패턴으로 웹을 <br /> 더 빠르게 제어하세요
      </div>

      <p className="mt-3 text-xl text-gray-300">
        같은 제스처도, 사이트마다 다른 동작을 하도록!
      </p>

      <ul className="mt-6 space-y-4 text-lg">
        {gestureItems.map(({ icon, site, gesture, action }) => (
          <li key={site} className="flex items-center">
            <img src={icon} className="mr-3" />
            <span>
              {site}에서 <b>"{gesture}"</b> → {action}
            </span>
          </li>
        ))}
      </ul>

      <div className="absolute bottom-5 right-5 flex gap-3">
        <Button variant="google" size="lg">
          <div className="flex items-center">
            <GoogleIcon className="mr-2 h-6 w-6" />
            구글 로그인
          </div>
        </Button>
        <Button
          onClick={() => navigate("/settings")}
          variant="primary"
          size="lg"
        >
          시작하기
        </Button>
      </div>
    </div>
  );
};

export default EntryPoint;
