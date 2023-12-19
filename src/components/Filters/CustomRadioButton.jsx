const CustomRadioButton = ({ checked, onChange }) => {
  return (
    <div className="relative">
      <input
        type="radio"
        className="opacity-0 absolute h-[20px] w-[20px]"
        checked={checked}
        onClick={onChange}
      />
      <div
        className={`w-5 h-5 border-2 rounded-full flex items-center justify-center ${
          checked ? "bg-primary border-primary" : "border-gray-300"
        }`}
      >
        {checked && <div className="w-3 h-3 bg-white rounded-full"></div>}
      </div>
    </div>
  );
};

export default CustomRadioButton;
