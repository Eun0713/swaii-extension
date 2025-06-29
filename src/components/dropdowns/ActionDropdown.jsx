import IconDropdownArrow from "@/assets/icon-dropdown-arrow.svg?react";

const ActionDropdown = ({ isOpen, onToggle, value, onChange }) => {
  const actions = [
    "볼륨 높이기",
    "메일함 열기",
    "새 페이지 생성",
    "새 프레임 생성",
  ];

  return (
    <div className="relative w-full">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md bg-[#2F2F38] px-4 py-2 text-left text-white"
      >
        {value || "기능 선택"}
        <IconDropdownArrow className="ml-2" />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full rounded-md bg-[#2F2F38]">
          {actions.map((action) => (
            <li
              key={action}
              className="cursor-pointer px-4 py-2 text-white"
              onClick={() => {
                onChange(action);
                onToggle();
              }}
            >
              {action}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActionDropdown;
