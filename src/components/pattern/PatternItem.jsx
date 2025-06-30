import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "@/components/common/Button";
import DeleteConfirmModal from "@/components/common/DeleteConfirmModal";

const PatternItem = ({ SiteIcon, GestureIcon, title, description }) => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);
  const handleDeleteConfirm = () => {
    // TODO: 실제 삭제 처리 로직 연결
    handleCloseModal();
  };

  const renderDeleteModal = () => (
    <DeleteConfirmModal
      title="이 패턴을 삭제하시겠습니까?"
      description={`${title}에 연결된 ${description} 기능이 삭제됩니다.`}
      onCancel={handleCloseModal}
      onConfirm={handleDeleteConfirm}
    />
  );

  return (
    <>
      <div className="relative flex h-20 items-center justify-between rounded-xl bg-[#2F2F38] px-5 py-3">
        <div className="flex items-center gap-4">
          {SiteIcon && <SiteIcon className="h-8 w-8" />}
          <div className="flex flex-col">
            <div className="text-sm font-semibold text-white">{title}</div>
            <div className="text-xs text-gray-300">{description}</div>
          </div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="flex h-6 w-6 items-center justify-center">
            {GestureIcon && <GestureIcon className="h-6 w-6" />}
          </div>
        </div>

        <div className="flex gap-2">
          <Button variant="muted" onClick={() => navigate("/settings/edit")}>
            수정
          </Button>
          <Button variant="neutralDanger" onClick={handleOpenModal}>
            삭제
          </Button>
        </div>
      </div>

      {isModalOpen && renderDeleteModal()}
    </>
  );
};

export default PatternItem;
