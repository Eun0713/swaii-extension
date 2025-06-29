import PatternItem from "@/components/PatternItem";
import { mockPatterns } from "@/constants/patternMockData";

const PatternList = () => {
  return (
    <div className="custom-scrollbar mt-6 flex max-h-[270px] flex-col gap-3 overflow-y-auto pr-2">
      {mockPatterns.map((pattern) => (
        <PatternItem
          key={pattern.id}
          SiteIcon={pattern.siteIcon}
          GestureIcon={pattern.gestureIcon}
          title={pattern.title}
          description={pattern.description}
        />
      ))}
    </div>
  );
};

export default PatternList;
