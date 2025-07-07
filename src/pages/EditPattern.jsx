import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import HeaderLayout from "@/components/common/HeaderLayout";
import PatternForm from "@/components/pattern/PatternForm";
import gestureMappingStorage from "@/utils/gestureMappingStorage";

const EditPattern = () => {
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);

  useEffect(() => {
    chrome.storage.local.get("selectedPattern", (result) => {
      const pattern = result.selectedPattern;
      if (!pattern) {
        navigate("/settings");
        return;
      }
      setInitialData(pattern);
    });
  }, [navigate]);

  const handleCancel = () => {
    navigate(-1);
  };

  const handleSubmit = (updatedMapping) => {
    gestureMappingStorage.update(initialData, updatedMapping);
    navigate("/settings");
  };

  if (!initialData) {
    return null;
  }

  return (
    <HeaderLayout
      title="패턴 수정"
      description={`현재 설정된 마우스 제스처에 연결된 사이트, 패턴 모양, 실행 동작을 \n확인하고 필요에 따라 자유롭게 수정할 수 있습니다.`}
    >
      <PatternForm
        initialData={initialData}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </HeaderLayout>
  );
};

export default EditPattern;
