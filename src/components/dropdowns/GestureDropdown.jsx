import IconDropdownArrow from "@/assets/icon-dropdown-arrow.svg?react";

const GestureDropdown = ({ isOpen, onToggle, value, onChange }) => {
  const gestures = ["원형 패턴", "무한대 패턴", "직선 패턴"];

  return (
    <div className="relative w-full">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md bg-[#2F2F38] px-4 py-2 text-left text-white"
      >
        {value || "패턴 선택"}
        <IconDropdownArrow className="ml-2" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full rounded-md bg-[#2F2F38]">
          {gestures.map((gesture) => (
            <li
              key={gesture}
              className="cursor-pointer px-4 py-2 text-white"
              onClick={() => {
                onChange(gesture);
                onToggle();
              }}
            >
              {gesture}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GestureDropdown;
