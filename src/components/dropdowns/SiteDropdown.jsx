import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import { SITE_OPTIONS } from "@/constants/dropdownOptions";

const SiteDropdown = (props) => (
  <GenericDropdown {...props} items={SITE_OPTIONS} label="사이트 선택" />
);

export default SiteDropdown;
