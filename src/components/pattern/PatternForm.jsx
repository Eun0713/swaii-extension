import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import IconPlus from "@/assets/icons/icon-plus.svg?react";
import AlertMessage from "@/components/common/AlertMessage";
import Button from "@/components/common/Button";
import ActionDropdown from "@/components/dropdowns/ActionDropdown";
import GestureDropdown from "@/components/dropdowns/GestureDropdown";
import SiteDropdown from "@/components/dropdowns/SiteDropdown";
import { SITE_ACTION_LABELS } from "@/constants/siteActionLabels";

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
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const validActions = Object.keys(SITE_ACTION_LABELS[site] || {});
    if (!validActions.includes(action)) {
      setAction("");
    }
  }, [action, site]);

  const showTemporaryError = () => {
    setShowErrorAlert(true);

    setTimeout(() => {
      setShowErrorAlert(false);
    }, 1500);
  };

  const toggleDropdown = (key) => {
    setOpenDropdown(openDropdown === key ? null : key);
  };

  const handleSavePattern = (e) => {
    e.preventDefault();

    if (!site || !gesture || !action) {
      showTemporaryError();
      return;
    }

    onSubmit({ site, gesture, action });
  };

  return (
    <form onSubmit={handleSavePattern}>
      <AlertMessage
        message="사이트, 패턴, 기능을 모두 선택해 주세요."
        type="error"
        visible={showErrorAlert}
      />

      <div className="mt-5">
        <label className="mb-1 block text-sm text-white">사이트 선택</label>
        <SiteDropdown
          value={site}
          onChange={setSite}
          isOpen={openDropdown === "site"}
          onToggle={() => toggleDropdown("site")}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1 block text-sm text-white">패턴 선택</label>
        <GestureDropdown
          value={gesture}
          onChange={setGesture}
          isOpen={openDropdown === "gesture"}
          onToggle={() => toggleDropdown("gesture")}
          editingGestureName={initialData.gesture}
          navigateToSettings={() => navigate("/settings")}
        />
      </div>

      <div className="mt-5">
        <label className="mb-1 block text-sm text-white">기능 선택</label>
        <ActionDropdown
          site={site}
          value={action}
          onChange={setAction}
          isOpen={openDropdown === "action"}
          onToggle={() => toggleDropdown("action")}
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

      <div className="absolute bottom-0 left-0 flex w-full justify-end gap-2 px-5 pb-5">
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
