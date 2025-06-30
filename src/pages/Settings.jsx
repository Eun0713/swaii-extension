import { useNavigate } from "react-router-dom";

import CloseButton from "@/assets/icons/icon-close.svg?react";
import Button from "@/components/common/Button";
import HeaderLayout from "@/components/common/HeaderLayout";
import PatternList from "@/components/pattern/PatternList";

const Settings = () => {
  const navigate = useNavigate();

  return (
    <HeaderLayout
      title="패턴 설정"
      description={`  사이트별로 연결된 마우스 패턴을 확인하고 관리할 수 있습니다.`}
    >
      <div className="mt-6">
        <PatternList />
      </div>

      <div
        className="absolute bottom-7 right-9"
        onClick={() => navigate("/settings/add")}
      >
        <Button variant="primary">+ 패턴 추가</Button>
      </div>
    </HeaderLayout>
  );
};

export default Settings;
