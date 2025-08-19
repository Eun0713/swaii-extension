import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import { SITE_ACTION_LABELS } from "@/constants/siteActionLabels";
import { GenericDropdownProps, BaseDropdownItem } from "@/types/dropdown";

const siteOptions: BaseDropdownItem[] = Object.keys(SITE_ACTION_LABELS).map(
  (key) => ({
    label: key,
    value: key,
  })
);

const SiteDropdown = (props: Omit<GenericDropdownProps, "items" | "label">) => (
  <GenericDropdown {...props} items={siteOptions} label="사이트 선택" />
);

export default SiteDropdown;
