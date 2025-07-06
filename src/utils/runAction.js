import { SITE_ACTION_LABELS } from "@/constants/siteActionLabels";
import { siteActionRunners } from "@/utils/siteActionRunners";

export const runAction = (actionName, site) => {
  const actionKey = SITE_ACTION_LABELS?.[site]?.[actionName];

  if (!actionKey) {
    return;
  }

  const action = siteActionRunners[actionKey];

  if (typeof action === "function") {
    action();
  }
};
