import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import { SITE_ACTION_LABELS } from "@/constants/siteActionLabels";

const siteOptions = Object.keys(SITE_ACTION_LABELS);

const SiteDropdown = (props) => (
  <GenericDropdown {...props} items={siteOptions} label="사이트 선택" />
);

export default SiteDropdown;
