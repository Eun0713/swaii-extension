import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import { ACTION_OPTIONS } from "@/constants/dropdownOptions";

const ActionDropdown = (props) => (
  <GenericDropdown {...props} items={ACTION_OPTIONS} label="기능 선택" />
);

export default ActionDropdown;
