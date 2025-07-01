import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AlertMessage from "@/components/common/AlertMessage";
import HeaderLayout from "@/components/common/HeaderLayout";
import PatternForm from "@/components/pattern/PatternForm";
import { saveMapping } from "@/utils/gestureMappingStorage";

const AddPattern = () => {
  const navigate = useNavigate();
  const [alertMessage, setAlertMessage] = useState("");
  const [alertType, setAlertType] = useState("success");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleClose = () => {
    window.close();
  };

  const handleSubmit = (mapping) => {
    const success = saveMapping(mapping);

    if (!success) {
      setAlertMessage("이미 동일한 사이트와 패턴 조합이 존재합니다.");
      setAlertType("error");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 2000);
      return;
    }

    setAlertMessage("저장되었습니다.");
    setAlertType("success");
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
      navigate("/settings");
    }, 2000);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <>
      <HeaderLayout
        title="새 마우스 패턴 추가"
        description={`원하는 사이트에 마우스 제스처와 실행할 동작을 연결해\n새로운 패턴을 추가할 수 있습니다.`}
        onClose={handleClose}
      >
        <AlertMessage
          message={alertMessage}
          type={alertType}
          visible={alertVisible}
        />
        <PatternForm
          onCancel={handleCancel}
          onSubmit={handleSubmit}
          showCustomPatternButton
        />
      </HeaderLayout>
    </>
  );
};

export default AddPattern;
