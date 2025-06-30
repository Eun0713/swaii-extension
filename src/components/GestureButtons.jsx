import Button from "@/components/ui/Button";

const GestureButtons = ({ onSave, onCancel }) => {
  return (
    <div className="absolute bottom-0 left-0 flex w-full justify-end gap-2 px-5 pb-5">
      <Button onClick={onCancel} variant="default">
        취소
      </Button>
      <Button onClick={onSave} variant="primary" type="submit">
        저장
      </Button>
    </div>
  );
};

export default GestureButtons;
