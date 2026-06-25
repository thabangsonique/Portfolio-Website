export const Button = ({ children, size = "default", className = "" }) => {
  const baseClasses =
    " relative text-foreground rounded-full bg-btn-gradient shadow-lg shadow-primary/25 hover:bg-primary/90";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 test-base",
    large: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes}>
      <span className=" flex items-center justify-center">{children}</span>
    </button>
  );
};
