import IconDropdownArrow from "@/assets/icon-dropdown-arrow.svg?react";

const GenericDropdown = ({
  isOpen,
  onToggle,
  value,
  onChange,
  items,
  label,
}) => {
  return (
    <div className="relative w-full">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md bg-[#2F2F38] px-4 py-2 text-left text-white"
      >
        {value || label}
        <IconDropdownArrow
          className={`ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full rounded-md bg-[#2F2F38]">
          {items.map((item) => (
            <li
              key={item}
              className="cursor-pointer px-4 py-2 text-white"
              onClick={() => {
                onChange(item);
                onToggle();
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenericDropdown;
