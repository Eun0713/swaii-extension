import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import { GESTURE_OPTIONS } from "@/constants/dropdownOptions";

const GestureDropdown = (props) => (
  <GenericDropdown {...props} items={GESTURE_OPTIONS} label="패턴 선택" />
);

export default GestureDropdown;
