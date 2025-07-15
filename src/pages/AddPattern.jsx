import { useNavigate } from "react-router-dom";

import AlertMessage from "@/components/common/AlertMessage";
import HeaderLayout from "@/components/common/HeaderLayout";
import PatternForm from "@/components/pattern/PatternForm";
import useAlert from "@/hooks/useAlert";
import selectGestureStore from "@/utils/gesture/selectGestureStore";
import selectMappingStore from "@/utils/mapping/selectMappingStore";

const AddPattern = () => {
  const navigate = useNavigate();
  const { alert, showAlert } = useAlert();

  const handleClose = () => {
    window.close();
  };

  const handleSubmit = async (mapping) => {
    try {
      const { store: gestureStore } = await selectGestureStore();
      const { store: mappingStore } = await selectMappingStore();

      const allGestures = await gestureStore.getAll();
      const matchedGestureData = allGestures.find(
        (gesture) => gesture.name === mapping.gesture
      );

      const mappingWithPoints = {
        ...mapping,
        points: matchedGestureData?.points || [],
        createdAt: new Date().toISOString(),
      };

      const success = await mappingStore.save(mappingWithPoints);

      if (!success) {
        showAlert("이미 동일한 사이트와 패턴 조합이 존재합니다.", "error");
        return;
      }

      showAlert("저장되었습니다.");

      setTimeout(() => {
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
    <HeaderLayout
      title="새 마우스 패턴 추가"
      description={`원하는 사이트에 마우스 제스처와 실행할 동작을 연결해\n새로운 패턴을 추가할 수 있습니다.`}
      onClose={handleClose}
    >
      <AlertMessage {...alert} />
      <PatternForm
        onCancel={handleCancel}
        onSubmit={handleSubmit}
        showCustomPatternButton
      />
    </HeaderLayout>
  );
};

export default AddPattern;
