const Button = ({
  children,
  variant = "primary",
  size = "medium",
  ...props
}) => {
  const baseClasses =
    "rounded focus:outline-none focus:ring-2 whitespace-nowrap";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
  };

  const sizes = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
