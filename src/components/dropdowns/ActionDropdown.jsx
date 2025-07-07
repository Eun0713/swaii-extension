import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import { SITE_ACTION_LABELS } from "@/constants/siteActionLabels";

const ActionDropdown = ({ site, ...props }) => {
  const actionOptions = SITE_ACTION_LABELS[site]
    ? Object.keys(SITE_ACTION_LABELS[site])
    : [];

  return <GenericDropdown {...props} items={actionOptions} label="기능 선택" />;
};
export default ActionDropdown;
