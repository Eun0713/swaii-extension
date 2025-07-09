import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import AlertMessage from "@/components/common/AlertMessage";
import HeaderLayout from "@/components/common/HeaderLayout";
import PatternForm from "@/components/pattern/PatternForm";
import gestureMappingStorage from "@/utils/mapping/gestureMappingStorage";
import { gestureStore } from "@/utils/gesture/gestureStorage";

const EditPattern = () => {
  const navigate = useNavigate();
  const [initialData, setInitialData] = useState(null);
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
    visible: false,
  });

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

  const handleSubmit = async (updatedMapping) => {
    try {
      const mappingChanged =
        initialData.site !== updatedMapping.site ||
        initialData.gesture !== updatedMapping.gesture ||
        initialData.action !== updatedMapping.action;

      if (
        mappingChanged &&
        (await gestureMappingStorage.hasItem(updatedMapping))
      ) {
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

      const matchedGestureData = await gestureStore.getGestureByName(
        updatedMapping.gesture
      );

      const updatedMappingWithPoints = {
        ...updatedMapping,
        points: matchedGestureData?.points || [],
      };

      await gestureMappingStorage.update(initialData, updatedMappingWithPoints);

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

  if (!initialData) {
    return null;
  }

  return (
    <HeaderLayout
      title="패턴 수정"
      description={`현재 설정된 마우스 제스처에 연결된 사이트, 패턴 모양, 실행 동작을 \n확인하고 필요에 따라 자유롭게 수정할 수 있습니다.`}
    >
      <AlertMessage
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
      />
      <PatternForm
        initialData={initialData}
        onCancel={handleCancel}
        onSubmit={handleSubmit}
      />
    </HeaderLayout>
  );
};

export default EditPattern;
