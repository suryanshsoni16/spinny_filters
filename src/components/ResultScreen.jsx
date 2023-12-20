import React from "react";

const Tag = ({ text, onClear }) => (
  <div className="flex items-center  h-[40px] bg-purple-600 text-white text-xs font-bold px-4 py-2 rounded">
    {text}
    <button
      onClick={onClear}
      className="ml-2 bg-purple-800 hover:bg-purple-900 rounded-full p-1 focus:outline-none"
    >
      ×
    </button>
  </div>
);

const ResultScreen = () => {
  // Function to handle clearing of all tags
  const handleClearAll = () => {
    console.log("Clear all tags");
  };

  return (
    <div className="mt-4 flex space-x-2">
      <button
        onClick={handleClearAll}
        className="bg-transparent h-[30px] hover:bg-purple-500 text-purple-700 font-semibold hover:text-white py-2 px-4 border border-purple-500 hover:border-transparent rounded"
      >
        Clear All
      </button>
      {[1, 1, 1, 1, 1, 1, 1, 1, 1]?.map(() => {
        return (
          <Tag text="Hyundai" onClear={() => console.log("Clear Hyundai")} />
          
        );
      })}
    </div>
  );
};

export default ResultScreen;
