import { useEffect, useState } from "react";

import AlertMessage from "@/components/common/AlertMessage";
import DeleteConfirmModal from "@/components/common/DeleteConfirmModal";
import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import useAlert from "@/hooks/useAlert";
import { gestureStore } from "@/utils/gesture/gestureStorage";
import selectGestureStore from "@/utils/gesture/selectGestureStore";
import gestureMappingStorage from "@/utils/mapping/gestureMappingStorage";

const GestureDropdown = ({
  value,
  onChange,
  editingGestureName,
  navigateToSettings,
  ...props
}) => {
  const [items, setItems] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [gestureToDelete, setGestureToDelete] = useState(null);
  const { alert, showAlert } = useAlert();

  const loadGestureItems = async () => {
    const { store } = await selectGestureStore();

    const defaultGestures = await gestureStore.getAll();
    const userCustomGestures = await store.getAll();

    const allGestures = [...defaultGestures, ...userCustomGestures];

    const gestureItems = allGestures.map((gesture) => ({
      label: gesture.name + (gesture.type === "custom" ? " (사용자)" : ""),
      value: gesture.name,
      type: gesture.type,
    }));

    setItems(gestureItems);
  };

  useEffect(() => {
    loadGestureItems();
  }, []);

  const deleteGesture = async (item) => {
    const { store } = await selectGestureStore();
    await store.remove({ name: item.value, type: "custom" });

    const mappings = await gestureMappingStorage.getAll();
    const updatedMappings = mappings.filter(
      (mapping) => mapping.gesture !== item.value
    );
    await gestureMappingStorage.setAll(updatedMappings);

    if (item.value === value) {
      onChange("");
    }

    if (item.value === editingGestureName) {
      navigateToSettings();
    }

    showAlert(`${item.value} 제스처가 삭제되었습니다.`, "error");

    await loadGestureItems();
  };

  const handleDelete = async (e, item) => {
    e.stopPropagation();

    const mappings = await gestureMappingStorage.getAll();
    const isMapped = mappings.some((mapping) => mapping.gesture === item.value);

    if (isMapped) {
      setGestureToDelete(item);
      setModalOpen(true);
      return;
    }

    await deleteGesture(item);
  };

  return (
    <>
      <AlertMessage {...alert} />

      {modalOpen && gestureToDelete && (
        <DeleteConfirmModal
          title="사용 중인 제스처입니다."
          description={`"${gestureToDelete.value}"을 삭제하면 연결된 동작도 함께 사라집니다.\n정말 삭제하시겠습니까?`}
          onCancel={() => {
            setModalOpen(false);
            setGestureToDelete(null);
          }}
          onConfirm={async () => {
            await deleteGesture(gestureToDelete);
            setModalOpen(false);
            setGestureToDelete(null);
          }}
        />
      )}

      <GenericDropdown
        {...props}
        value={value}
        onChange={onChange}
        items={items}
        label="패턴 선택"
        onDeleteClick={handleDelete}
      />
    </>
  );
};

export default GestureDropdown;
