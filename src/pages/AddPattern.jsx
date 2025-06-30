import { useNavigate } from "react-router-dom";

import HeaderLayout from "@/components/common/HeaderLayout";
import PatternForm from "@/components/pattern/PatternForm";

const AddPattern = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    window.close();
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <HeaderLayout
      title="새 마우스 패턴 추가"
      description={`원하는 사이트에 마우스 제스처와 실행할 동작을 연결해\n새로운 패턴을 추가할 수 있습니다.`}
      onClose={handleClose}
    >
      <PatternForm onCancel={handleCancel} showCustomPatternButton />
    </HeaderLayout>
  );
};

export default AddPattern;
