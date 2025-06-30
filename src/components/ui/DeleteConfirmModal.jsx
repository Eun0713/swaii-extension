import WarningIcon from "@/assets/icons/icon-warning.svg?react";
import Button from "@/components/ui/Button";

const DeleteConfirmModal = ({ title, description, onCancel, onConfirm }) => {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="w-[360px] rounded-xl bg-white p-6">
        <div className="mb-2 flex justify-center">
          <WarningIcon className="h-10 w-10" />
        </div>
        <h2 className="mb-2 text-center text-base font-bold text-black">
          {title}
        </h2>
        <p className="mb-4 text-center text-xs text-gray-700">{description}</p>
        <div className="flex justify-end gap-2">
          <Button variant="default" onClick={onCancel} size="sm">
            취소
          </Button>
          <Button variant="danger" onClick={onConfirm} size="sm">
            삭제
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmModal;
