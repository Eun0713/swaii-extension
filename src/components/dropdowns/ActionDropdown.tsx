import GenericDropdown from "@/components/dropdowns/GenericDropdown";
import { SITE_ACTION_LABELS } from "@/constants/siteActionLabels";
import { GenericDropdownProps, BaseDropdownItem } from "@/types/dropdown";

type ActionDropdownItem = BaseDropdownItem;

interface ActionDropdownProps
  extends Omit<GenericDropdownProps<ActionDropdownItem>, "items" | "label"> {
  site: keyof typeof SITE_ACTION_LABELS;
}

const ActionDropdown = ({ site, ...props }: ActionDropdownProps) => {
  const actionOptions: ActionDropdownItem[] = SITE_ACTION_LABELS[site]
    ? Object.keys(SITE_ACTION_LABELS[site]).map((action) => ({
        label: action,
        value: action,
      }))
    : [];

  return <GenericDropdown {...props} items={actionOptions} label="기능 선택" />;
};

export default ActionDropdown;
