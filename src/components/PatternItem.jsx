import Button from "@/components/ui/Button";

const PatternItem = ({ SiteIcon, GestureIcon, title, description }) => {
  return (
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
        <Button variant="muted">수정</Button>
        <Button variant="danger">삭제</Button>
      </div>
    </div>
  );
};

export default PatternItem;
