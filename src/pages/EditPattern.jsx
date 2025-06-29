import { useNavigate } from "react-router-dom";

import PatternForm from "@/components/PatternForm";
import PatternLayout from "@/components/PatternLayout";

const EditPattern = () => {
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <PatternLayout
      title="패턴 수정"
      description={`현재 설정된 마우스 제스처에 연결된 사이트, 패턴 모양, 실행 동작을 \n확인하고 필요에 따라 자유롭게 수정할 수 있습니다.`}
    >
      <PatternForm onCancel={handleCancel} />
    </PatternLayout>
  );
};

export default EditPattern;
