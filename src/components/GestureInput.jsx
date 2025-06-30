const GestureInput = ({ value, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="gesture-name"
        className="mb-1 block w-[420px] text-left text-sm text-gray-400"
      >
        커스텀 제스처 이름
      </label>
      <input
        id="gesture-name"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="block w-[420px] rounded border border-gray-300 p-1 text-black"
      />
    </div>
  );
};

export default GestureInput;
