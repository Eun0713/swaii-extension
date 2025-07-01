import { useEffect, useState } from "react";

import PatternItem from "@/components/pattern/PatternItem";
import gestureMappingStorage from "@/utils/gestureMappingStorage";
import { getSiteIcon, getGestureIcon } from "@/utils/iconMapper";

const PatternList = () => {
  const [patternList, setPatternList] = useState([]);

  const loadPatternList = () => {
    setPatternList(gestureMappingStorage.getAll());
  };

  useEffect(() => {
    loadPatternList();
  }, []);

  return (
    <div className="custom-scrollbar mt-6 flex max-h-[280px] flex-col gap-3 overflow-y-auto pr-2">
      {patternList.map((mapping) => (
        <PatternItem
          key={`${mapping.site}-${mapping.gesture}-${mapping.action}`}
          SiteIcon={getSiteIcon(mapping.site)}
          GestureIcon={getGestureIcon(mapping.gesture)}
          title={`${mapping.gesture}`}
          description={mapping.action}
        />
      ))}
    </div>
  );
};

export default PatternList;
