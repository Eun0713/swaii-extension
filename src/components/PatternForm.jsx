import { useState } from "react";
import { useNavigate } from "react-router-dom";

import IconPlus from "@/assets/icon-plus.svg?react";
import ActionDropdown from "@/components/dropdowns/ActionDropdown";
import GestureDropdown from "@/components/dropdowns/GestureDropdown";
import SiteDropdown from "@/components/dropdowns/SiteDropdown";
import Button from "@/components/ui/Button";

const PatternForm = ({
  initialData = {},
  onCancel,
  onSubmit,
  showCustomPatternButton = false,
}) => {
  const [site, setSite] = useState(initialData.site || "");
  const [gesture, setGesture] = useState(initialData.gesture || "");
  const [action, setAction] = useState(initialData.action || "");
  const [openDropdown, setOpenDropdown] = useState(null);

  const navigate = useNavigate();

  const toggle = (key) => setOpenDropdown(openDropdown === key ? null : key);
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ site, gesture, action });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-4">
        <label className="mb-1 block text-sm text-white">사이트 선택</label>
        <SiteDropdown
          value={site}
          onChange={setSite}
          isOpen={openDropdown === "site"}
          onToggle={() => toggle("site")}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1 block text-sm text-white">패턴 선택</label>
        <GestureDropdown
          value={gesture}
          onChange={setGesture}
          isOpen={openDropdown === "gesture"}
          onToggle={() => toggle("gesture")}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1 block text-sm text-white">기능 선택</label>
        <ActionDropdown
          value={action}
          onChange={setAction}
          isOpen={openDropdown === "action"}
          onToggle={() => toggle("action")}
        />
      </div>

      {showCustomPatternButton && (
        <div className="mt-4 text-left">
          <button
            type="button"
            onClick={() => navigate("/settings/custom")}
            className="flex items-center gap-1 text-base font-semibold text-white"
          >
            <IconPlus className="h-4 w-4" />
            커스텀 패턴 만들기
          </button>
        </div>
      )}

      <div className="absolute bottom-0 left-0 flex w-full justify-end gap-2 px-6 pb-6">
        <Button variant="default" onClick={onCancel} type="button">
          취소
        </Button>
        <Button variant="primary" type="submit">
          저장
        </Button>
      </div>
    </form>
  );
};

export default PatternForm;
