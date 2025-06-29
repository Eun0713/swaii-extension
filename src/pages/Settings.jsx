import { useNavigate } from "react-router-dom";

import CloseButton from "@/assets/icon-close.svg?react";
import PatternList from "@/components/PatternList";
import Button from "@/components/ui/Button";

const Settings = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    window.close();
  };

  return (
    <div className="relative h-[480px] w-[640px] bg-slate-900 p-5 text-white shadow-lg">
      <button
        onClick={handleClose}
        className="absolute right-6 top-6 h-5 w-5 cursor-pointer"
      >
        <CloseButton />
      </button>

      <div className="mt-4 text-3xl font-bold">패턴 설정</div>
      <p className="mt-2 text-lg text-gray-300">
        사이트별로 연결된 마우스 패턴을 확인하고 관리할 수 있습니다.
      </p>

      <div className="mt-6">
        <PatternList />
      </div>

      <div
        className="absolute bottom-5 right-10"
        onClick={() => navigate("/settings/add")}
      >
        <Button variant="primary" size="md">
          + 패턴 추가
        </Button>
      </div>
    </div>
  );
};

export default Settings;
