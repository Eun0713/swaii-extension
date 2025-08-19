import DeleteButton from "@/assets/icons/icon-close.svg?react";
import IconDropdownArrow from "@/assets/icons/icon-dropdown-arrow.svg?react";
import { GenericDropdownProps, BaseDropdownItem } from "@/types/dropdown";

const GenericDropdown = <DropdownItemType extends BaseDropdownItem>({
  isOpen,
  onToggle,
  value,
  onChange,
  items,
  label,
  onDeleteClick,
}: GenericDropdownProps<DropdownItemType>) => {
  return (
    <div className="relative w-full">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md bg-[#2F2F38] px-4 py-2 text-left text-base text-white"
      >
        {value || label}
        <IconDropdownArrow
          className={`ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <ul className="scrollbar-hide absolute z-10 mt-1 max-h-24 w-full overflow-auto rounded-md bg-[#2F2F38]">
          {items.map((item) => (
            <li
              key={item.value}
              className="group flex items-center justify-between px-4 py-2 text-base text-white hover:bg-[#3A3A45]"
            >
              <span
                className="flex-1 cursor-pointer"
                onClick={() => {
                  onChange(item.value);
                  onToggle();
                }}
              >
                {item.label}
              </span>

              {"type" in item && item.type === "custom" && onDeleteClick && (
                <button type="button" onClick={(e) => onDeleteClick(e, item)}>
                  <DeleteButton />
                </button>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenericDropdown;
