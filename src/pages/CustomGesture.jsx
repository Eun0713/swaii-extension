import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AlertMessage from "@/components/common/AlertMessage";
import HeaderLayout from "@/components/common/HeaderLayout";
import GestureButtons from "@/components/gesture/GestureButtons";
import GestureCanvas from "@/components/gesture/GestureCanvas";
import GestureInput from "@/components/gesture/GestureInput";
import useAlert from "@/hooks/useAlert";
import { saveUserGesture } from "@/services/gestureService";
import selectGestureStore from "@/utils/gesture/selectGestureStore";

const CustomGesture = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [path, setPath] = useState([]);
  const { alert, showAlert } = useAlert();

  const validateGestureInput = (name, path) => {
    if (!name.trim()) {
      return "제스처 이름을 입력해주세요.";
    }

    if (path.length < 5) {
      return "제스처를 충분히 그려주세요.";
    }

    return null;
  };

  const handleSave = async () => {
    const errorMessage = validateGestureInput(name, path);
    if (errorMessage) {
      showAlert(errorMessage, "error");
      return;
    }

    const gestureData = {
      name,
      type: "custom",
      points: path,
    };

    const { store: gestureStorage, userEmail } = await selectGestureStore();

    const success = await gestureStorage.save(gestureData);

    if (!success) {
      showAlert("이미 존재하는 이름입니다.", "error");
      return;
    }

    if (userEmail) {
      try {
        await saveUserGesture(userEmail, gestureData);
      } catch (error) {
        console.error(error);
      }
    }

    showAlert("제스처가 저장되었습니다.");

    setTimeout(() => {
      setName("");
      setPath([]);
      navigate(-1);
    }, 1000);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <HeaderLayout
      title="커스텀 제스처 만들기"
      description={`직접 마우스로 궤적을 그리고 원하는 이름을 붙여보세요.\n등록된 제스처는 '패턴 선택' 드롭다운에서 사용할 수 있습니다.`}
    >
      <AlertMessage {...alert} />

      <div className="mt-4 flex flex-col gap-3">
        <GestureCanvas onPathChange={setPath} isDisabled={path.length > 0} />
        <GestureInput value={name} onChange={setName} />
        <div className="flex justify-end">
          <GestureButtons onSave={handleSave} onCancel={handleCancel} />
        </div>
      </div>
    </HeaderLayout>
  );
};

export default CustomGesture;
