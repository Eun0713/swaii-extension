import IconDropdownArrow from "@/assets/icon-dropdown-arrow.svg?react";

const SiteDropdown = ({ isOpen, onToggle, value, onChange }) => {
  const sites = ["Youtube.com", "Notion.com", "Google.com", "Figma.com"];

  return (
    <div className="relative w-full">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between rounded-md bg-[#2F2F38] px-4 py-2 text-left text-white"
      >
        {value || "사이트 선택"}
        <IconDropdownArrow className="ml-2" />
      </button>
      {isOpen && (
        <ul className="absolute z-10 mt-1 w-full rounded-md bg-[#2F2F38]">
          {sites.map((site) => (
            <li
              key={site}
              className="cursor-pointer px-4 py-2 text-white"
              onClick={() => {
                onChange(site);
                onToggle();
              }}
            >
              {site}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SiteDropdown;
