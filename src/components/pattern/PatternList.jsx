import { useEffect, useState } from "react";

import PatternItem from "@/components/pattern/PatternItem";
import selectMappingStore from "@/utils/mapping/selectMappingStore";
import { getSiteIcon, getGestureIcon } from "@/utils/ui/iconMapper";

const PatternList = () => {
  const [patternList, setPatternList] = useState([]);

  const loadPatternList = async () => {
    const { store } = await selectMappingStore();
    const list = await store.getAll();
    setPatternList(list);
  };

  useEffect(() => {
    loadPatternList();
  }, []);

  const handleDelete = () => {
    loadPatternList();
  };

  return (
    <div className="custom-scrollbar mt-6 flex max-h-[280px] flex-col gap-3 overflow-y-auto pr-2">
      {patternList.map((mapping) => (
        <PatternItem
          key={`${mapping.site}-${mapping.gesture}-${mapping.action}`}
          SiteIcon={getSiteIcon(mapping.site)}
          GestureIcon={getGestureIcon(mapping.gesture)}
          title={`${mapping.gesture}`}
          description={mapping.action}
          mapping={mapping}
          onDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default PatternList;
