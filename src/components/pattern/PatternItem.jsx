import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import DeleteConfirmModal from "@/components/common/DeleteConfirmModal";
import GestureThumbnail from "@/components/gesture/GestureThumbnail";
import selectMappingStore from "@/utils/mapping/selectMappingStore";

const PatternItem = ({
  SiteIcon,
  GestureIcon,
  title,
  description,
  mapping,
  onDelete,
}) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenDeleteModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirmDeletePattern = async () => {
    try {
      const { store } = await selectMappingStore();

      await store.remove(mapping);

      onDelete();
      handleCloseDeleteModal();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEditPattern = () => {
    chrome.storage.local.set({ selectedPattern: mapping }, () => {
      navigate("/settings/edit");
    });
  };

  const renderDeleteModal = () => (
    <DeleteConfirmModal
      title="이 패턴을 삭제하시겠습니까?"
      description={`${title}에 연결된 ${description} 기능이 삭제됩니다.`}
      onCancel={handleOpenDeleteModal}
      onConfirm={handleConfirmDeletePattern}
    />
  );

  return (
    <>
      <div className="relative flex h-16 items-center justify-between rounded-xl bg-[#2F2F38] px-5 py-3">
        <div className="flex items-center gap-4">
          {SiteIcon && <SiteIcon className="h-10 w-10" />}
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-white">{title}</div>
            <div className="text-xs text-gray-300">{description}</div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex items-center justify-center">
            {GestureIcon ? (
              <GestureIcon className="h-7 w-7" />
            ) : (
              <GestureThumbnail points={mapping.points} />
            )}
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="muted" onClick={handleEditPattern} size="sm">
            수정
          </Button>
          <Button
            variant="neutralDanger"
            onClick={handleOpenDeleteModal}
            size="sm"
          >
            삭제
          </Button>
        </div>
      </div>

      {isModalOpen && renderDeleteModal()}
    </>
  );
};

export default PatternItem;
