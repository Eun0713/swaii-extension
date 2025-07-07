import { useEffect, useState } from "react";

import IconDropdownArrow from "@/assets/icons/icon-dropdown-arrow.svg?react";
import { gestureStore } from "@/utils/gestureStorage";

const GenericDropdown = ({
  isOpen,
  onToggle,
  value,
  onChange,
  items,
  label,
}) => {
  const [dropdownItems, setDropdownItems] = useState([]);

  useEffect(() => {
    if (items !== "gesture") {
      setDropdownItems(items);
      return;
    }

    (async () => {
      const gestures = await gestureStore.getAll();

      const gestureItems = gestures.map((gesture) => ({
        label: gesture.name + (gesture.type === "custom" ? " (사용자)" : ""),
        value: gesture.name,
        type: gesture.type,
      }));

      setDropdownItems(gestureItems);
    })();
  }, [items]);

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
          {dropdownItems.map((item) => (
            <li
              key={`${item.value}-${item.type}`}
              className="cursor-pointer px-4 py-2 text-base text-white hover:bg-[#3A3A45]"
              onClick={() => {
                onChange(item.value);
                onToggle();
              }}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GenericDropdown;
