const  CustomCheckbox = ({ checked, onChange }) => {
  return (
    <div className="relative">
      <input
        type="checkbox"
        className="opacity-0 absolute h-[20px] w-[20px]"
        checked={checked}
        onChange={onChange}
      />
      <div
        className={`w-5 h-5 border-2 rounded-sm flex items-center justify-center ${
          checked ? "bg-primary border-primary" : "border-gray-300"
        }`}
      >
        {checked && (
          <svg
            className="text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            width="16"
            height="16"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
        )}
      </div>
    </div>
  );
};
export default CustomCheckbox;