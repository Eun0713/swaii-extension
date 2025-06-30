import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AlertMessage from "@/components/common/AlertMessage";
import HeaderLayout from "@/components/common/HeaderLayout";
import GestureButtons from "@/components/gesture/GestureButtons";
import GestureCanvas from "@/components/gesture/GestureCanvas";
import GestureInput from "@/components/gesture/GestureInput";

const CustomGesture = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [path, setPath] = useState([]);
  const [alert, setAlert] = useState({
    message: "",
    type: "error",
    visible: false,
  });

  const { message, type, visible } = alert;

  const showAlert = (message, type = "error") => {
    setAlert({ message, type, visible: true });
    setTimeout(() => setAlert((prev) => ({ ...prev, visible: false })), 2000);
  };

  const handleSave = () => {
    if (!name.trim()) return showAlert("제스처 이름을 입력해주세요.");
    if (path.length < 5) return showAlert("제스처를 충분히 그려주세요.");

    const gestures = JSON.parse(localStorage.getItem("customGestures") || "[]");
    gestures.push({ name, path });
    localStorage.setItem("customGestures", JSON.stringify(gestures));

    showAlert("제스처가 저장되었습니다.", "success");
    setName("");
    setPath([]);

    setTimeout(() => {
      navigate(-1);
    }, 2000);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <HeaderLayout
      title="커스텀 제스처 만들기"
      description={`직접 마우스로 궤적을 그리고 원하는 이름을 붙여보세요.\n등록된 제스처는 '패턴 선택' 드롭다운에서 사용할 수 있습니다.`}
    >
      <AlertMessage message={message} type={type} visible={visible} />

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
