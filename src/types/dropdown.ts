import { MouseEvent } from "react";

export interface BaseDropdownItem {
  value: string;
  label: string;
}

export interface GestureDropdownItem extends BaseDropdownItem {
  type: "default" | "custom";
}

export interface GenericDropdownProps<
  ItemType extends BaseDropdownItem = BaseDropdownItem,
> {
  isOpen: boolean;
  onToggle: () => void;
  value: string;
  onChange: (value: string) => void;
  items: ItemType[];
  label: string;
  onDeleteClick?: (e: MouseEvent<HTMLButtonElement>, item: ItemType) => void;
}

export interface GestureDropdownProps {
  value: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  editingGestureName?: string;
  navigateToSettings: () => void;
}
