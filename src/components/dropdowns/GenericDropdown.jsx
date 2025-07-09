import { useEffect, useState } from "react";

import DeleteButton from "@/assets/icons/icon-close.svg?react";
import IconDropdownArrow from "@/assets/icons/icon-dropdown-arrow.svg?react";
import AlertMessage from "@/components/common/AlertMessage";
import DeleteConfirmModal from "@/components/common/DeleteConfirmModal";
import gestureMappingStorage from "@/utils/gestureMappingStorage";
import { gestureStore } from "@/utils/gestureStorage";

const GenericDropdown = ({
  isOpen,
  onToggle,
  value,
  onChange,
  items,
  label,
  editingGestureName,
  navigateToSettings,
}) => {
  const [dropdownItems, setDropdownItems] = useState([]);
  const [alert, setAlert] = useState({
    message: "",
    type: "success",
    visible: false,
  });
  const [openModal, setOpenModal] = useState(false);
  const [gestureToDelete, setGestureToDelete] = useState(null);

  const loadGestureItems = async () => {
    const gestures = await gestureStore.getAll();
    const gestureItems = gestures.map((gesture) => ({
      label: gesture.name + (gesture.type === "custom" ? " (사용자)" : ""),
      value: gesture.name,
      type: gesture.type,
    }));
    setDropdownItems(gestureItems);
  };

  useEffect(() => {
    if (items !== "gesture") {
      setDropdownItems(items);
      return;
    }

    loadGestureItems();
  }, [items]);

  const deleteGesture = async (item) => {
    await gestureStore.remove({ name: item.value, type: "custom" });

    const mappings = await gestureMappingStorage.getAll();
    const updatedMappings = mappings.filter(
      (mapping) => mapping.gesture !== item.value
    );
    await gestureMappingStorage.setAll(updatedMappings);

    await loadGestureItems();

    if (item.value === value) {
      onChange("");
    }

    if (item.value === editingGestureName) {
      navigateToSettings();
    }

    setAlert({
      message: `${item.value} 제스처가 삭제되었습니다.`,
      type: "error",
      visible: true,
    });

    setTimeout(() => {
      setAlert((prev) => ({ ...prev, visible: false }));
    }, 1000);
  };

  const handleDelete = async (e, item) => {
    e.stopPropagation();

    const mappings = await gestureMappingStorage.getAll();
    const isMapped = mappings.some((mapping) => mapping.gesture === item.value);

    if (isMapped) {
      setGestureToDelete(item);
      setOpenModal(true);
      return;
    }

    await deleteGesture(item);
  };

  return (
    <>
      <AlertMessage
        message={alert.message}
        type={alert.type}
        visible={alert.visible}
      />

      {openModal && gestureToDelete && (
        <DeleteConfirmModal
          title="사용 중인 제스처입니다."
          description={`"${gestureToDelete.value}"을 삭제하면 연결된 동작도 함께 사라집니다.\n정말 삭제하시겠습니까?`}
          onCancel={() => {
            setOpenModal(false);
            setGestureToDelete(null);
          }}
          onConfirm={async () => {
            await deleteGesture(gestureToDelete);
            setOpenModal(false);
            setGestureToDelete(null);
          }}
        />
      )}

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

                {item.type === "custom" && (
                  <button type="button" onClick={(e) => handleDelete(e, item)}>
                    <DeleteButton />
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default GenericDropdown;
