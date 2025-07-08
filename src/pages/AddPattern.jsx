import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AlertMessage from "@/components/common/AlertMessage";
import HeaderLayout from "@/components/common/HeaderLayout";
import PatternForm from "@/components/pattern/PatternForm";
import gestureMappingStorage from "@/utils/gestureMappingStorage";
import { gestureStore } from "@/utils/gestureStorage";

const AddPattern = () => {
  const navigate = useNavigate();
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
    visible: false,
  });

  const handleClose = () => {
    window.close();
  };

  const handleSubmit = async (mapping) => {
    try {
      const matchedGestureData = await gestureStore.getGestureByName(
        mapping.gesture
      );

      const mappingWithPoints = {
        ...mapping,
        points: matchedGestureData?.points || [],
        createdAt: new Date().toISOString(),
      };

      const success = await gestureMappingStorage.save(mappingWithPoints);

      if (!success) {
        setAlert({
          message: "이미 동일한 사이트와 패턴 조합이 존재합니다.",
          type: "error",
          visible: true,
        });

        setTimeout(() => {
          setAlert((prev) => ({ ...prev, visible: false }));
        }, 1000);

        return;
      }

      setAlert({
        message: "저장되었습니다.",
        type: "success",
        visible: true,
      });

      setTimeout(() => {
        setAlert((prev) => ({ ...prev, visible: false }));
        navigate("/settings");
      }, 1000);
    } catch (error) {
      console.error(error);
    }
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
          message={alert.message}
          type={alert.type}
          visible={alert.visible}
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
