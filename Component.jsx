const AccessibleButton = () => {
  const handleClick = () => {
    // handle click
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      handleClick();
    }
  };

  return (
    <button
      className="px-4 py-2 bg-blue-500 text-white rounded"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label="Action button"
      tabIndex={0}
    >
      Click me
    </button>
  );
};
