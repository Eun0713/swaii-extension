import WarningIcon from "@/assets/icons/icon-warning.svg?react";
import Button from "@/components/common/Button";
import { DeleteConfirmModalProps } from "@/types/modal";

const DeleteConfirmModal = ({
  title,
  description,
  onCancel,
  onConfirm,
}: DeleteConfirmModalProps) => {
  return (
    <div className="absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black bg-opacity-50">
      <div className="w-[350px] rounded-xl bg-white p-4">
        <div className="mb-2 flex justify-center">
          <WarningIcon className="h-10 w-10" />
        </div>
        <h2 className="mb-2 text-center text-base font-bold text-black">
          {title}
        </h2>
        <p className="mb-4 whitespace-pre-line text-center text-xs text-gray-700">
          {description}
        </p>
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
